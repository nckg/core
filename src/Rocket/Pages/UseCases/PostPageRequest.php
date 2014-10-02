<?php namespace Rocket\Pages\UseCases;

use Rocket\Accounts\User;

class PostPageRequest
{
    public $user;
    public $title;
    public $body;
    public $pageId;
    public $templateId;
    /**
     * @var bool
     */
    public $editable;

    /**
     * @param User $user
     * @param $title
     * @param $body
     * @param $pageId
     * @param $templateId
     * @param bool $editable
     */
    public function __construct(User $user, $title, $body, $pageId, $templateId, $editable = true)
    {
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->pageId = $pageId;
        $this->templateId = $templateId;
        $this->editable = $editable;
    }
}