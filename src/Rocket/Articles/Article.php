<?php namespace Rocket\Articles;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use McCool\LaravelAutoPresenter\PresenterInterface;
use Rocket\Accounts\User;

class Article extends Model implements PresenterInterface
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'articles';

    protected $blocks;

    /**
     * Indicates if the model should soft delete.
     *
     * @var bool
     */
    protected $softDelete = true;

    public function getPresenter()
    {
        return 'Rocket\Articles\ArticlePresenter';
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function page()
    {
        return $this->belongsTo('\Rocket\Pages\Page');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('\Rocket\Accounts\User');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo('\Rocket\Media\Media');
    }

    /**
     * @param User $user
     * @param $title
     * @param $summary
     * @param $pageId
     * @param null $imageId
     * @param Carbon $publishAt
     * @return static
     */
    public static function register(User $user, $title, $summary, $pageId, $imageId = null, Carbon $publishAt = null)
    {
        self::unguard();

        return new static(array(
            'user_id' => $user->id,
            'title' => $title,
            'summary' => $summary,
            'page_id' => $pageId,
            'image_id' => $imageId,
            'publish_at' => $publishAt,
        ));
    }
}