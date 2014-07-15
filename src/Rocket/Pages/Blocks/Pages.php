<?php namespace Rocket\Pages\Blocks;

use App\Models\Page;

class Pages extends AbstractBlock {

    /**#@+
     * Block type name
     */
    const TYPE = 'pages';
    /**#@-*/

    public function make()
    {
        switch ($this->data['type']) {
            case 'teasers':
                $page = Page::where('id', '=', $this->data['page_id'])
                             ->first();

                return \View::make('site::pages/teasers')
                            ->with(array(
                                'data' => $this->data,
                                'teaserPage' => $page,
                                'teaserPages' => $page->children
                            ));
                break;

            default:
                # code...
                break;
        }
    }

    /**
     * Convert the block to it's string represantation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make()->render();
    }
}