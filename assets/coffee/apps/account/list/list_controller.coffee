@Rocket.module "AccountApp.List", (List, App, Backbone, Marionette, $, _) ->

    class List.Controller extends App.Controllers.Base

        initialize: ->
            users = App.request "get:all:users"
            @layout = @getLayout()

            @listenTo @layout, 'show', =>
                @show @getListView( users ),
                    region: @layout.listRegion

            @show @layout,
                loading:
                    entities: users

        getLayout: ->
            new List.Layout()

        getListView: (users) ->
            view = new List.Accounts
                collection: users

            @listenTo view, "childview:account:delete:clicked", (child, args) ->
                model = args.model
                if confirm "Gebruiker \"#{ model.get( 'first_name' ) } #{ model.get( 'last_name' ) }\" verwijderen?" then model.destroy() else false

            @listenTo view, 'childview:change:state', ( view, args ) ->
                model = args.model
                model.set 'actived', if model.get( 'actived' ) is true then yes else no
                model.save()

            view

