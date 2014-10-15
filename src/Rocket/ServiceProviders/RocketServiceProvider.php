<?php namespace Rocket\ServiceProviders;

use Illuminate\Support\ServiceProvider;

class RocketServiceProvider extends ServiceProvider
{

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        // register commandbus
        $this->app->singleton('Rocket\CommandBus\CommandBus', 'Rocket\CommandBus\ValidationCommandBus');

        // register other package service providers
        $this->app->register('Cartalyst\Sentry\SentryServiceProvider');
        $this->app->register('McCool\LaravelAutoPresenter\LaravelAutoPresenterServiceProvider');

        // register facades
        $this->app->booting(function()
        {
            $loader = \Illuminate\Foundation\AliasLoader::getInstance();
            $loader->alias('Sentry', 'Cartalyst\Sentry\Facades\Laravel\Sentry');
        });

        // register repositories
        $this->app->bind('Rocket\Pages\PageRepository', 'Rocket\Pages\EloquentPageRepository');
        $this->app->bind('Rocket\Pages\Templates\TemplateRepository', 'Rocket\Pages\Templates\EloquentTemplateRepository');
        $this->app->bind('Rocket\Articles\ArticleRepository', 'Rocket\Articles\EloquentArticleRepository');
        $this->app->bind('Rocket\Settings\SettingRepository', 'Rocket\Settings\EloquentSettingRepository');
        $this->app->bind('Rocket\Accounts\UserRepository', 'Rocket\Accounts\EloquentUserRepository');
        $this->app->bind('Rocket\Media\MediaRepository', 'Rocket\Media\EloquentMediaRepository');
        $this->app->bind('Rocket\Forms\FormRepository', 'Rocket\Forms\EloquentFormRepository');
    }

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->package('rocket/core');

        require_once __DIR__.'/../../helpers.php';
        require_once __DIR__.'/../../routes.php';
        require_once __DIR__.'/../../filters.php';
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return array();
    }
}