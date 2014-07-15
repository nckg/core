@Rocket.module "HeaderApp.List", (List, App, Backbone, Marionette, $, _) ->

    class List.Header extends App.Views.ItemView
        ui:
            listItems: '#navigation > li'
            navItem: '#navigation > li > a'

        template: "header/list/templates/header"
        tagName: "header"

        initialize: ->
            App.vent.on 'app:routed', ( args ) =>
                active = args.path.split('/')
                @ui.listItems.removeClass( 'active' )
                @ui.navItem.filter( "[href^=\"##{ active[0] }\"]" ).parent( 'li' ).addClass( 'active' )

        events:
            "click .write" : "newPost"
            "click .accounts" : "accounts"

        onRender: ->
            @generateAvatar App.request "get:current:user"

        # Helpers used by the view
        templateHelpers:
            logoutUrl: ->
                "#{App.request("get:url:admin")}/logout"

        generateAvatar: ( user ) ->
            $avEl = @$( ".avatar" )
            $avEl.avatar user.get( "email" ), $avEl.attr( "width" )

        accounts: (e) ->
            e.preventDefault()
            App.vent.trigger "account:clicked"

        newPost: (e) ->
            e.preventDefault()
            App.vent.trigger "page:new:clicked"
