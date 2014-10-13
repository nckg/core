<?php namespace Rocket\Media\UseCases; 

class CreateMediaRequest
{
    public $name;
    public $publicPath;
    public $realPath;
    public $mime;

    /**
     * @param $name
     * @param $publicPath
     * @param $realPath
     * @param $mime
     */
    public function __construct($name, $publicPath, $realPath, $mime)
    {
        $this->name = $name;
        $this->publicPath = $publicPath;
        $this->realPath = $realPath;
        $this->mime = $mime;
    }
} 