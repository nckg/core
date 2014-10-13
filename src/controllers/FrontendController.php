<?php namespace Rocket\Core\Controllers;

use Rocket\Forms\Form;
use Rocket\Forms\FormData;
use Rocket\Pages\PageRepository;

class FrontendController extends BaseController
{

    /**
     *
     * @var PageRepository
     */
    protected $pages;

    /**
     * Default constructor
     *
     * @param PageRepository     $pages
     */
    public function __construct(PageRepository $pages)
    {
        $this->pages = $pages;
    }

    private function findPage($slug)
    {
        // find page
        $page = $this->pages->getActiveBySlug($slug);

        // there wasn't a page found, maybe it's a module or something
        // like that? We will search the database for that.
        // We'll work our way back from the full slug
        if ( ! $page) {
            \App::abort(404, 'Page not found');
        }

        return $page;
    }

    /**
     * Show the homepage
     *
     * @return View
     */
    public function index()
    {
        return $this->show('');
    }

    /**
     * Show a page
     *
     * @param  string $slug
     * @return View
     */
    public function show($slug)
    {
        // find page
        $page = $this->findPage($slug);

        return \View::make($page->template->template, array(
            'page' => $page,
        ));
    }

    /**
     * What happens on a post
     *
     * @param  string $slug
     * @return mixed
     */
    public function post($slug)
    {
        // find page
        $page = $this->findPage($slug);

        // check if page has form
        $form = Form::findOrFail(\Input::get('form_id'));

        // return to the page if there was a post but not form was detected
        if ( ! $form) {
            \Redirect::to($slug);
        }

        // find values and save them
        $formData = array();
        $rules = array();

        // loop each elemand and add to $formData
        // and create the validation rules
        foreach ($form->fields as $element) {
            $key = \Str::slug($element['label']);

            // add to rules, if any
            if ($element['validation'] !== '') {
                $rules[$key] = $element['validation'];
            }

            // fill form data
            switch ($element['type']) {
                case 'select':
                    $formData[$element['label']] = $element['value'][\Input::get($key)];
                    break;

                default:
                    $formData[$element['label']] = \Input::get($key);
                    break;
            }
        }

        // validate form
        $validator = \Validator::make(\Input::all(), $rules);
        if ($validator->fails()) {
            return \Redirect::to($slug . '#form-' . $form->id)
                ->withInput()
                ->withErrors($validator);
        }

        // save data
        $dataModel = new FormData;
        $dataModel->data = json_encode($formData);

        $form->formData()->save($dataModel);

        // dat e-mail
        $emailData = array(
            'formData' => $formData,
            'subject' => $form->title
        );

        \Mail::send('emails.form', $emailData, function($message) use ($form)
        {
            // add first email address als
            $message->from('info@arendonkzingt.be', 'Arendonk Zingt & Swingt');
            $emails = explode(';', $form->email_to);
            $to = array_shift($emails);
            $message->to($to);

            // loop through each mail
            if ( ! empty($emails)) {
                foreach ($emails as $email) {
                    $message->cc($email);
                }
            }

            // add subject
            // TODO: put this into a config settings
            $subject = 'Ingevuld formulier op %s: %s';
            $message->subject(sprintf($subject, \Config::get('app.url'), $form->title));
        });

        return \Redirect::to($page->path . '#form-' . $form->id)
            ->withInput()
            ->with('success', $form->success);
    }
}