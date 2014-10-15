# Project View
# ---------------
# A parent view which the add and edit views extend from.
@Rocket.module 'Views', (Views, App, Backbone, Marionette, $, _) ->

    class Views.PageView extends App.Views.BaseForm
        template: 'pages/_base/templates/form'

        ui:
            form: 'form'
            pages: '#page_id'
            template: '#template_id'
            submit: '[data-action="submit"],[type="submit"]'
            editor: '.rocket-editor'
            inputSlug: '[name="slug"]'
            inputTitle: '[name="title"]'
            prefix: '.input-group-addon.prefix'

        events:
            'click @ui.submit' : 'save'
            'keyup @ui.inputTitle': 'showSlug'
            'blur @ui.inputTitle': 'showSlug'
            'keyup @ui.inputSlug': 'showSlug'
            'change @ui.pages': 'changePrefix'

        showSlug: ->
            @ui.inputSlug.val getSlug( @ui.inputTitle.val() )

        changePrefix: ( event ) ->
            page = @options.pageCollection.findWhere id: parseInt( @$( event.currentTarget ).val() )

            if page
                path = "/#{ page.get( 'path' ) }/".replace "//", "/"
                @ui.prefix.html( path )


        # manipulate the `el` here. it's already
        # been rendered, and is full of the view's
        # HTML, ready to go.
        onRender: ->
            # fill the template box
            @renderSelect @options.templateCollection, @ui.template, 'id', 'name', @model.get( 'template_id' )

            # fill the pages box
            @renderSelect @options.pageCollection.getIndentedList(), @ui.pages, 'id', ( model ) ->
                prefix = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat( model.get( 'level' ) )
                "#{ prefix }#{ model.get( 'title' ) }"
            , @model.get( 'page_id' )

            @editor = new MediumEditor @ui.editor,
                buttons: [ 'bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote', 'unorderedlist' ]
                buttonLabels: 'fontawesome'

            that = @
            @ui.editor.mediumInsert
                editor: @editor
                addons:
                    forms:
                        setForm: ( $placeholder, that ) ->
                            # DO WHATEVER YOU WANT HERE
                            controller = App.request( 'form:prompt' )
                            controller.view.on 'prompt:submit', ( data ) ->
                                $placeholder.append "<rocket-form rocket-id=\"#{ data.form_id }\"></rocket-form>"
                                @currentPlaceholder = $placeholder;
                    embeds:
                        oembedProxy: 'http://medium.iframe.ly/api/oembed?iframe=1'


        onBeforeDestroy: ->
            @editor.deactivate()

        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: ( data ) ->
            # get data from sir Trevor
            body = @editor.serialize()
            data.body = body[ 'page-body' ][ 'value' ]

            data