@Rocket.module 'AlertApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.View extends App.Views.ItemView
        template: 'alert/show/templates/flash'

        ###*
         * Returns attributes hash
         *
         * @return {Object}
        ###
        attributes: ->
            attrs = { class: 'alert' }
            if @options.extraClassName
                attrs.class = "alert #{ @options.extraClassName }"

            attrs