<?php namespace Rocket\Controllers\Api;

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
    public function getIndex()
    {
        return $this->settings->getAll();
    }

    /**
     * Stores the page
     *
     * @return Redirect
     */
    public function getByKey()
    {
        return $this->settings->findBy('key', '=', \Input::get('key'));
    }

    /**
     * Save the page to the database.
     *
     * @param  integer $id
     * @return Redirect
     */
    public function update($id)
    {

    }
}
