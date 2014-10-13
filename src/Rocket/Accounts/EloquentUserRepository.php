<?php namespace Rocket\Accounts;

use Illuminate\Support\Collection;
use Rocket\Accounts\User;
use Rocket\Accounts\UserRepository;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentUserRepository extends EloquentRepository implements UserRepository
{
    /**
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }
}