<?php namespace Rocket\Controllers\Api;

use Rocket\CommandBus\CommandBus;
use Rocket\Pages\Templates\TemplateRepository;
use Rocket\Pages\Templates\UseCases\PostTemplateRequest;
use Rocket\Pages\Templates\UseCases\UpdateTemplateRequest;

class TemplateController extends BaseController {

    /**
     *
     * @var TemplateRepository
     */
    protected $templates;

    /**
     * Default constructor
     *
     * @param TemplateRepository $templates
     * @param CommandBus $bus
     */
    public function __construct(TemplateRepository $templates, CommandBus $bus)
    {
        $this->templates = $templates;
        $this->bus = $bus;
    }

    /**
     * Show the index page
     *
     * @return View
     */
    public function index()
    {
        return $this->templates->getAll();
    }

    public function show($id)
    {
        return $this->templates->requireById($id);
    }

    /**
     * Stores the page
     *
     * @return Redirect
     */
    public function store()
    {
        $request = new PostTemplateRequest(
            \Sentry::getUser(),
            \Input::get('name'),
            \Input::get('body')
        );

        $response = $this->bus->execute($request);

        return \Redirect::action('Rocket\Controllers\Api\TemplateController@show', [$response->template->id]);
    }

    /**
     * Save the page to the database.
     *
     * @param  integer $id
     * @return Redirect
     */
    public function update($id)
    {
        $template = $this->templates->requireById($id);

        $request = new UpdateTemplateRequest(
            $template,
            \Sentry::getUser(),
            \Input::get('name'),
            \Input::get('body')
        );

        $this->bus->execute($request);
    }
}
