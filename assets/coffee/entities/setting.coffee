@Rocket.module 'Entities', ( Entities, App ) ->

    class Entities.Setting extends App.Entities.Model
        defaults:
            key: ''
            value: ''

        urlRoot: ->
            App.request( 'get:url:api' ) + '/setting'

    class Entities.SettingCollection extends App.Entities.Collection
        model: Entities.Setting

        url: ->
            App.request( 'get:url:api' ) + '/setting'

    API =
        getAll: ->
            model = new Entities.SettingCollection
            model.fetch
                reset: true
            model

        newSetting: ->
            new Entities.Setting

    App.reqres.setHandler 'setting:entities', ->
        API.getAll()

    App.reqres.setHandler 'new:setting:entity', ->
        API.newSetting()
