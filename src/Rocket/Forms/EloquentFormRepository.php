<?php namespace Rocket\Forms; 

use Rocket\Core\EloquentRepository;

class EloquentFormRepository extends EloquentRepository implements FormRepository
{
    /**
     * @param Form $model
     */
    public function __construct(Form $model)
    {
        $this->model = $model;
    }
} 