<?php namespace Rocket\Articles\UseCases;

use Carbon\Carbon;
use Rocket\Accounts\User;
use Rocket\Articles\Article;

class UpdateArticleRequest
{
    /*
     * Article
     */
    public $article;
    /*
     * User
     */
    public $user;
    public $title;
    public $body;
    public $summary;
    public $publishAt;
    public $imageId;

    /**
     * @param Article $article
     * @param User $user
     * @param $title
     * @param $body
     * @param $summary
     */
    public function __construct(Article $article, User $user, $title, $body, $summary, $imageId = null, Carbon $publishAt = null)
    {
        $this->article = $article;
        $this->user = $user;
        $this->title = $title;
        $this->body = $body;
        $this->summary = $summary;
        $this->publishAt = $publishAt;
        $this->imageId = $imageId;
    }
}