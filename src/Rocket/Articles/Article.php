<?php namespace Rocket\Articles;

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
        return 'Rocket\Pages\ArticlePresenter';
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function page()
    {
        return $this->belongsTo('\Rocket\Pages\Page');
    }

    /**
     * @param User $user
     * @param $title
     * @param $summary
     * @param $pageId
     * @return static
     */
    public static function register(User $user, $title, $summary, $pageId)
    {
        self::unguard();

        return new static([
            'user_id' => $user->id,
            'title' => $title,
            'summary' => $summary,
            'page_id' => $pageId,
        ]);
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
}