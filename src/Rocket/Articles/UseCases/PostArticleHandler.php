<?php namespace Rocket\Articles\UseCases;

use Rocket\CommandBus\CommandBus;
use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Articles\ArticleRepository;
use Rocket\Articles\Article;
use Rocket\Pages\Page;
use Rocket\Pages\PageRepository;
use Rocket\Pages\UseCases\PostPageRequest;

class PostArticleHandler implements Handler
{
    /**
     * @var \Rocket\Events\Dispatcher
     */
    private $dispatcher;
    /**
     * @var ArticleRepository
     */
    private $repository;
    /**
     * @var PageRepository
     */
    private $pageRepository;
    /**
     * @var CommandBus
     */
    private $bus;

    /**
     * @param ArticleRepository $repository
     * @param PageRepository $pageRepository
     * @param Dispatcher $dispatcher
     */
    public function __construct(ArticleRepository $repository, PageRepository $pageRepository, Dispatcher $dispatcher, CommandBus $bus)
    {
        $this->dispatcher = $dispatcher;
        $this->repository = $repository;
        $this->pageRepository = $pageRepository;
        $this->bus = $bus;
    }

    /**
     * @param PostArticleRequest $request
     * @return PostArticleResponse
     */
    public function handle($request)
    {
        $article = Article::register($request->user, $request->title, $request->body, null);
        $this->repository->save($article);

        $body = '{"data": [{"type": "blog", "data": {"type": "detail", "id": ' . $article->id . '} } ] }';
        $pageRequest = new PostPageRequest($request->user, $request->title, $body, $request->pageId, \Config::get('core::view.article.template_id'));

        // create a new page for it
        $pageResponse = $this->bus->execute($pageRequest);

        $pageResponse->page->articles()->associate($article);

        return new PostArticleResponse($article);
    }
}