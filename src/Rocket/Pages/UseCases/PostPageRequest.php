<?php namespace Rocket\Pages\UseCases;

use Carbon\Carbon;
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
     * @var Carbon
     */
    public $publishAt;

    /**
     * @param User $user
     * @param $title
     * @param $body
     * @param $pageId
     * @param $templateId
     * @param bool $editable
     * @param Carbon $publishAt
     */
    public function __construct(User $user, $title, $body, $pageId, $templateId, $editable = true, Carbon $publishAt = null)
    {
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->pageId = $pageId;
        $this->templateId = $templateId;
        $this->editable = $editable;
        $this->publishAt = $publishAt;
    }
}