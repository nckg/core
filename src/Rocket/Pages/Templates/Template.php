<?php namespace Rocket\Pages\Templates;

use Illuminate\Database\Eloquent\Model;

class Template extends Model {
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'templates';

    protected $appends = array('body');

    public function getBodyAttribute()
    {
        $filename = \View::getFinder()->find($this->template);

        return file_get_contents($filename);
    }

}