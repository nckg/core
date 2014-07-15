<?php namespace Rocket\Pages\Blocks;

class Form extends AbstractBlock {

    /**#@+
     * Block type name
     */
    const TYPE = 'form';
    /**#@-*/

    /**
     * Returns the field of the form
     *
     * @return array
     */
    public function getFields()
    {
        return $this->data['fields'];
    }

    /**
     * Returns the settings of the form
     *
     * @return array
     */
    public function getSettings()
    {
        return $this->data['settings'];
    }

    /**
     * Make a new form from a view
     *
     * @return \View
     */
    public function make()
    {
        return \View::make('site::form')
            ->withFields($this->data['fields'])
            ->withSettings($this->data['settings'])
            ->render();
    }
}