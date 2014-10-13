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
                class: 'alert alert-top animated fadeIn'

            if @options.extraClassName
                attrs.class += ' ' + @options.extraClassName

            attrs

        onShow: ->
            @timeOut = setTimeout =>
                @$el.addClass "fadeOut"
            , 2000

        onBeforeClose: ->
            clearTimeout @timeOut

