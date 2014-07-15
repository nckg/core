<?php namespace Rocket\Articles\UseCases;

use Rocket\Articles\Article;

class DeleteArticleResponse
{
    /**
     * @var \Rocket\Articles\Article
     */
    public $article;

    /**
     * @param Article $article
     */
    public function __construct(Article $article)
    {
        $this->article = $article;
    }
}