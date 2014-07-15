<?php
/**
 * Created by PhpStorm.
 * User: nick
 * Date: 7/07/14
 * Time: 14:25
 */
namespace Rocket\Pages\Blocks;

interface BlockInterface
{
    /**
     * @param $data
     * @return mixed
     */
    public function setData($data);

    /**
     * Get data from the content block
     *
     * @return mixed
     */
    public function getData();

    /**
     * Create a block object
     *
     * @return mixed
     */
    public function make();

    /**
     * Convert the block into a string
     *
     * @return string
     */
    public function __toString();
}