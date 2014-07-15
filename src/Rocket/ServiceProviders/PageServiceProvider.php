<?php namespace Rocket\ServiceProviders;

use Illuminate\Support\ServiceProvider;
use Event, App;

class PageServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('Rocket\Pages\PageRepository', 'Rocket\Pages\EloquentPageRepository');
        $this->app->bind('Rocket\Pages\Templates\TemplateRepository', 'Rocket\Pages\Templates\EloquentTemplateRepository');
        $this->app->bind('Rocket\Articles\ArticleRepository', 'Rocket\Articles\EloquentArticleRepository');
    }
}