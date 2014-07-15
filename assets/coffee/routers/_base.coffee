@Rocket.module "Routers", (Routers, App, Backbone, Marionette, $, _) ->

    class Routers.Router extends Marionette.AppRouter
        onRoute: ( name, path, args ) ->
            App.vent.trigger 'app:routed',
                name: name
                path: path
                args: args