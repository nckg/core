<?php namespace Rocket\Media;

use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class Upload
{
    /**
     * Upload an image to the public storage
     * @param UploadedFile $file
     * @param $destination
     * @param null $dir
     * @return string
     */
    public static function upload(UploadedFile $file, $destination, $dir = null)
    {
        // Generate random dir
        if ( ! $dir) {
            $dir = str_random();
        }

        // Get file info and try to move
        $destination = $destination . DIRECTORY_SEPARATOR . $dir;
        $file->move($destination, $file->getClientOriginalName());

        return new File($destination . DIRECTORY_SEPARATOR . $file->getClientOriginalName());
    }
}