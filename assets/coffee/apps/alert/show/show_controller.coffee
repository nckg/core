@Rocket.module 'AlertApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.Controller extends App.Controllers.Base
        initialize: ( options ) ->
            # create a new view
            { message, className } = options

            view = @alertView message, className

            @show view,
                region: App.request 'flash:region'

        alertView: ( message, className ) ->
            new Show.View
                model: new Backbone.Model
                    message: message
                extraClassName: className