<?php namespace Rocket\Controllers\Api;

use Rocket\Articles\ArticleRepository;
use Rocket\Articles\UseCases\PostArticleRequest;
use Rocket\CommandBus\CommandBus;

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
//        $request = new PostArticleRequest(
//            \Sentry::getUser(),
//            \Input::get('title'),
//            \Input::get('body'),
//        );
//
//        // create a new page for it
//        $pageRequest = new PostPageRequest(
//            \Sentry::getUser(),
//            \Input::get('title'),
//            \Input::get('body'),
//            \Input::get('page_id'),
//            \Input::get('template_id')
//        );
//
//        $pageResponse = $this->bus->execute($pageRequest);


//        $page = new \App\Models\Page;
//        $page->title = \Input::get('title');
//        $page->slug = \Str::slug(\Input::get('title'));
//        $page->page_id = \Input::get('page_id');
//        $page->page_type_id = \Config::get('rocketship.page_type.blog_item');
//        $page->user_id = \Sentry::getUser()->id;
//
//        // create new page
//        $page = $this->page->create($page);
//
//        // create a new article
//        $article = new \App\Models\Article;
//        $article->user_id = \Sentry::getUser()->id;
//        $article->title = \Input::get('title');
//        $article->body = \Input::get('body');
//        $article->page_id = $page->id;
//
//        $page->article()->save($article);
//
//        // add id to the page
//        $page->body = '{"data": [{"type": "blog", "data": {"type": "detail", "id": ' . $article->id . '} } ] }';
//        $page->save();
//
//        return $article;
    }

    /**
     * Save an article to the database
     *
     * @param  integer $id
     * @return Redirect
     */
    public function update($id)
    {
//        try {
//            $article = $this->article->find($id);
//
//            $article->user_id = \Sentry::getUser()->id;
//            $article->title = \Input::get('title');
//            $article->body = \Input::get('body');
//
//            // update page
//            $page = $article->page;
//            $page->title = \Input::get('title');
//            $page->slug = \Str::slug(\Input::get('title'));
//
//            $this->page->update($page);
//
//            return $this->article->update($article);
//        } catch (\Exception $e) {
//            \App::abort(500, $e->getMessage());
//        }
    }

    /**
     * Destroys an article
     *
     * @param  integer $id
     * @return Redirect
     */
    public function destroy($id)
    {
//        // destroy the article
//        $article = $this->article->find($id);
//
//        $article->delete();
    }

}

