@Rocket.module "Views", (Views, App, Backbone, Marionette, $, _) ->

    class Views.BasePrompt extends App.Views.ItemView
        template: 'assets/coffee/views/templates/prompt'

        tagName: 'form'

        triggers:
            "submit form": "form:submit"

        # If initialize is overidden, this method MUST be called manually
        init: ->
            @events = _.extend({}, @baseEvents, @events)
            return

        # Due to this method not being on prototype chain, if it is overridden
        # it won't be called. Therefore the proper setup method for this object
        # cannot be initialize. If the method is not overridden, it will automatically
        # be called by backbone. Otherwise the method 'init' below must be called manually.
        initialize: (options) ->

            # Call the BaseView init method as we've overridden it here
            # and it's not in our prototype chain
            @init.call this

            # set our options
            @options = options

            # Mixin all events in view chain
            @events = _.extend({}, @baseFormEvents, @events)

#        cancel: ->
#            App.navigate @returnUrl,
#                trigger: true

        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: (data) ->
            data

        # To format the data specifically, override the
        # 'formatSaveData' and return the data to be sent to the
        # server.
        getSaveData: ->
            data = Backbone.Syphon.serialize(this)

            @formatSaveData data

        # Default save method called in 'edit' and 'new' type
        # views. To format the data specifically, override the
        # 'formatSaveData' and return the data to be sent to the
        # server.
        save: ( e ) ->
            e.preventDefault()

            return unless @ui.form.parsley().validate()

            # Process the form and sync to the server
            # console.log @getSaveData()
            @model.save @getSaveData()