<?php namespace Rocket\Accounts\UseCases;

use Rocket\Accounts\User;

class UpdateUserResponse
{
    /**
     * @var User
     */
    public $user;

    /**
     * @param User $user
     */
    public function __construct(User $user)
    {

        $this->user = $user;
    }
} 