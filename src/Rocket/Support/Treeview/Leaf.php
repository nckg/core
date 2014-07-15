<?php namespace Rocket\Support\Treeview;

class Leaf {

    protected $item;
    protected $children;

    public function __construct($item = null, Branch $children = null)
    {
        $this->item = $item;
        $this->children = $children;
    }

    /**
     * Create a new collection instance if the value isn't one already.
     *
     * @param  mixed  $items
     * @return \Illuminate\Support\Collection
     */
    public static function make($item, Branch $children = null)
    {
        if (is_null($item)) return new static;

        return new static($item, $children);
    }

    /**
     * Check if this item has children
     *
     * @return boolean
     */
    public function hasChildren()
    {
        return !is_null($this->children) and !empty($this->children);
    }

    public function getItem()
    {
        return $this->item;
    }

    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Get a flattened array of the items in the collection.
     *
     * @return Branch
     */
    public function flatten()
    {
        $children = array();

        if ($this->hasChildren()) {
            $children = $this->children->flatten();
        }

        return array_merge(array($this->item), $children);
    }
}