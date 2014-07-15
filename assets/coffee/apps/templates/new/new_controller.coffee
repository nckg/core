# New Post Controller
# -------------------
# Handles the actions for setting up the new template info.
@Rocket.module 'TemplatesApp.New', (New, App, Backbone, Marionette, $, _) ->

    class New.Controller extends App.Controllers.Base

        initialize: (options) ->
            # Request an empty template model
            template = App.request 'new:template:entity'

            # Listen to the template created event and then send out a template:created event.
            @listenTo template, 'created', =>
                App.vent.trigger 'template:created', template

            # Get the template view.
            view = @getView template

            # Actually show and insert the view into the DOM.
            @show view,
                loading:
                    entities: template

        # Get the new template view passing in an empty template model
        getView: ( template ) ->
            new New.View
                model: template