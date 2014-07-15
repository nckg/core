@Rocket.module 'ArticlesApp.List', ( List, App, Backbone, Marionette, $, _ ) ->

    class List.Controller extends App.Controllers.Base

        initialize: ->
            articles = App.request 'article:entities'
            @layout = @getLayout()

            @listenTo @layout, 'show', =>
                @show @getListView( articles ),
                    region: @layout.listRegion

            @show @layout,
                loading:
                    entities: articles

        getLayout: ->
            new List.Layout()

        getListView: ( articles ) ->
            new List.Pages
                collection: articles