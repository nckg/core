<?php namespace Rocket\Controllers\Api;

use Rocket\CommandBus\CommandBus;
use Rocket\Forms\FormRepository;

class FormController extends BaseController
{
    /**
     * @var FormRepository
     */
    private $repository;

    /**
     * @param FormRepository $repository
     * @param CommandBus $bus
     */
    public function __construct(FormRepository $repository, CommandBus $bus)
    {
        $this->bus = $bus;
        $this->repository = $repository;
    }

    /**
     * Show the index page
     *
     * @return View
     */
    public function index()
    {
        return $this->repository->getAll();
    }
}
