<?php namespace Rocket\ServiceProviders;

use Illuminate\Support\ServiceProvider;

class CommandBusServiceProvider extends ServiceProvider
{
    public function boot() {}

    public function register()
    {
        $this->app->singleton('Rocket\CommandBus\CommandBus', 'Rocket\CommandBus\ValidationCommandBus');
    }
}
