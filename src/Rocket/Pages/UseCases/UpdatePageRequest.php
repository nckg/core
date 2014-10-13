<?php namespace Rocket\Pages\UseCases;

use Carbon\Carbon;
use Rocket\Accounts\User;
use Rocket\Pages\Page;

class UpdatePageRequest
{
    public $page;
    public $user;
    public $title;
    public $body;
    public $pageId;
    public $templateId;
    public $active;
    public $publishAt;


    /**
     * @param Page $page
     * @param User $user
     * @param $title
     * @param $body
     * @param $pageId
     * @param $templateId
     * @param $active
     * @param Carbon $publishAt
     */
    public function __construct(Page $page, User $user, $title, $body, $pageId, $templateId, $active = true, Carbon $publishAt = null)
    {
        $this->page = $page;
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->pageId = $pageId;
        $this->templateId = $templateId;
        $this->active = $active;
        $this->publishAt = $publishAt;
    }
}