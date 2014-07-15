# Project View
# ---------------
# A parent view which the add and edit views extend from.
@Rocket.module 'Views', (Views, App, Backbone, Marionette, $, _) ->

    class Views.TemplateView extends App.Views.BaseForm
        template: 'templates/_base/templates/form'

        ui:
            form: 'form'
            submit: '[data-action="submit"],[type="submit"]'
            destroy: '[data-action="destroy"]'
            inputTitle: '[name="title"]'
            editor: '[name="body"]'

        events:
            'click @ui.submit' : 'save'

        triggers:
            'click @ui.destroy': 'page:delete:clicked'

        # manipulate the `el` here. it's already
        # been rendered, and is full of the view's
        # HTML, ready to go.
        onRender: ->
            @editor = CodeMirror.fromTextArea @ui.editor.get( 0 ),
                mode: 'text/html'
                lineNumbers: yes
                styleActiveLine: yes
                theme: "solarized dark"

            setTimeout =>
                @editor.refresh()
            , 1

        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: ( data ) ->
            @editor.save()

            content = @editor.getValue()
            if content.length > 0
                data.body = content

            data