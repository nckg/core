<?php namespace Rocket\Pages\Blocks;

class Columns extends AbstractBlock {

    /**#@+
     * Block type name
     */
    const TYPE = 'columns';
    /**#@-*/

    public function make()
    {
        $blocks = \Block::make(array('data' => $this->data));

        return \View::make('site::columns')
            ->withColumns($blocks);
    }

    /**
     * Convert the block to it's string represantation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make()->render();
    }
}