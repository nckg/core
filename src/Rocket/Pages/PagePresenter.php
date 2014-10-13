<?php namespace Rocket\Pages;

use McCool\LaravelAutoPresenter\BasePresenter;
use App, Input, Str, Request;
use Rocket\Forms\Form;
use Rocket\Forms\FormPresenter;

class PagePresenter extends BasePresenter
{
    public function __construct(Page $article)
    {
        $this->resource = $article;
    }

    public function title()
    {
        return $this->resource->title;
    }

    public function body()
    {
        // parse
        $body = $this->resource->body;
        $blocks = array(
            FormPresenter::TAG_NAME => 'Rocket\Forms\Form'
        );

        foreach ($blocks as $tagname => $block) {
            preg_match_all(sprintf('/<%s rocket-id="(\d+)">.*?<\/%s>/', $tagname, $tagname), $body, $matches);

            if (isset($matches[0])) {
                foreach($matches[0] as $index => $tag) {
                    // render
                    $atom = $block::findOrFail($matches[1][$index]);
                    $body = str_replace($tag, $atom->render(), $body);
                }
            }
        }

        return $body;
    }
}