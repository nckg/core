<?php namespace Rocket\Controllers\Api;

use Carbon\Carbon;
use Rocket\Articles\ArticleRepository;
use Rocket\Articles\UseCases\DeleteArticleRequest;
use Rocket\Articles\UseCases\PostArticleRequest;
use Rocket\Articles\UseCases\UpdateArticleRequest;
use Rocket\CommandBus\CommandBus;
use Rocket\Settings\Setting;

class ArticlesController extends BaseController {
    /**
     * @var ArticleRepository
     */
    protected $articles;

    /**
     * Default constructor
     *
     * @param ArticleRepository $articles
     * @param CommandBus $bus
     * @internal param PageRepository $pages
     */
    public function __construct(ArticleRepository $articles, CommandBus $bus)
    {
        $this->articles = $articles;
        $this->bus = $bus;
    }

    /**
     * All the news items
     *
     * @return Collection
     */
    public function index()
    {
        return $this->articles->getAll();
    }

    /**
     * Show a single item
     *
     * @param  integer $id
     * @return Article
     */
    public function show($id)
    {
        return $this->articles->requireById($id);
    }

    /**
     * Store the newly created article into the database
     *
     * @return Redirect
     */
    public function store()
    {
        // create article
        $request = new PostArticleRequest(
            \Sentry::getUser(),
            \Input::get('title'),
            \Input::get('summary'),
            \Input::get('body'),
            Setting::where('key', 'blog.item.template')->first()->value,
            Setting::where('key', 'blog.page_id')->first()->value,
            \Input::get('image_id'),
            \Input::get('publish_at') ? Carbon::createFromFormat('Y-m-d H:i', \Input::get('publish_at')) : null
        );

        $response = $this->bus->execute($request);

        return \Redirect::route('api.article.show', array($response->article->id));
    }

    /**
     * Save an article to the database
     *
     * @param  integer $id
     * @return Redirect
     */
    public function update($id)
    {
        $request = new UpdateArticleRequest(
            $this->articles->requireById($id),
            \Sentry::getUser(),
            \Input::get('title'),
            \Input::get('body'),
            \Input::get('summary'),
            \Input::get('image_id'),
            \Input::get('publish_at') ? Carbon::createFromFormat('Y-m-d H:i', \Input::get('publish_at')) : null
        );

        $response = $this->bus->execute($request);

        return $response->article;
    }

    /**
     * Destroys an article
     *
     * @param  integer $id
     * @return Redirect
     */
    public function destroy($id)
    {
        // destroy the article
        $request = new DeleteArticleRequest($this->articles->requireById($id), \Sentry::getUser());

        $this->bus->execute($request);
    }

}

