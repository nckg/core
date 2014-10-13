@Rocket.module "ArticlesApp", (ArticlesApp, App, Backbone, Marionette, $, _) ->

    ###*
     * The page router
    ###
    class ArticlesApp.Router extends App.Routers.Router
        appRoutes:
            'articles': 'list'
            'articles/add': 'add'
            'articles/edit/:id': 'edit'

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

        edit: ( id ) ->
            new ArticlesApp.Show.Controller
                id: id

#        settings: ->
#            new ArticlesApp.Settings.Controller()


    # Listen for the post created or saved then show alert and redirect.
    App.vent.on 'article:created article:updated', ( item ) ->
        App.execute 'alert:show:success', "Article \"#{ item.get( 'title' ) }\" was successfully saved!"
        App.navigate "articles"
        API.list()

    # Initialize the router.
    App.addInitializer ->
        new ArticlesApp.Router
            controller: API
