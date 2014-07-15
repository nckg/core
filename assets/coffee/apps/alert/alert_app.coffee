# Build App
# -------------------
# Handles the setup of managing all the posts
@Rocket.module 'AlertApp', (Alert, App, Backbone, Marionette, $, _) ->

    ###*
     * App API
     * @type {Object}
    ###
    API =
        # list
        show: ( message, type ) ->
            new Alert.Show.Controller
                message: message
                className: "alert-#{ type }"

    # Initialize some commands
    App.commands.setHandler 'alert:show:success', ( message ) ->
        API.show message, 'success'

    App.commands.setHandler 'alert:show:info', ( message ) ->
        API.show message, 'info'

    App.commands.setHandler 'alert:show:warning', ( message ) ->
        API.show message, 'warning'