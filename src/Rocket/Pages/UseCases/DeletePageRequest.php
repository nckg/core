<?php namespace Rocket\Pages\UseCases;

use Rocket\Accounts\User;
use Rocket\Pages\Page;

class DeletePageRequest
{
    public $page;
    public $user;

    public function __construct(Page $page, User $user)
    {
        $this->user = $user;
        $this->page = $page;
    }
}