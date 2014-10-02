<?php namespace Rocket\Pages;

use McCool\LaravelAutoPresenter\BasePresenter;
use App, Input, Str, Request;

class PagePresenter extends BasePresenter
{
    public function __construct(Page $page)
    {
        $this->resource = $page;
    }

    public function title()
    {
        return $this->resource->title;
    }

    public function body()
    {
        return $this->resource->body;

        return $blocks;
    }
}