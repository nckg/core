@Rocket.module 'FormsApp.Prompt', (Prompt, App, Backbone, Marionette, $, _) ->

    class Prompt.Controller extends App.Controllers.Base

        initialize: ( options ) ->
            # get the page from the api if its empty
            collection = App.request 'form:entities'

            # create a layout
            @view = @getView collection

            @show @view,
                region: App.dialogRegion
                loading:
                    entities: collection

        getView: ( collection ) ->
            new Prompt.View
                collection: collection