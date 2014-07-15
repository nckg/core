<?php namespace Rocket\Pages\Templates\UseCases;

use Rocket\Pages\Templates\Template;

class UpdateTemplateResponse
{
    /**
     * @var Template
     */
    private $template;

    public function __construct(Template $template)
    {
        $this->template = $template;
    }


}