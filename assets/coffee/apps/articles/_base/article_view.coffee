# Project View
# ---------------
# A parent view which the add and edit views extend from.
@Rocket.module 'Views', (Views, App, Backbone, Marionette, $, _) ->

    class Views.ArticleView extends App.Views.BaseForm
        template: 'articles/_base/templates/form'

        returnUrl: 'articles'

        ui:
            form: 'form'
            submit: '[data-action="submit"],[type="submit"]'
            editor: '.rocket-editor'
            publishAt: '[name="publish_at"]'

        events:
            'click @ui.submit' : 'save'

        # manipulate the `el` here. it's already
        # been rendered, and is full of the view's
        # HTML, ready to go.
        onShow: ->
            @publishAt = @ui.publishAt.datetimepicker
                format: 'YYYY-MM-DD HH:mm'
                icons:
                    time: "fa fa-clock-o"
                    date: "fa fa-calendar"
                    up: "fa fa-arrow-up"
                    down: "fa fa-arrow-down"

            @editor = new MediumEditor @ui.editor,
                buttons: [ 'bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote', 'unorderedlist' ]
                buttonLabels: 'fontawesome'

            @ui.editor.mediumInsert
                editor: @editor
                addons:
                    forms: {}
                    embeds:
                        oembedProxy: 'http://medium.iframe.ly/api/oembed?iframe=1'

            App.vent.trigger "setup:dropzone", "#dropzone-attachment", @model.get( "image" )

        onBeforeClose: ->
            @editor.deactivate()
            @publishAt.destroy()

        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: ( data ) ->
            # get data from sir Trevor
            body = @editor.serialize()
            data['body'] = body[ 'page-body' ][ 'value' ]

            data