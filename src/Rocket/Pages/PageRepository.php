<?php namespace Rocket\Pages;

interface PageRepository
{
    /**
     * @param null $parentId
     * @return mixed
     */
    public function getTreeview($parentId = null);

    /**
     * @param $slug
     * @return mixed
     */
    public function getActiveBySlug($slug);
}