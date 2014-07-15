# page App
# -------------------
# Handles the setup of managing all the templates
@Rocket.module 'TemplatesApp', (TemplatesApp, App, Backbone, Marionette, $, _) ->

    ###*
     * The page router
    ###
    class TemplatesApp.Router extends App.Routers.Router
        appRoutes:
            'templates': 'list'
            'templates/add': 'add'
            'templates/edit/:id': 'edit'
            'templates/delete/:id': 'delete'

    API =
        # List all the posts in a grid.
        list: ->
            new TemplatesApp.List.Controller

        # Add a new page.
        add: ->
            new TemplatesApp.New.Controller

        edit: ( id, item, activeTab ) ->
            new TemplatesApp.Show.Controller
                id: id
                template: item

        # Edit an existing post.
        delete: ( id, item ) ->


    # Load the list of posts from an event.
    # App.vent.on 'post:load', ->
    #     App.navigate 'post'
    #     API.list()

    # # Listen for the post created or saved then show alert and redirect.
    App.vent.on 'template:created template:updated', ( item ) ->
        console.log item
        App.execute 'alert:show:success', 'Great! template created'
        # App.navigate 'post/edit/#{item.id}'
        # API.edit item.id, item

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
        new TemplatesApp.Router
            controller: API

    # Initialize some commands
    App.commands.setHandler 'list:templates', ->
        API.list()