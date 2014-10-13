<?php namespace Rocket\Controllers\Api;

use Rocket\CommandBus\CommandBus;
use Rocket\Settings\SettingRepository;

class SettingsController extends BaseController
{
    /**
     * @var SettingRepository
     */
    private $settings;

    /**
     * @param SettingRepository $settings
     * @param CommandBus $bus
     */
    public function __construct(SettingRepository $settings, CommandBus $bus)
    {
        $this->bus = $bus;
        $this->settings = $settings;
    }

    /**
     * Show the index page
     *
     * @return View
     */
    public function index()
    {
        return $this->settings->getAll();
    }
}
