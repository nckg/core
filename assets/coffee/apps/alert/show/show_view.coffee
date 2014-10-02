@Rocket.module 'AlertApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.View extends App.Views.ItemView
        template: 'alert/show/templates/flash'

        ###*
         * Returns attributes hash
         *
         * @return {Object}
        ###
        attributes: ->
            attrs =
                class: 'alert alert-top'

            if @options.extraClassName
                attrs.class = "alert  alert-top #{ @options.extraClassName }"

            attrs

        onShow: ->
            @timeOut = setTimeout =>
                @$el.addClass "animated fadeOut"
            , 1000

        onBeforeClose: ->
            clearTimeout @timeOut

