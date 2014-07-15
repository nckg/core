<?php namespace Rocket\Core\Controllers\Api;

use App\Services\Storage\Media\MediaRepositoryInterface as Media;

class ImageController extends BaseController {

    /**
     *
     * @var MediaRepository
     */
    protected $media;

    /**
     * Default constructor
     *
     * @param Media     $media
     */
    public function __construct(Media $media)
    {
        $this->media = $media;
    }

    /**
     * Show the index page
     *
     * @return View
     */
    public function index()
    {
        return $this->media->all();
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
            if (\Input::hasFile('attachment.file')) {
                $file = \Upload::upload(\Input::file('attachment.file'));

                $media = $this->media->create(array(
                    'name' => $file->getFilename(),
                    // /var/www/public/upload/
                    'public_path' => str_replace(public_path(), '', $file->getPath()),
                    'real_path' => $file->getPath(),
                    'mime' => $file->getMimeType(),
                ));

                return $media;
            } else {
                throw new \Exception('No file found', 1);
            }
        } catch (\Exception $e) {
            \App::abort(500, $e->getMessage());
        }
    }
}
