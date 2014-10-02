<?php namespace Rocket\Pages;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use McCool\LaravelAutoPresenter\PresenterInterface;

class Page extends Model implements PresenterInterface
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'pages';

    protected $fillable = array('title', 'body');

    protected $blocks;
    /**
     * Indicates if the model should soft delete.
     *
     * @var bool
     */
    protected $softDelete = true;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = array('is_home');

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        // Setup event bindings
        self::deleting(function($page)
        {
            if ($page->article) {
                $page->article()->delete();
            }
        });
    }

    public function getPresenter()
    {
        return 'Rocket\Pages\PagePresenter';
    }

    /**
     * Return the parent page
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo('\Rocket\Pages\Page', 'page_id');
    }

    /**
     * Returns available children
     *
     * @return Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children()
    {
        return $this->hasMany('\Rocket\Pages\Page', 'page_id');
    }

    /**
     * Finds the first image of the block and returns it
     *
     * @return App\Services\Blocks\AbstractBlock
     */
    public function firstImage()
    {
        foreach ($this->blocks() as $block) {
            if ($block->getType() === \App\Services\Blocks\Image::TYPE) {
                return $block;
            }
        }

        return null;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function article()
     {
         return $this->hasOne('\Rocket\Articles\Article');
     }

    /**
     * Returns the page type
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function template()
    {
        return $this->belongsTo('\Rocket\Pages\Templates\Template');
    }

    /**
     * Returns the data attribute a Containers
     *
     * @param  string $value A serialized array
     * @return Container
     */
    public function getDataAttribute($value)
    {
        if (!$value) {
            return new \Illuminate\Support\Collection;
        }

        return \Illuminate\Support\Collection::make(unserialize($value));
    }

    /**
     * Set the data attribute
     *
     * @param  string $value A serialized array
     * @return Container
     */
    public function setDataAttribute($value)
    {
        if ( ! is_array($value)) {
            $this->attributes['data'] = serialize(array($value));
        }

        $this->attributes['data'] = serialize($value);
    }

    public function getIsHomeAttribute()
    {
        return (bool) $this->data->get('home');
    }

}