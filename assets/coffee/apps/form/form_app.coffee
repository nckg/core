# SettingsApp
# -------------------
# Handles the setup of managing all the pages
@Rocket.module 'FormsApp', (FormsApp, App, Backbone, Marionette, $, _) ->

    API =
    # List all the posts in a grid.
        prompt: ->
            new FormsApp.Prompt.Controller

    App.reqres.setHandler 'form:prompt', () ->
        API.prompt()