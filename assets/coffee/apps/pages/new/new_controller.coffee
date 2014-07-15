# New Post Controller
# -------------------
# Handles the actions for setting up the new page info.
@Rocket.module 'PagesApp.New', (New, App, Backbone, Marionette, $, _) ->

    class New.Controller extends App.Controllers.Base

        initialize: (options) ->
            # Request an empty page model
            page = App.request 'new:page:entity'
            pages = App.request 'page:entities'
            templates = App.request 'template:entities'

            # Listen to the page created event and then send out a page:created event.
            @listenTo page, 'created', =>
                App.vent.trigger 'page:created', page

            # Get the page view.
            view = @getView page, pages, templates

            # Actually show and insert the view into the DOM.
            @show view,
                loading:
                    entities: [ page, pages, templates ]

        # Get the new page view passing in an empty page model
        getView: ( page, pages, templates ) ->
            new New.View
                model: page
                pageCollection: pages
                templateCollection: templates