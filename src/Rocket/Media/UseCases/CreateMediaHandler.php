<?php namespace Rocket\Media\UseCases; 

use Rocket\CommandBus\Handler;
use Rocket\Media\Media;
use Rocket\Media\MediaRepository;

class CreateMediaHandler implements Handler
{
    /**
     * @var MediaRepository
     */
    private $repository;

    /**
     * @param MediaRepository $repository
     */
    public function __construct(MediaRepository $repository)
    {

        $this->repository = $repository;
    }

    /**
     * @param \Rocket\Media\UseCases\CreateMediaRequest $request
     * @return \Rocket\Media\UseCases\CreateMediaResponse
     */
    public function handle($request)
    {
        $media = Media::register($request->name, $request->publicPath, $request->realPath, $request->mime);

        $this->repository->save($media);

        return new CreateMediaResponse($media);
    }
}