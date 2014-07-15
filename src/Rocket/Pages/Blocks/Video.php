<?php namespace Rocket\Pages\Blocks;

class Video extends AbstractBlock {

    /**#@+
     * Block type name
     */
    const TYPE = 'video';
    /**#@-*/

    public function make()
    {
        $html = null;

        switch ($this->data->source) {
            case "youtube":
                $html = '<iframe width="580" height="320" src="//www.youtube.com/embed/'.$this->data->remote_id.'" frameborder="0" allowfullscreen></iframe>';
                break;

            case "vimeo":
                $html = '<iframe src="//player.vimeo.com/video/'.$this->data->remote_id.'?title=0&amp;byline=0" width="580" height="320" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                break;
        }

        if ($html != null) {
            return '<figure class="st-movie">'.$html.'</figure>';
        }

        return null;
    }

    /**
     * Convert the block to it's string represantation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make();
    }
}