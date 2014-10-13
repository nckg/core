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
        $this->app->bind('Rocket\Settings\SettingRepository', 'Rocket\Settings\EloquentSettingRepository');
        $this->app->bind('Rocket\Accounts\UserRepository', 'Rocket\Accounts\EloquentUserRepository');
        $this->app->bind('Rocket\Media\MediaRepository', 'Rocket\Media\EloquentMediaRepository');
    }
}