<?php namespace Rocket\Pages\Templates\UseCases;

use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Pages\Templates\TemplateRepository;

class UpdateTemplateHandler implements Handler
{
    /**
     * @var TemplateRepository
     */
    private $repository;
    /**
     * @var
     */
    private $dispatcher;

    public function __construct(TemplateRepository $repository, Dispatcher $dispatcher)
    {
        $this->repository = $repository;
        $this->dispatcher = $dispatcher;
    }

    /**
     * @param UpdateTemplateRequest $command
     * @return \Rocket\Pages\Templates\UseCases\UpdateTemplateHandler
     */
    public function handle($command)
    {
        $template = $command->template;
        $template->name = $command->name;

        // save template body to the file
        $filename = \View::getFinder()->find($template->template);
        file_put_contents($filename, $command->body);

        // save
        $this->repository->save($template);

        return new UpdateTemplateResponse($template);
    }
}