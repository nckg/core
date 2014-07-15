<?php namespace Rocket\Pages\UseCases;

use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Pages\PageRepository;

class DeletePageHandler implements Handler
{
    /**
     * @var \Rocket\Pages\PageRepository
     */
    private $pageRepository;

    /**
     * @var \Rocket\Events\Dispatcher
     */
    private $dispatcher;

    public function __construct(PageRepository $pageRepository, Dispatcher $dispatcher)
    {
        $this->pageRepository = $pageRepository;
        $this->dispatcher = $dispatcher;
    }

    /**
     * @param UpdatePageRequest $request
     * @return UpdatePageResponse
     */
    public function handle($request)
    {
        $this->pageRepository->delete($request->page);

        return new DeletePageResponse($request->page);
    }
}