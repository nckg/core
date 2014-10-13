<?php namespace Rocket\Media\UseCases; 

use Rocket\Media\Media;

class CreateMediaResponse
{
    /**
     * @var Media
     */
    public $media;

    /**
     * @param Media $media
     */
    public function __construct(Media $media)
    {

        $this->media = $media;
    }
} 