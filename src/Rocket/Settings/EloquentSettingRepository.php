<?php namespace Rocket\Settings;

use Illuminate\Support\Collection;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentSettingRepository extends EloquentRepository implements SettingRepository
{
    public function __construct(Setting $model)
    {
        $this->model = $model;
    }
}