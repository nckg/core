<?php namespace Rocket\Forms; 

use Illuminate\Database\Eloquent\Model;
use McCool\LaravelAutoPresenter\PresenterInterface;

class Form extends Model implements PresenterInterface
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'forms';

    /**
     * Get the presenter class.
     *
     * @return string The class path to the presenter.
     */
    public function getPresenter()
    {
        return 'Rocket\Forms\FormPresenter';
    }

    /**
     * @param $value
     * @return mixed
     */
    public function getFieldsAttribute($value)
    {
        return json_decode($value, true);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function formData()
    {
        return $this->hasMany('Rocket\Forms\FormData');
    }

    /**
     * @return string
     */
    public function render()
    {
        return \View::make('form')
            ->with(array(
                'id' => $this->attributes['id'],
                'title' => $this->attributes['title'],
                'fields' => json_decode($this->attributes['fields'], true),
            ))
            ->render();
    }
}