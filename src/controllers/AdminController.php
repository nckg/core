<?php namespace Rocket\Core\Controllers;

use Rocket\Accounts\UserRepository;

class AdminController extends BaseController
{
    /**
     * @var UserRepository
     */
    private $users;

    /**
     * @param UserRepository $users
     */
    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    /**
     * Get the main admin view.
     */
    public function index()
    {
        return \View::make('core::index')
            ->with('user', \Sentry::getUser())
            ->with('users', $this->users->getAll());
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