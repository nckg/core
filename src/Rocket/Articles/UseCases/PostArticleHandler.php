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
     * @param CommandBus $bus
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
        $pageRequest = new PostPageRequest(
            $request->user,
            $request->title,
            $request->body,
            $request->pageId,
            $request->templateId,
            false
        );

        // create a new page for it
        $pageResponse = $this->bus->execute($pageRequest);

        $article = Article::register(
            $request->user,
            $request->title,
            $request->summary,
            null
        );

        $pageResponse->page->article()->save($article);

        return new PostArticleResponse($article);
    }
}