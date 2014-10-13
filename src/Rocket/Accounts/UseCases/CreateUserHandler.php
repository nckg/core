<?php namespace Rocket\Accounts\UseCases;

use Rocket\Accounts\UseCases\CreateUserResponse;
use Rocket\Accounts\User;
use Rocket\Accounts\UserRepository;
use Rocket\CommandBus\Handler;

class CreateUserHandler implements Handler
{
    /**
     * @var UserRepository
     */
    private $repository;

    /**
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {

        $this->repository = $repository;
    }

    /**
     * @param \Rocket\Accounts\UseCases\CreateUserRequest $request
     * @return CreateUserResponse
     */
    public function handle($request)
    {
        $user = User::register(
            $request->firstName,
            $request->lastName,
            $request->email,
            $request->password,
            $request->activated
        );

        $this->repository->save($user);

        return new CreateUserResponse($user);
    }
}