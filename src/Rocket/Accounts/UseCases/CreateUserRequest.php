<?php namespace Rocket\Accounts\UseCases; 

class CreateUserRequest
{
    public $firstName;
    public $lastName;
    public $email;
    public $password;
    public $activated;

    /**
     * @param $firstName
     * @param $lastName
     * @param $email
     * @param $password
     * @param $activated
     */
    public function __construct($firstName, $lastName, $email, $password, $activated)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
        $this->activated = $activated;
    }
} 