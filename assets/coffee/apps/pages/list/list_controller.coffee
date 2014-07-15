@Rocket.module 'PagesApp.List', ( List, App, Backbone, Marionette, $, _ ) ->

    class List.Controller extends App.Controllers.Base

        initialize: ->
            pages = App.request 'page:entities'
            @layout = @getLayout()

            @listenTo @layout, 'show', =>
                @show @getListView( pages ),
                    region: @layout.listRegion

            @show @layout,
                loading:
                    entities: pages

        getLayout: ->
            new List.Layout()

        getListView: ( pages ) ->
            new List.Pages
                collection: pages