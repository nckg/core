<?php namespace Rocket\Pages\Templates\UseCases;

use Rocket\CommandBus\Handler;
use Rocket\Events\Dispatcher;
use Rocket\Pages\Templates\Template;
use Rocket\Pages\Templates\TemplateRepository;

class PostTemplateHandler implements Handler
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
     * @param PostTemplateRequest $command
     * @return \Rocket\Pages\Templates\UseCases\PostTemplateResponse
     */
    public function handle($command)
    {
        $template = new Template();

        $dir = \Config::get('core::view.paths');
        $ident = \Str::slug($command->name);

        $filename = $dir . DIRECTORY_SEPARATOR . $ident . \Config::get('core::view.extension');

        $index = 1;

        while (file_exists($filename)) {
            $ident = \Str::slug($ident . ' ' . $index);
            $filename = $dir . DIRECTORY_SEPARATOR . $ident . \Config::get('core::view.extension');
            $index++;
        }

        file_put_contents($filename, $command->body);

        // save template body to the file
        $template->template = $ident;
        $template->name = $command->name;

        // save
        $this->repository->save($template);

        return new PostTemplateResponse($template);
    }
}