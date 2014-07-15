<?php namespace Rocket\Articles;

use Illuminate\Support\Collection;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentArticleRepository extends EloquentRepository implements ArticleRepository
{
    public function __construct(Article $model)
    {
        $this->model = $model;
    }

    public function getLatest($limit = 10)
    {
        return $this->model->with(array('page', 'user'))
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get();
    }
}