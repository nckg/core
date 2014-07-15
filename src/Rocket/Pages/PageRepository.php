<?php namespace Rocket\Pages;

interface PageRepository
{
    public function getTreeview($parentId = null);
}