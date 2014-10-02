<?php namespace Rocket\Pages\UseCases;

use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Pages\Page;
use Rocket\Pages\PageRepository;

class UpdatePageHandler implements Handler
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

    private function update(Page $page)
    {
        // We're going to try and get the parent slug if the input has a
        // 'page_id' identifier. There is no need to go all the way up the
        // tree because the full parent slug is already saved into the
        // parent page. The only thing we're checking here is that the slug
        // is unique and we're adding a number to it each time it's not unique
        if ($page->page_id and $page->id !== 1) {
            $parentPage = $this->pageRepository->getById($page->page_id);

            $page->path = ($parentPage and $parentPage->slug) ? $parentPage->path . '/' . $page->slug : $page->slug;
            $index = 1;

            do {
                $isUnique = $this->pageRepository->isUnique($page);

                if ($isUnique == false) {
                    $page->slug = rtrim($page->slug, '-' . $index) . '-' . ($index + 1);
                    $index++;
                }
            } while ($isUnique === false);
        }

        if ($page->id === 1) {
            $page->slug = '';
            $page->path = '';
            $page->page_id = null;
        }

        $this->pageRepository->save($page);

        // update child pages
        foreach ($page->children as $child) {
            $this->update($child);
        }

        return $page;
    }

    /**
     * @param UpdatePageRequest $request
     * @return UpdatePageResponse
     */
    public function handle($request)
    {
        $page = $request->page;
        $page->title = $request->title;
        $page->body = $request->body;
        $page->user_id = $request->user->id;
        $page->slug = \Str::slug($request->title);
        $page->page_id = $request->pageId;
        $page->template_id = $request->templateId ? $request->templateId : 1;
        $page->active = $request->active;

        $page = $this->update($page);

        return new UpdatePageResponse($page);
    }
}