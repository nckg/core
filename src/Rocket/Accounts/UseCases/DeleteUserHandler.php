<?php namespace Rocket\Accounts\UseCases; 

use Rocket\Accounts\UserRepository;
use Rocket\CommandBus\Handler;

class DeleteUserHandler implements Handler
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
     * @param DeleteUserRequest $request
     * @return DeleteUserResponse
     */
    public function handle($request)
    {
        $this->repository->delete($request->user);
        return new DeleteUserResponse($request->user);
    }
}