@Rocket.module "Views", (Views, App, Backbone, Marionette, $, _) ->

    _destroy = Marionette.View::destroy

    _.extend Marionette.View::,

        destroy: (args...) ->
            console.log "removing", @ if App.environment is "dev"
            if @model?.isDestroyed?()
                @$el.fadeOut 400, =>
                    _destroy.apply @, args
            else
                _destroy.apply @, args
