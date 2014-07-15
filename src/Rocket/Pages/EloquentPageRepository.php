<?php namespace Rocket\Pages;

use Illuminate\Support\Collection;
use Rocket\Core\EloquentRepository;
use Rocket\Core\Exceptions\EntityNotFoundException;

class EloquentPageRepository extends EloquentRepository implements PageRepository
{
    public function __construct(Page $model)
    {
        $this->model = $model;
    }

    public function isUnique(Page $model)
    {
        $query = $this->model->where('slug', '=', $model->slug)
            ->where('page_id', '=', $model->page_id);

        if ($model->id) {
            $query->where('id', '<>', $model->id);
        }

        return $query->first() ? false : true;
    }
//
//    /**
//     * Create an object
//     *
//     * @param  Page $input Page
//     * @return \App\Models\Page
//     */
//    public function create(Page $page)
//    {
//        // We're going to try and get the parent slug if the input has a
//        // 'page_id' identifier. There is no need to go all the way up the
//        // tree because the full parent slug is already saved into the
//        // parent page. The only thing we're checking here is that the slug
//        // is unique and we're adding a number to it each time it's not unique
//        if ($page->page_id) {
//            $parentPage = $this->find($page->page_id);
//            $slug = ($parentPage and $parentPage->slug) ? $parentPage->slug . '/' . $page->slug : $page->slug;
//            $index = 1;
//
//            do {
//                $isUnique = Page::where('slug', '=', $slug)->first() ? false : true;
//
//                if ($isUnique == false) {
//                    $slug = rtrim($slug, '-' . $index) . '-' . ($index + 1);
//                    $index++;
//                }
//            } while ($isUnique === false);
//
//            $page->slug = $slug;
//        }
//
//        // save
//        $page->save();
//
//        // return
//        return $page;
//    }
//
//    /**
//     * Save a Page
//     * @param  Page $input
//     * @return \App\Models\Page
//     */
//    public function update(Page $page)
//    {
//        // We're going to try and get the parent slug if the input has a
//        // 'page_id' identifier. Find the last item in the slug because
//        // the current slug might contain a forward slash. e.g: foo/bar
//        if ($page->page_id) {
//            $parentPage = $this->find($page->page_id);
//            $slugs = explode('/', $page->slug);
//            $slugs = is_array($slugs) ? $slugs : array($page->slug);
//            $index = 1;
//
//            $slug = ($parentPage and $parentPage->slug) ? $parentPage->slug . '/' . array_pop($slugs) : array_pop($slugs);
//
//            do {
//                $isUnique = true;
//                $pageCount = Page::where('slug', '=', $slug)
//                                 ->where('id', '<>', $page->id)
//                                 ->count();
//
//                if ($pageCount > 0) {
//                    $isUnique = false;
//                }
//
//                if ($isUnique == false) {
//                    $slug = rtrim($slug, '-' . $index) . '-' . ($index + 1);
//                    $index++;
//                }
//            } while ($isUnique === false);
//
//            $page->slug = $slug;
//        }
//
//        // save the page
//        $page->update();
//
//        // update child pages
//        foreach ($page->children as $child) {
//            $this->update($child);
//        }
//
//        // return the page
//        return $page;
//    }
//
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
}