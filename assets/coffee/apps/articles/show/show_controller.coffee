@Rocket.module 'ArticlesApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.Controller extends App.Controllers.Base

        initialize: ( options ) ->
            # fetch a page or id from the options argument
            { model, id } = options

            # get the page from the api if its empty
            model or= App.request 'article:entity', id

            # Listen to the page created event and then send out a page:created event.
            @listenTo model, 'updated', =>
                App.vent.trigger 'article:updated', model

            # create a layout
            @view = @getView model: model

            @show @view,
                loading:
                    entities: model

        getView: ( options ) ->
            new Show.View options
