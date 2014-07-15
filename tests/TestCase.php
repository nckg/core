<?php

use Way\Tests\Factory;

abstract class TestCase extends Orchestra\Testbench\TestCase
{
    public function setUp()
    {
        parent::setUp();

        $this->app['router']->disableFilters();
    }

    public function setUser()
    {
        $this->app['sentry'] = $this->mock('stdClass');
        $this->app['sentry']
             ->shouldReceive('getUser')
             ->andReturn(Factory::make('\Rocket\Accounts\User'), ['id' => 1]);
    }

    public function mock($class)
	{
		$mock = Mockery::mock($class);

		$this->app->instance($class, $mock);

		return $mock;
	}

    /**
     * Define environment setup.
     *
     * @param  Illuminate\Foundation\Application    $app
     * @return void
     */
    protected function getEnvironmentSetUp($app)
    {
        // reset base path to point to our package's src directory
        $app['path.base'] = __DIR__ . '/../src';

        $app['config']->set('database.default', 'testbench');
        $app['config']->set('database.connections.testbench', array(
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ));
    }

    /**
     * Get package providers.  At a minimum this is the package being tested, but also
     * would include packages upon which our package depends, e.g. Cartalyst/Sentry
     * In a normal app environment these would be added to the 'providers' array in
     * the config/app.php file.
     *
     * @return array
     */
    protected function getPackageProviders()
    {
        return array(
            'Cartalyst\Sentry\SentryServiceProvider',
            'Rocket\ServiceProviders\CoreServiceProvider',
            'Rocket\ServiceProviders\CommandBusServiceProvider',
            'Rocket\ServiceProviders\PageServiceProvider',
        );
    }

    /**
     * Get package aliases.  In a normal app environment these would be added to
     * the 'aliases' array in the config/app.php file.  If your package exposes an
     * aliased facade, you should add the alias here, along with aliases for
     * facades upon which your package depends, e.g. Cartalyst/Sentry
     *
     * @return array
     */
    protected function getPackageAliases()
    {
        return array(
            'Sentry'      => 'Cartalyst\Sentry\Facades\Laravel\Sentry',
            //'YourPackage' => 'YourProject\YourPackage\Facades\YourPackage',
        );
    }

    public function migrateAndSeed()
	{

        // create an artisan object for calling migrations
        $artisan = $this->app->make('artisan');

        // call migrations specific to our tests, e.g. to seed the db
        $artisan->call('migrate', array(
            '--database' => 'testbench',
            '--path'     => '../tests/migrations',
        ));
	}
}
