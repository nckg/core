@Rocket.module 'ArticlesApp.Settings', ( Settings, App, Backbone, Marionette, $, _ ) ->

    class Settings.Controller extends App.Controllers.Base

        initialize: ->
            templates = App.request 'template:entities'

            @view = @getSettingsView( templates )
            @show @view,
                loading:
                    entities: templates


        getSettingsView: ( templates ) ->
            new Settings.Form
                templates: templates