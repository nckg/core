<?php namespace Rocket\Articles\UseCases;

use Carbon\Carbon;
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
     * @var Carbon|null
     */
    public $publishAt;
    /**
     * @var null
     */
    public $imageId;

    /**
     * @param User $user
     * @param $title
     * @param $summary
     * @param $body
     * @param $templateId
     * @param $pageId
     * @param null $imageId
     * @param Carbon|null $publishAt
     */
    public function __construct(User $user, $title, $summary, $body, $templateId, $pageId, $imageId = null, Carbon $publishAt = null)
    {
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->templateId = $templateId;
        $this->summary = $summary;
        $this->pageId = $pageId;
        $this->publishAt = $publishAt;
        $this->imageId = $imageId;
    }
}