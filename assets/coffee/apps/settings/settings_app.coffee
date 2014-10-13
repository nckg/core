# SettingsApp
# -------------------
# Handles the setup of managing all the pages
@Rocket.module 'SettingsApp', (SettingsApp, App, Backbone, Marionette, $, _) ->

    ###*
     * The router
    ###
    class SettingsApp.Router extends App.Routers.Router
        appRoutes:
            'settings': 'show'

    API =
    # List all the posts in a grid.
        show: ->
            new SettingsApp.Show.Controller

    # Initialize the router.
    App.addInitializer ->
        new SettingsApp.Router
            controller: API