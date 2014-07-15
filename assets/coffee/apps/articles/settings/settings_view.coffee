@Rocket.module 'ArticlesApp.Settings', (Settings, App, Backbone, Marionette, $, _) ->

    class Settings.Form extends App.Views.BaseForm
        template: "articles/settings/templates/form"