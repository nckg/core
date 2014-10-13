<?php namespace Rocket\Articles;

use McCool\LaravelAutoPresenter\BasePresenter;
use App, Input, Str, Request;

class ArticlePresenter extends BasePresenter
{
    public function __construct(Article $article)
    {
        $this->resource = $article;
    }

    public function title()
    {
        return $this->resource->title;
    }
}