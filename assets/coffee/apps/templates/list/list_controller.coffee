@Rocket.module 'TemplatesApp.List', ( List, App, Backbone, Marionette, $, _ ) ->

    class List.Controller extends App.Controllers.Base

        initialize: ->
            templates = App.request 'template:entities'
            @layout = @getLayout()

            @listenTo @layout, 'show', =>
                @show @getListView( templates ),
                    region: @layout.listRegion

            @show @layout,
                loading:
                    entities: templates

        getLayout: ->
            new List.Layout()

        getListView: ( templates ) ->
            new List.Pages
                collection: templates