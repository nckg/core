@Rocket.module 'Entities', (Entities, App, Backbone, Marionette, $, _) ->

    class Entities.Template extends App.Entities.Model
        defaults:
            id: null
            body: ''
            name: ''

        urlRoot: ->
            App.request( 'get:url:api' ) + '/template'

    class Entities.TemplateCollection extends App.Entities.Collection
        model: Entities.Template
        url: ->
            App.request( 'get:url:api' ) + '/template'

    API =
        getAll: ->
            template = new Entities.TemplateCollection
            template.fetch
                reset: true
            template

        getTemplate: (id) ->
            template = new Entities.Template
                id: id
            template.fetch()
            template

        newTemplate: ->
            new Entities.Template

    App.reqres.setHandler 'template:entities', ->
        API.getAll()

    App.reqres.setHandler 'template:entity', (id) ->
        API.getTemplate id

    App.reqres.setHandler 'new:template:entity', ->
        API.newTemplate()
