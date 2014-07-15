@Rocket.module 'TemplatesApp.Show', (Show, App, Backbone, Marionette, $, _) ->

    class Show.Controller extends App.Controllers.Base

        initialize: ( options ) ->
            # fetch a template or id from the options argument
            { template, id } = options

            # get the template from the api if its empty
            template or= App.request 'template:entity', id

            # Listen to the template created event and then send out a template:created event.
            @listenTo template, 'updated', =>
                App.vent.trigger 'template:updated', template

            # create a layout
            @view = @getView template

            @listenTo @view, 'template:delete:clicked', ( args ) ->
                model = args.model
                if confirm "Pagina \"#{ model.get( 'title' ) }\" verwijderen?" then model.destroy() else false

            @show @view,
                loading:
                    entities: template

        getView: ( template ) ->
            new Show.View
                model: template
