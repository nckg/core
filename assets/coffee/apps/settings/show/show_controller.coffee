@Rocket.module 'SettingsApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.Controller extends App.Controllers.Base

        initialize: ( options ) ->

            templates = App.request 'template:entities', restricted: false
            settings = App.request 'setting:entities'

            # create a layout
            @view = @getView( settings, templates )

            @show @view,
                loading:
                    entities: [ settings, templates ]

        getView: ( settings, templates ) ->
            new Show.View
                collection: settings
                templateCollection: templates