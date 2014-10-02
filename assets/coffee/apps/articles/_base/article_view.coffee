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

        events:
            'click @ui.submit' : 'save'

        # manipulate the `el` here. it's already
        # been rendered, and is full of the view's
        # HTML, ready to go.
        onRender: ->
            console.log @model
            @editor = new MediumEditor @ui.editor

        onBeforeClose: ->
            @editor.deactivate()

        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: ( data ) ->
            # get data from sir Trevor
            body = @editor.serialize()
            data.body = body[ 'page-body' ][ 'value' ]

            data