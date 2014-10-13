<?php namespace Rocket\Controllers\Api;

use Rocket\CommandBus\CommandBus;
use Rocket\Media\MediaRepository;
use Rocket\Media\Upload;
use Rocket\Media\UseCases\CreateMediaRequest;

class ImageController extends BaseController
{

    /**
     * @var MediaRepository
     */
    private $repository;

    /**
     * Default constructor
     *
     * @param MediaRepository $repository
     * @param CommandBus $bus
     */
    public function __construct(MediaRepository $repository, CommandBus $bus)
    {
        $this->repository = $repository;
        $this->bus = $bus;
    }

    /**
     * Stores the page
     *
     * @return Redirect
     */
    public function store()
    {
        // The uploader posts an attachments hash that has three properties:
        // - attachments[name] – the files name
        // - attachments[file] – the file as Symfony\Component\HttpFoundation\File\UploadedFile
        // - attachments[uid] – a unique identifier for this file
        try {
            if (\Input::hasFile('file')) {
                $file = Upload::upload(\Input::file('file'), \Config::get('upload.basedir'));

                $request = new CreateMediaRequest(
                    $file->getFilename(),
                    str_replace(public_path(), '', $file->getPath()),
                    $file->getPath(),
                    $file->getMimeType()
                );

                $response = $this->bus->execute($request);

                return $response->media;
            } else {
                throw new \Exception('No file found', 1);
            }
        } catch (\Exception $e) {
            \App::abort(500, $e->getMessage());
        }
    }
}
