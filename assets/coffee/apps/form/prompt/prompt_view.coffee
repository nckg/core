@Rocket.module 'FormsApp.Prompt', (Prompt, App, Backbone, Marionette, $, _) ->
    class Prompt.View extends App.Views.BaseForm
        template: 'form/prompt/templates/prompt'

        ui:
            form: 'form'
            submit: '[type="submit"]'

        events:
            'click @ui.submit' : 'save'

        # Default save method called in 'edit' and 'new' type
        # views. To format the data specifically, override the
        # 'formatSaveData' and return the data to be sent to the
        # server.
        save: ( e ) ->
            e.preventDefault()

            return unless @ui.form.parsley().validate()

            # Process the form and sync to the server
            # console.log @getSaveData()
            @trigger 'prompt:submit', @getSaveData()
            @trigger 'dialog:close'