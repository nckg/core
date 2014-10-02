@Rocket.module 'PagesApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.Controller extends App.Controllers.Base

        initialize: ( options ) ->
            # fetch a page or id from the options argument
            { page, id } = options

            # get the page from the api if its empty
            page or= App.request 'page:entity', id
            pages = App.request 'page:entities'
            templates = App.request 'template:entities'

            # Listen to the page created event and then send out a page:created event.
            @listenTo page, "updated", ->
                App.vent.trigger 'page:updated', page

            # create a layout
            @view = @getView page, pages, templates

            @show @view,
                loading:
                    entities: [ page, pages, templates ]

        getView: ( page, pages, templates ) ->
            new Show.View
                model: page
                pageCollection: pages
                templateCollection: templates