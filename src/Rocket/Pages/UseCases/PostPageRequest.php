<?php namespace Rocket\Pages\UseCases;

use Rocket\Accounts\User;

class PostPageRequest
{
    public $user;
    public $title;
    public $body;
    public $pageId;
    public $templateId;

    public function __construct(User $user, $title, $body, $pageId, $templateId)
    {
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->pageId = $pageId;
        $this->templateId = $templateId;
    }
}