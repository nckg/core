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
        $blocks = array();
        $json = json_decode($this->resource->body);
        foreach ($json->data as $dataObj) {
            $class = __NAMESPACE__ . '\\Blocks\\' . ucfirst($dataObj->type);
            $atom = app()->make($class);
            $atom->setData($dataObj->data);
            $atom->original = $dataObj;

            $blocks[] = $atom;
        }

        return $blocks;
    }
}