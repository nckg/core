<?php namespace Rocket\Articles\UseCases;

use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Articles\ArticleRepository;

class DeleteArticleHandler implements Handler
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
     * @param ArticleRepository $repository
     * @param Dispatcher $dispatcher
     */
    public function __construct(ArticleRepository $repository, Dispatcher $dispatcher)
    {
        $this->dispatcher = $dispatcher;
        $this->repository = $repository;
    }

    /**
     * @param UpdateArticleRequest $request
     * @return UpdateArticleResponse
     */
    public function handle($request)
    {
        $this->repository->delete($request->article);

        return new DeleteArticleResponse($request->article);
    }
}