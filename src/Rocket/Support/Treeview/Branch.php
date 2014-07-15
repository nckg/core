<?php namespace Rocket\Support\Treeview;

use Illuminate\Support\Collection;

class Branch extends Collection {

    /**
     * Get the evaluated string content of the ItemList
     *
     * @return string
     */
    public function flatten()
    {
        $result = array();

        foreach ($this->items as $item) {
            $result = array_merge($result, $item->flatten());
        }

        return $result;
    }

    protected function getListValue($item, $key)
    {
        return is_object($item) ? $item->{$key} : $item[$key];
    }

    /**
     * Get an indented array with the values of a given key.
     *
     * @param  string $value
     * @param  string $key
     * @param  string $indentation
     * @return array
     */
    public function indentedLists($value, $key = null, $maxLevel = null, $indentation = '&nbsp;&nbsp;&nbsp;', $level = 0)
    {
        $results = array();

        foreach ($this->items as $item) {
            $itemValue = $this->getListValue($item->getItem(), $value);

            // If the key is "null", we will just append the value to the array and keep
            // looping. Otherwise we will key the array using the value of the key we
            // received from the developer. Then we'll return the final array form.
            if (is_null($key)) {
                $results[] = str_repeat($indentation, $level) . $itemValue;
            } else {
                $itemKey = $this->getListValue($item->getItem(), $key);

                $results[$itemKey] = str_repeat($indentation, $level) . $itemValue;
            }

            if (($maxLevel === null || $maxLevel > ($level + 1)) && $item->hasChildren()) {
                $results = $results + $item->getChildren()->indentedLists($value, $key, $maxLevel, $indentation, $level + 1);
            }
        }

        return $results;
    }
}