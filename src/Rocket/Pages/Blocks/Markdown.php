<?php namespace Rocket\Pages\Blocks;

class Markdown extends AbstractBlock implements BlockInterface
{
    /**
     * Converts markdown into html
     *
     * @return string
     */
    public function make()
    {
        // Will return <h1>Hello World</h1>
        return \Michelf\Markdown::defaultTransform($this->data->text);
    }

    /**
     * Convert the block to it's string representation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make();
    }
}