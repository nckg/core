<?php namespace Rocket\Articles\UseCases;

use Rocket\Accounts\User;
use Rocket\Articles\Article;

class DeleteArticleRequest
{
    public $article;
    public $user;

    public function __construct(Article $article, User $user)
    {
        $this->user = $user;
        $this->article = $article;
    }
}