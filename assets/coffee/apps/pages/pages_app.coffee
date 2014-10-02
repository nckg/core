# page App
# -------------------
# Handles the setup of managing all the pages
@Rocket.module 'PagesApp', (PagesApp, App, Backbone, Marionette, $, _) ->

    ###*
     * The page router
    ###
    class PagesApp.Router extends App.Routers.Router
        appRoutes:
            '': 'list'
            'pages': 'list'
            'pages/add': 'add'
            'pages/edit/:id': 'edit'
            'pages/delete/:id': 'delete'

    API =
        # List all the posts in a grid.
        list: ->
            new PagesApp.List.Controller

        # Add a new page.
        add: ->
            new PagesApp.New.Controller

        edit: ( id, item, activeTab ) ->
            new PagesApp.Show.Controller
                id: id
                page: item
                activeTab: activeTab

        # Edit an existing post.
        delete: ( id, item ) ->


    # Load the list of posts from an event.
    # App.vent.on 'post:load', ->
    #     App.navigate 'post'
    #     API.list()

    # Listen for the post created or saved then show alert and redirect.
    App.vent.on 'page:created page:updated', ( item ) ->
        App.execute 'alert:show:success', "Page \"#{ item.get( 'title' ) }\" was successfully saved!"
        App.navigate "pages/edit/#{ item.id }", trigger: yes

    # # When the new post link is clicked then show the add routine.
    # App.vent.on 'post:new:clicked post:new', ->
    #     App.navigate '/',
    #         trigger: false
    #     API.add()

    # # When the edit post link is clicked then show the edit routine.
    # App.vent.on 'post:item:clicked', (item) ->
    #     App.navigate 'post/edit/#{item.id}'
    #     API.edit item.id, item

    # Initialize the router.
    App.addInitializer ->
        new PagesApp.Router
            controller: API

    # Initialize some commands
    App.commands.setHandler 'list:pages', ->
        API.list()