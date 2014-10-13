<?php namespace Rocket\Forms; 

use Illuminate\Database\Eloquent\Model;

class FormData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'form_data';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function form()
    {
        return $this->belongsTo('Rocket\Forms\Form');
    }
} 