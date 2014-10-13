<?php namespace Rocket\Forms; 

use McCool\LaravelAutoPresenter\BasePresenter;

class FormPresenter extends BasePresenter
{
    const TAG_NAME = 'rocket-form';

    /**
     * @param Form $form
     */
    public function __construct(Form $form)
    {
        $this->resource = $form;
    }
} 