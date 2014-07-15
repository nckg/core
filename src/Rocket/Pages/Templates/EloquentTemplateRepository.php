<?php namespace Rocket\Pages\Templates;

use Illuminate\Support\Collection;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentTemplateRepository extends EloquentRepository implements TemplateRepository
{
    public function __construct(Template $model)
    {
        $this->model = $model;
    }

}