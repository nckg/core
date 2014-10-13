@Rocket.module "DropzoneApp", (DropzoneApp, App, Backbone, Marionette, $, _) ->

    Dropzone.autoDiscover = false

    API =
        setupDropzone: (el, defaultImg = null) ->
            myDropzone = new Dropzone el,
                url: App.request("get:url:api") + "/image"
                method: "POST"
                addRemoveLinks: true
                maxFiles: 1
                acceptedFiles: "image/*"

            # Only allow maxFiles uploaded
            myDropzone.on "maxfilesexceeded", (file) ->
                @removeFile file

            myDropzone.on "removedfile", ( file ) ->
                $( "#image_id" ).val ""
                $( "#image" ).val ""
                myDropzone.options.maxFiles = 1

            # Show any errors if the file upload fails.
            myDropzone.on "error", (file, message, xhr) ->
                if xhr
                    msg = $.parseJSON message
                    # alert( msg.error.message )
                    App.execute 'alert:show:warning', "Oops! \"#{ msg.error.message }\""
                else
                    # alert message
                    App.execute 'alert:show:warning', "Oops! \"#{ message }\""


            # After uploading fill the form.
            myDropzone.on "success", ( file, contents ) ->
                $( "#image_id" ).val contents.id
                $( "#image" ).val file.name

            # Set a default image:
            # https://github.com/enyo/dropzone/wiki/FAQ#how-to-show-files-already-stored-on-server
            if defaultImg
                mockFile = { name: "Filename", size: 12345 }
                myDropzone.emit "addedfile", mockFile
                myDropzone.emit "thumbnail", mockFile, "#{ defaultImg.public_path }/#{ defaultImg.name }"
                myDropzone.options.maxFiles = 0
                $( "#image_id" ).val defaultImg.id

    App.vent.on "setup:dropzone", (el, defaultImg) ->
        API.setupDropzone el, defaultImg