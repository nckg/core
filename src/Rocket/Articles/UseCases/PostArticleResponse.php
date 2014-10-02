<?php namespace Rocket\Articles\UseCases;

use Rocket\Articles\Article;

class PostArticleResponse
{
    /**
     * @var \Rocket\Articles\Article
     */
    public $article;

    public function __construct(Article $article)
    {
        $this->article = $article;
    }
}