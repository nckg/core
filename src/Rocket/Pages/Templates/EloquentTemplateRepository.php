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

    /**
     * @param bool $restricted
     * @return mixed
     */
    public function getAll($restricted = true)
    {
        if ($restricted == false) {
            return $this->model->all();
        }

        return $this->model->where('editable', true)->get();
    }


}