<?php namespace Rocket\Settings;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Setting extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'settings';

    public static function register($key, $value)
    {
        $setting = new static(array(
            'key' => $key,
            'value' => $value,
        ));

        return $setting;
    }
}