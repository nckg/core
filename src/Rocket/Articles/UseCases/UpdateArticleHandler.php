<?php namespace Rocket\Articles\UseCases;

use Rocket\CommandBus\CommandBus;
use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Articles\ArticleRepository;
use Rocket\Pages\UseCases\UpdatePageRequest;

class UpdateArticleHandler implements Handler
{
    /**
     * @var \Rocket\Articles\ArticleRepository
     */
    private $articles;

    /**
     * @var \Rocket\Events\Dispatcher
     */
    private $dispatcher;
    /**
     * @var CommandBus
     */
    private $bus;

    /**
     * @param ArticleRepository $articles
     * @param CommandBus $bus
     * @param Dispatcher $dispatcher
     */
    public function __construct(ArticleRepository $articles, CommandBus $bus, Dispatcher $dispatcher)
    {
        $this->articles = $articles;
        $this->dispatcher = $dispatcher;
        $this->bus = $bus;
    }

    /**
     * @param UpdateArticleRequest $request
     * @return UpdateArticleResponse
     */
    public function handle($request)
    {
        $pageRequest = new UpdatePageRequest(
            $request->article->page,
            $request->user,
            $request->title,
            $request->body,
            $request->article->page->page_id,
            $request->article->page->template_id,
            true,
            $request->publishAt
        );

        // create a new page for it
        $this->bus->execute($pageRequest);

        $article = $request->article;
        $article->user_id = $request->user->id;
        $article->title = $request->title;
        $article->summary = $request->summary;
        $article->publish_at = $request->publishAt;
        $article->image_id = $request->imageId;

        $this->articles->save($article);

        return new PostArticleResponse($article);
    }
}