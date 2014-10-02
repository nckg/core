<?php namespace Rocket\Articles\UseCases;

use Rocket\Accounts\User;

class PostArticleRequest
{
    public $user;
    public $title;
    public $body;
    public $pageId;
    public $templateId;
    public $summary;

    /**
     * @param User $user
     * @param $title
     * @param $summary
     * @param $body
     * @param $templateId
     */
    public function __construct(User $user, $title, $summary, $body, $templateId, $pageId)
    {
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->templateId = $templateId;
        $this->summary = $summary;
        $this->pageId = $pageId;
    }
}