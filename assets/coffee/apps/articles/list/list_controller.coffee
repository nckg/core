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

        getListView: ( collection ) ->
            list = new List.Pages
                collection: collection

            list.on 'childview:change:state', ( view, args ) ->
                page = App.request 'new:page:entity'
                page.set args.model.get( 'page' )
                page.set 'active', if args.model.get( 'page' ).active is "0" then "1" else "0"
                args.model.get( 'page' ).active = page.get 'active'
                view.render()
                page.save()

            @listenTo list, "childview:article:delete:clicked", (child, args) ->
                model = args.model
                if confirm "Artikel \"#{ model.get( 'title' ) }\" verwijderen?" then model.destroy() else false

            list
