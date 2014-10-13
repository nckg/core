<?php namespace Rocket\Media; 

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'media';

    /**
     * @param $name
     * @param $publicPath
     * @param $realPath
     * @param $mime
     * @return static
     */
    public static function register($name, $publicPath, $realPath, $mime)
    {
        self::unguard();

        $setting = new static(array(
            'name' => $name,
            'public_path' => $publicPath,
            'real_path' => $realPath,
            'mime' => $mime,
        ));

        return $setting;
    }
} 