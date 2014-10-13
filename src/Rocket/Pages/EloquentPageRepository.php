<?php namespace Rocket\Pages;

use Illuminate\Support\Collection;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentPageRepository extends EloquentRepository implements PageRepository
{
    /**
     * @param Page $model
     */
    public function __construct(Page $model)
    {
        $this->model = $model;
    }

    /**
     * @param Page $model
     * @return bool
     */
    public function isUnique(Page $model)
    {
        $query = $this->model->where('slug', '=', $model->slug)
            ->where('page_id', '=', $model->page_id);

        if ($model->id) {
            $query->where('id', '<>', $model->id);
        }

        return $query->first() ? false : true;
    }

    /**
     * Create a branch from the parent id.
     *
     * @param  integer $parentId
     * @return \Rocket\Support\Treeview\Branch
     */
    private function branch($parentId = null)
    {
        $result = array();

        // find pages
        $pages = Page::where('page_id', '=', $parentId)
            ->where('template_id', '<>', 5)
            ->get();

        // loop pages, append leafs when needed
        foreach ($pages as $page) {
            $children = $this->branch($page->id);

            $result[] = \Rocket\Support\Treeview\Leaf::make($page, $children);
        }

        return \Rocket\Support\Treeview\Branch::make($result);
    }

    /**
     * Create a treeview from pages
     *
     * @param  integer $parentId
     * @return \Rocket\Support\Treeview\Treeview
     */
    public function getTreeview($parentId = null)
    {
        return new \Rocket\Support\Treeview\Treeview(array($this->branch($parentId)));
    }

    /**
     * @param $path
     * @return mixed
     */
    public function getActiveBySlug($path)
    {
        return $this->model->where('path', $path)
            ->where('active', 1)
            ->first();
    }
}