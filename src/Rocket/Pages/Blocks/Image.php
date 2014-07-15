<?php namespace Rocket\Pages\Blocks;

use App\Services\Frontend\Image as FrontendImage;

class Image extends AbstractBlock implements BlockInterface
{
    public function make()
    {
        // Will return <h1>Hello World</h1>
        return new FrontendImage($this->data['public_path'] . '/' . $this->data['name']);
    }

    /**
     * Convert the block to it's string represantation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make()->toString();
    }
}