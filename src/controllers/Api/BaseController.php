<?php namespace Rocket\Controllers\Api;

use Rocket\CommandBus\CommandBus;
use \View;

abstract class BaseController extends \Controller
{
    protected $title = '';
    protected $bus;

    public function __construct(CommandBus $bus)
    {
        $this->bus = $bus;
    }

    /**
     * Setup the layout used by the controller.
     *
     * @return void
     */
    protected function setupLayout()
    {
        if ( ! is_null($this->layout))
        {
            $this->layout = View::make($this->layout);
        }
    }
}