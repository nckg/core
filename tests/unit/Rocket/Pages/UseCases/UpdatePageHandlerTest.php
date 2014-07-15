<?php

use Way\Tests\Factory;
use Way\Tests\Should;
use Illuminate\Support\Collection;

class UpdatePageHandlerTest extends TestCase
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

    public function testCanUpdatePage()
    {
        // arrange
        $repository = new \Rocket\Pages\EloquentPageRepository(new \Rocket\Pages\Page);
        $dispatcher = $this->mock('Rocket\Events\Dispatcher');
        $handler = new \Rocket\Pages\UseCases\UpdatePageHandler($repository, $dispatcher);

        $request = new stdClass;
        $request->page = \Rocket\Pages\Page::find(2);
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

    public function testCanUpdatePageWithSameName()
    {
        // arrange
        $repository = new \Rocket\Pages\EloquentPageRepository(new \Rocket\Pages\Page);
        $dispatcher = $this->mock('Rocket\Events\Dispatcher');
        $handler = new \Rocket\Pages\UseCases\UpdatePageHandler($repository, $dispatcher);

        $request = new stdClass;
        $request->page = \Rocket\Pages\Page::find(2);
        $request->title = 'Page';
        $request->body = '{"data": []}';
        $request->user = new stdClass;
        $request->user->id = 1;
        $request->pageId = 1;
        $request->templateId = 2;

        // act
        $response = $handler->handle($request);

        // assert
        Should::equal('page', $response->page->slug);
    }
}