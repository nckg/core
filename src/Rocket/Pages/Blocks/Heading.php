<?php namespace Rocket\Pages\Blocks;

class Heading extends AbstractBlock implements BlockInterface
{
    public function make()
    {
        // Will return <h1>Hello World</h1>
        return '<h2>' . $this->data['text'] . '</h2>';
    }

    /**
     * Convert the block to it's string represantation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make();
    }
}