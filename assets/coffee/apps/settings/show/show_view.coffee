@Rocket.module 'SettingsApp.Show', (Show, App, Backbone, Marionette, $, _) ->
    class Show.View extends App.Views.BaseForm
        template: 'settings/show/templates/form'

        ui:
            form: 'form'
            template: '#blog_item_template'
            submit: '[data-action="submit"],[type="submit"]'

        events:
            'click @ui.submit' : 'save'

        # manipulate the `el` here. it's already
        # been rendered, and is full of the view's
        # HTML, ready to go.
        onRender: ->
            # find blog item setting
            model = @collection.findWhere key: 'blog.item.template'
            model = App.request 'new:setting:entity' unless model
            console.log model

            # fill the template box
            @renderSelect @options.templateCollection, @ui.template, 'id', 'name', model.get( 'value' )


        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: ( data ) ->
            console.log data
            data

        # Default save method called in 'edit' and 'new' type
        # views. To format the data specifically, override the
        # 'formatSaveData' and return the data to be sent to the
        # server.
        save: ( e ) ->
            e.preventDefault()

            return unless @ui.form.parsley().validate()

            # Process the form and sync to the server
            # console.log @getSaveData()
            @collection.save @getSaveData()
