# Project View
# ---------------
# A parent view which the add and edit views extend from.
@Rocket.module 'Views', (Views, App, Backbone, Marionette, $, _) ->

    class Views.UserView extends App.Views.BaseForm
        template: 'account/_base/templates/form'

        ui:
            form: 'form'
            submit: '[data-action="submit"],[type="submit"]'

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
            @model.save @getSaveData(),
                collection: @collection
