@Rocket.module "ArticlesApp", (ArticlesApp, App, Backbone, Marionette, $, _) ->

    ###*
     * The page router
    ###
    class ArticlesApp.Router extends App.Routers.Router
        appRoutes:
            'articles': 'list'
            'articles/add': 'add'
#            'articles/settings': 'settings'

#        onRoute: ( name, path, args ) ->
#            super( name, path, args )
#
#            unless App.request( 'get:setting', 'blog.template' )
#                App.navigate( 'articles/settings' )

    API =
        list: ->
            new ArticlesApp.List.Controller()

        add: ->
            new ArticlesApp.New.Controller()

#        settings: ->
#            new ArticlesApp.Settings.Controller()


    # Initialize the router.
    App.addInitializer ->
        new ArticlesApp.Router
            controller: API
