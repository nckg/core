<?php namespace Rocket\Accounts\UseCases;

use Rocket\Accounts\User;

class UpdateUserRequest
{
    /**
     * @var User
     */
    public $user;
    public $firstName;
    public $lastName;
    public $email;
    /**
     * @var string
     */
    public $password;
    public $activated;

    /**
     * @
     *
     * User $user
     * @param User $user
     * @param $firstName
     * @param $lastName
     * @param $email
     * @param string $password
     * @param bool $activated
     */
    public function __construct(User $user, $firstName, $lastName, $email, $password = '', $activated = true)
    {

        $this->user = $user;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
        $this->activated = $activated;
    }
} 