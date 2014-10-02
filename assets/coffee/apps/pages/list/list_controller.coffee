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
            list = new List.Pages
                collection: pages

            list.on 'childview:change:state', ( view, args ) ->
                model = args.model
                model.set 'active', if model.get( 'active' ) is "0" then "1" else "0"
                model.save()

            @listenTo list, "childview:page:delete:clicked", (child, args) ->
                model = args.model
                if confirm "Pagina \"#{ model.get( 'title' ) }\" verwijderen?" then model.destroy() else false

            list