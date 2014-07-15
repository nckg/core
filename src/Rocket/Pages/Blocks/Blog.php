<?php namespace Rocket\Pages\Blocks;

use Rocket\Articles\ArticleRepository;

class Blog extends AbstractBlock implements BlockInterface
{

    /**#@+
     * Block type name
     */
    const TYPE = 'blog';
    /**#@-*/

    /**
     *
     * @var PageRepository
     */
    protected $page;

    /**
     * Default constructor
     *
     * @param ArticleRepository $article
     */
    public function __construct(ArticleRepository $article)
    {
        $this->article = $article;
    }

    private function getView()
    {
        switch ($this->data->type) {
            case 'overview':
                $articles = $this->article->getLatest();

                return $this->view('blog/' . $this->data->template, [
                    'articles' => $articles,
                ]);
                break;

            case 'detail':
                $article = $this->article->find($this->data->id);

                return $this->view('blog/detail', [
                    'article' => $article,
                ]);
                break;
        }
    }

    /**
     * @return mixed
     */
    public function make()
    {
        return $this->getView();
    }

    /**
     * The __toString() method allows a class to decide how
     * it will react when it is treated like a string.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make()->render();
    }
}