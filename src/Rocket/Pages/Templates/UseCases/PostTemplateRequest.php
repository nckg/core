<?php namespace Rocket\Pages\Templates\UseCases;

use Rocket\Accounts\User;

class PostTemplateRequest
{
    /**
     * @var User
     */
    public $user;
    public $name;
    public $body;

    public function __construct(User $user, $name, $body)
    {
        $this->user = $user;
        $this->name = $name;
        $this->body = $body;
    }
}