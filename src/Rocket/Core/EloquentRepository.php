<?php namespace Rocket\Core;

use Illuminate\Database\Eloquent\Model;
use Rocket\Core\Exceptions\EntityNotFoundException;

abstract class EloquentRepository
{
    protected $model;

    public function __construct($model = null)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function getAllPaginated($count)
    {
        return $this->model->paginate($count);
    }

    public function getById($id)
    {
        return $this->model->find($id);
    }


    /**
     * Find by a specific column and value
     *
     * @param  string $column
     * @param  string $value
     * @return \Illuminate\Support\Collection
     */
    public function getBy($column, $value, $comparer = '=')
    {
        return $this->model->where($column, $comparer, $value)->get();
    }

    /**
     * @param $id
     * @return mixed
     * @throws EntityNotFoundException
     */
    public function requireById($id)
    {
        $model = $this->getById($id);

        if ( ! $model) {
            throw new EntityNotFoundException;
        }

        return $model;
    }

    /**
     * @param Model $model
     * @return Model
     */
    public function save(Model $model)
    {
        if ($model->getDirty()) {
            $model->save();
        } else {
            $model->touch();
        }

        return $model;
    }

    /**
     * @param $model
     * @return mixed
     */
    public function delete($model)
    {
        return $model->delete();
    }
}