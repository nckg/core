<?php namespace Rocket\Pages\Blocks;

abstract class AbstractBlock implements BlockInterface
{
    /**
     *
     * @var array
     */
    protected $data;

    public function setData($data)
    {
        $this->data = $data;
    }

    public function getData()
    {
        return $this->data;
    }

    /**
     * @param $view
     * @param array $data
     * @return \Illuminate\View\View
     */
    protected function view($view, $data = [])
    {
        return \View::make($view, $data);
    }

    /**
     * Returns the type of the block
     *
     * @return string
     */
    public function getType()
    {
        $class = get_called_class();
        return $class::TYPE;
    }
}