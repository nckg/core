<?php namespace Rocket\Support\Treeview;

use Illuminate\Support\Collection;

class Treeview {

    private $items;

    public function __construct($branches = array())
    {
        $this->items = Collection::make($branches);
    }

    /**
     * Returns all branches
     *
     * @return Collection
     */
    public function all()
    {
        return $this->items;
    }

    /**
     * Push an item into the collection.
     *
     * @param Branch $branch
     */
    public function push(Branch $branch)
    {
        $this->items[] = $branch;
    }

    /**
     * Get an array with the values of a given key.
     *
     * @param  string  $value
     * @param  string  $key
     * @return array
     */
    public function lists($value, $key = null)
    {
        $results = array();

        foreach ($this->collapse() as $item)
        {
            $itemValue = $this->getListValue($item, $value);

            // If the key is "null", we will just append the value to the array and keep
            // looping. Otherwise we will key the array using the value of the key we
            // received from the developer. Then we'll return the final array form.
            if (is_null($key))
            {
                $results[] = $itemValue;
            }
            else
            {
                $itemKey = $this->getListValue($item, $key);

                $results[$itemKey] = $itemValue;
            }
        }

        return $results;
    }

    /**
     * Get an indented array with the values of a given key.
     *
     * @param  string $value
     * @param  string $key
     * @param  string $indentation
     * @return array
     */
    public function indentedLists($value, $key = null, $maxLevel = null, $indentation = '&nbsp;&nbsp;&nbsp;')
    {
        $results = array();

        foreach ($this->items as $branch) {
            $results = $results + $branch->indentedLists($value, $key, $maxLevel, $indentation);
        }

        return Collection::make($results);
    }

    /**
     * Get the value of a list item object.
     *
     * @param  mixed  $item
     * @param  mixed  $key
     * @return mixed
     */
    protected function getListValue($item, $key)
    {
        return is_object($item) ? $item->{$key} : $item[$key];
    }

   /**
     * Collapse the collection items into a single array.
     *
     * @return \Illuminate\Support\Collection
     */
    public function collapse()
    {
        $results = array();

        foreach ($this->items as $branch) {
            $results = array_merge($results, $branch->flatten());
        }

        return $results;
    }
}