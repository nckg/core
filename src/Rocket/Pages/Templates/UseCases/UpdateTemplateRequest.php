<?php namespace Rocket\Pages\Templates\UseCases;

use Rocket\Accounts\User;
use Rocket\Pages\Templates\Template;

class UpdateTemplateRequest
{
    /**
     * @var Template
     */
    public $template;
    /**
     * @var User
     */
    public $user;
    public $name;
    public $body;

    public function __construct(Template $template, User $user, $name, $body)
    {
        $this->template = $template;
        $this->user = $user;
        $this->name = $name;
        $this->body = $body;
    }
}