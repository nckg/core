<?php namespace Rocket\Accounts\UseCases;

use Rocket\Accounts\UserRepository;
use Rocket\CommandBus\Handler;

class UpdateUserHandler implements Handler
{
    /**
     * @var UserRepository
     */
    public $repository;

    /**
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {

        $this->repository = $repository;
    }


    /**
     * @param \Rocket\Accounts\UseCases\UpdateUserRequest $request
     * @return \Rocket\Accounts\UseCases\UpdateUserRequest
     */
    public function handle($request)
    {
        $user = $request->user;
        $user->setHasher(new \Cartalyst\Sentry\Hashing\NativeHasher);
        $user->first_name = $request->firstName;
        $user->last_name = $request->lastName;
        $user->email = $request->email;
        $user->activated = $request->activated;

        if ($request->password !== '') {
            $user->password = $request->password;
        }

        $this->repository->save($user);

        return new UpdateUserResponse($user);
    }
}