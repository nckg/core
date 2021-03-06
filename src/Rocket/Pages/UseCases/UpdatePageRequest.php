<?php namespace Rocket\Pages\UseCases;

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


    public function __construct(Page $page, User $user, $title, $body, $pageId, $templateId)
    {
        $this->page = $page;
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->pageId = $pageId;
        $this->templateId = $templateId;
    }
}