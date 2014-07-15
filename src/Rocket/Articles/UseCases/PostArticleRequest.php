<?php namespace Rocket\Articles\UseCases;

use Rocket\Accounts\User;

class PostArticleRequest
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