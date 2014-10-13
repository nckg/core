<?php namespace Rocket\Controllers\Api;

use Rocket\Accounts\UseCases\CreateUserRequest;
use Rocket\Accounts\UseCases\DeleteUserRequest;
use Rocket\Accounts\UseCases\UpdateUserRequest;
use Rocket\Accounts\UserRepository;
use Rocket\CommandBus\CommandBus;

class UserController extends BaseController
{

    /**
     *
     * @var PageRepository
     */
    protected $users;
    protected $bus;

    /**
     * Default constructor
     *
     * @param UserRepository $users
     * @param CommandBus $bus
     */
    public function __construct(UserRepository $users, CommandBus $bus)
    {
        $this->users = $users;
        $this->bus = $bus;
    }

    public function show($id)
    {
        return $this->users->requireById($id);
    }


    /**
     * Stores the page
     *
     * @return Redirect
     */
    public function store()
    {
        $request = new CreateUserRequest(
            \Input::get('first_name'),
            \Input::get('last_name'),
            \Input::get('email'),
            \Input::get('password'),
            \Input::get('activated')
        );

        $response = $this->bus->execute($request);

        return \Redirect::action('Rocket\Controllers\Api\UserController@show', array($response->user->id));
    }


    /**
     * Save the page to the database.
     *
     * @param  integer $id
     * @return Redirect
     */
    public function update($id)
    {
        $user = $this->users->requireById($id);

        $request = new UpdateUserRequest(
            $user,
            \Input::get('first_name'),
            \Input::get('last_name'),
            \Input::get('email'),
            \Input::get('password'),
            \Input::get('activated')
        );

        $response = $this->bus->execute($request);

        return $response->user;
    }

    /**
     * Destroys a user :(
     *
     * @param  integer $id
     * @return Redirect
     */
    public function destroy($id)
    {
        // destroy the article
        $user = $this->users->requireById($id);
        $request = new DeleteUserRequest($user);

        $this->bus->execute($request);
    }

}
