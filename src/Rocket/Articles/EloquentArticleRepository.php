<?php namespace Rocket\Articles;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentArticleRepository extends EloquentRepository implements ArticleRepository
{
    /**
     * @param Article $model
     */
    public function __construct(Article $model)
    {
        $this->model = $model;
    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return $this->model->with(array('page', 'user'))
            ->orderBy('created_at', 'desc')
            ->get();
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Builder|static
     * @throws EntityNotFoundException
     */
    public function requireById($id)
    {
        $model = $this->model->where('id', $id)
            ->with(array('page', 'user', 'image'))
            ->first();

        if ( ! $model) {
            throw new EntityNotFoundException;
        }

        return $model;

    }

    /**
     * @param int $limit
     * @return mixed
     */
    public function getPublishable($limit = 10)
    {
        return $this->model->with('user', 'image', 'page')
            ->whereHas('page', function($query) {
                $query->where('active', 1);
            })
            ->whereRaw('(publish_at <= ? OR publish_at IS NULL)', array(Carbon::now()))
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get();
        dd(\DB::getQueryLog());
    }

    /**
     * @param int $limit
     * @return mixed
     */
    public function getLatest($limit = 10)
    {
        return $this->model->with(array('page', 'user', 'image'))
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get();
    }
}