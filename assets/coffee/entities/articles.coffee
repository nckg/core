@Rocket.module 'Entities', (Entities, App, Backbone, Marionette, $, _) ->

    # Page model
    class Entities.Article extends App.Entities.Model
        defaults:
            id: null
            summary: ''
            title: ''
            page:
                body: ''

        urlRoot: ->
            App.request( 'get:url:api' ) + '/article'


    # Page collection
    class Entities.ArticleCollection extends App.Entities.Collection
        # set model
        model: Entities.Article,

        comparator: ( article ) ->
            return -moment( article.get( 'created_at' ) ).unix()

        url: ->
            App.request( 'get:url:api' ) + '/article'


    API =
        getAll: ->
            article = new Entities.ArticleCollection
            article.fetch
                reset: true
            article

        getPage: (id) ->
            article = new Entities.Article
                id: id
            article.fetch()
            article

        newPage: ->
            new Entities.Article

    App.reqres.setHandler 'article:entities', ->
        API.getAll()

    App.reqres.setHandler 'article:entity', (id) ->
        API.getPage id

    App.reqres.setHandler 'new:article:entity', ->
        API.newPage()