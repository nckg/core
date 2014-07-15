<?php namespace Rocket\Pages\Templates;

use McCool\LaravelAutoPresenter\BasePresenter;
use App, Input, Str, Request;

class TemplatePresenter extends BasePresenter
{
    public function __construct(Template $template)
    {
        $this->resource = $template;
    }
}