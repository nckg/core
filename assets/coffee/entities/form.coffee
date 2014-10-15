@Rocket.module 'Entities', ( Entities, App ) ->

    class Entities.Form extends App.Entities.Model
        defaults:
            id: null
            title: ''
            email_to: ''
            success: ''
            fields: []

        urlRoot: ->
            App.request( 'get:url:api' ) + '/form'

    class Entities.FormCollection extends App.Entities.Collection
        model: Entities.Form

        url: ->
            App.request( 'get:url:api' ) + '/form'

    API =
        getAll: ->
            model = new Entities.FormCollection
            model.fetch
                reset: true
            model

        newSetting: ->
            new Entities.Form

    App.reqres.setHandler 'form:entities', ->
        API.getAll()

    App.reqres.setHandler 'new:form:entity', ->
        API.newSetting()
