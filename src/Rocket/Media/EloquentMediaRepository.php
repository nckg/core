<?php namespace Rocket\Media; 

use Rocket\Core\EloquentRepository;

class EloquentMediaRepository extends EloquentRepository implements MediaRepository
{
    /**
     * @param Media $media
     */
    public function __construct(Media $media)
    {
        $this->model = $media;
    }
} 