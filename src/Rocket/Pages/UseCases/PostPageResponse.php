<?php namespace Rocket\Pages\UseCases;

use Rocket\Pages\Page;

class PostPageResponse
{
    /**
     * @var \Rocket\Pages\Page
     */
    public $page;

    public function __construct(Page $page)
    {
        $this->page = $page;
    }
}