<?php namespace Rocket\Pages\Blocks;

class Text extends AbstractBlock {

    /**#@+
     * Block type name
     */
    const TYPE = 'text';
    /**#@-*/

    public function make()
    {
        // Will return <h1>Hello World</h1>
        return \Michelf\Markdown::defaultTransform($this->data['text']);
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