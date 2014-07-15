# New Post Controller
# -------------------
# Handles the actions for setting up the new page info.
@Rocket.module 'ArticlesApp.New', (New, App, Backbone, Marionette, $, _) ->

    class New.Controller extends App.Controllers.Base

        initialize: ( options ) ->
            # Request an empty page model
            article = App.request 'new:article:entity'

            # Listen to the page created event and then send out a page:created event.
            @listenTo article, 'created', =>
                App.vent.trigger 'article:created', article

            # Get the page view.
            view = @getView article

            # Actually show and insert the view into the DOM.
            @show view,
                loading:
                    entities: article

        # Get the new page view passing in an empty page model
        getView: ( article ) ->
            new New.View
                model: article