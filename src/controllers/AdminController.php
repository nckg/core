<?php namespace Rocket\Core\Controllers;

use Rocket\Settings\Setting;

class AdminController extends BaseController
{
    /**
     * Get the main admin view.
     */
    public function index()
    {
        return \View::make('core::index')
            ->with('user', \Sentry::getUser());
    }

    /**
     * Load the designated language file
     */
    protected function loadLanguage()
    {
        $locale = Lang::get('rocket');
        return $locale;
    }
}