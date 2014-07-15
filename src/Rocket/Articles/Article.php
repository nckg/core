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

    public static function register(User $user, $title, $body, $pageId)
    {
        $article = new static([
            'user_id' => $user->id,
            'title' => $title,
            'body' => $body,
            'page_id' => $pageId,
        ]);

        return $article;
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