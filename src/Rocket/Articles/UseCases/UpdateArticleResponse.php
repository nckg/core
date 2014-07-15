<?php namespace Rocket\Articles\UseCases;

use Rocket\Articles\Article;

class UpdateArticleResponse
{
    /**
     * @var \Rocket\Articles\Article
     */
    public $page;

    public function __construct(Article $page)
    {
        $this->page = $page;
    }
}