<?php namespace Rocket\Core\Controllers;

use Rocket\Pages\PageRepository;

class FrontendController extends BaseController {

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
        $page = $this->pages->getBy('slug', '=', $slug)->first();

        // there wasn't a page found, maybe it's a module or something
        // like that? We will search the database for that.
        // We'll work our way back from the full slug
        if ( ! $page) {
            // $slugs = explode('/', $slug);

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

        return \View::make($page->template->template, [
            'page' => $page,
        ]);
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
        $hasForm = false;

        foreach ($page->blocks() as $block) {
            if ($block->getType() === 'form') {
                $hasForm = $block;
            }
        }

        // return to the page if there was a post but not form was detected
        if (!$hasForm) {
            \Redirect::to($lug);
        }

        // find values and save them
        $formData = array();
        $rules = array();

        // loop each elemand and add to $formData
        // and create the validation rules
        foreach ($hasForm->getFields() as $element) {
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
            return \Redirect::to($slug)
                ->withInput()
                ->withErrors($validator);
        }

        // dat e-mail
        $settings = $hasForm->getSettings();
        $emailData = array(
            'formData' => $formData,
            'subject' => $settings['subject']
        );

        \Mail::send('site::emails.form', $emailData, function($message) use ($settings)
        {
            // add first email address als
            $to = array_shift($settings['mail']);
            $message->to($to);

            // loop through each mail
            if (!empty($settings['mail'])) {
                foreach ($settings['mail'] as $email) {
                    $message->cc($email);
                }
            }

            // add subject
            // TODO: put this into a config settings
            $subject = 'Ingevuld formulier op %s: %s';
            $message->subject(sprintf($subject, \Config::get('app.url'), $settings['subject']));
        });

        // return page
        \Notification::success($settings['on_success']);

        return \View::make($page->type->template)
            ->with('page', $page);
    }
}