<?php

use Way\Tests\Factory;
use Way\Tests\Should;
use Illuminate\Support\Collection;

class PostPageHandlerTest extends TestCase
{
    /**
     * Setup the test environment.
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        // migrate database and seed
        $this->migrateAndSeed();
    }

    /**
     * Create the PageRepositoryInterfaceMock
     *
     * @return Mockery
     */
    public function createMock()
    {
        return $this->mock('Rocket\Pages\PageRepository');
    }

    public function testCanCreateNewPage()
    {
        // arrange
        $repository = new \Rocket\Pages\EloquentPageRepository(new \Rocket\Pages\Page);
        $dispatcher = $this->mock('Rocket\Events\Dispatcher');
        $handler = new \Rocket\Pages\UseCases\PostPageHandler($repository, $dispatcher);

        $request = new stdClass;
        $request->title = 'New Page';
        $request->body = '{"data": []}';
        $request->user = new stdClass;
        $request->user->id = 1;
        $request->pageId = 1;
        $request->templateId = 2;

        // act
        $response = $handler->handle($request);

        // assert
        Should::equal('new-page', $response->page->slug);
    }

    public function testCreatingSamePageTitleGeneratesDifferentSlug()
    {
        // arrange
        $repository = new \Rocket\Pages\EloquentPageRepository(new \Rocket\Pages\Page);
        $dispatcher = $this->mock('Rocket\Events\Dispatcher');
        $handler = new \Rocket\Pages\UseCases\PostPageHandler($repository, $dispatcher);

        $request = new stdClass;
        $request->title = 'Page';
        $request->body = '{"data": []}';
        $request->user = new stdClass;
        $request->user->id = 1;
        $request->pageId = 1;
        $request->templateId = 2;

        // act
        $response = $handler->handle($request);

        // assert
        Should::equal('page-2', $response->page->slug);
    }
}