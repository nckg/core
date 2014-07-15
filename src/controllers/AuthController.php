<?php namespace Rocket\Core\Controllers;


class AuthController extends BaseController {

    /**
     * Display the login page
     * @return View
     */
    public function getLogin()
    {
        if (\Sentry::check()) {
            return \Redirect::to('admin');
        }

        return \View::make('core::auth.login');
    }

    /**
     * Login action
     * @return Redirect
     */
    public function postLogin()
    {
        $credentials = array(
            'email'    => \Input::get('email'),
            'password' => \Input::get('password')
        );

        try {
            $user = \Sentry::authenticate($credentials, false);

            if ($user) {
                return \Redirect::route('admin.index');
            }
        } catch(\Exception $e) {
            return \Redirect::route('admin.login')->withErrors(array('login' => $e->getMessage()));
        }
    }

    /**
     * Logout action
     * @return Redirect
     */
    public function getLogout()
    {
        \Sentry::logout();

        return \Redirect::route('admin.login');
    }

}
