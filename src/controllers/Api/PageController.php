<?php namespace Rocket\Controllers\Api;

use Rocket\Pages\UseCases\DeletePageRequest;
use Rocket\Pages\UseCases\PostPageRequest;
use Rocket\Pages\UseCases\UpdatePageRequest;
use Rocket\Pages\PageRepository;
use Rocket\CommandBus\CommandBus;

class PageController extends BaseController {

    /**
     *
     * @var PageRepository
     */
    protected $pages;
    protected $bus;

    /**
     * Default constructor
     *
     * @param PageRepository $pages
     */
    public function __construct(PageRepository $pages, CommandBus $bus)
    {
        $this->pages = $pages;
        $this->bus = $bus;
    }

    /**
     * Show the index page
     *
     * @return View
     */
    public function index()
    {
        if (\Input::get('page_type_id')) {
            return $this->pages->getBy('page_type_id', \Input::get('page_type_id'));
        }

        return $this->pages->getAll();
    }

    public function show($id)
    {
        return $this->pages->requireById($id);
    }

    /**
     * Stores the page
     *
     * @return Redirect
     */
    public function store()
    {
        $request = new PostPageRequest(
            \Sentry::getUser(),
            \Input::get('title'),
            \Input::get('body'),
            \Input::get('page_id'),
            \Input::get('template_id')
        );

        $response = $this->bus->execute($request);

        return \Redirect::action('Rocket\Controllers\Api\PageController@show', [$response->page->id]);
    }

    /**
     * Save the page to the database.
     *
     * @param  integer $id
     * @return Redirect
     */
    public function update($id)
    {
        $page = $this->pages->requireById($id);

        $request = new UpdatePageRequest(
            $page,
            \Sentry::getUser(),
            \Input::get('title'),
            \Input::get('body'),
            \Input::get('page_id'),
            \Input::get('template_id'),
            \Input::get('active')
        );

        $response = $this->bus->execute($request);

        return $response->page;
    }

    /**
     * Destroys a page :(
     *
     * @param  integer $id
     * @return Redirect
     */
    public function destroy($id)
    {
        // destroy the article
        $page = $this->pages->requireById($id);
        $request = new DeletePageRequest($page, \Sentry::getUser());

        $this->bus->execute($request);
    }
}
