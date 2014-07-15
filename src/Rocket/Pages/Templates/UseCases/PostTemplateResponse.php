<?php namespace Rocket\Pages\Templates\UseCases;

use Rocket\Pages\Templates\Template;

class PostTemplateResponse
{
    /**
     * @var Template
     */
    public $template;

    public function __construct(Template $template)
    {
        $this->template = $template;
    }


}