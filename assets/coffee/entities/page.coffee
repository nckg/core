@Rocket.module 'Entities', (Entities, App, Backbone, Marionette, $, _) ->

    class Entities.Page extends App.Entities.Model
        defaults:
            id: null
            body: '<p></p>'
            is_home: no
            path: ''
            slug: ''
            template_id: 1
            title: ''
            user: null

        urlRoot: ->
            App.request( 'get:url:api' ) + '/page'

    class Entities.PageCollection extends App.Entities.Collection
        model: Entities.Page
        url: ->
            App.request( 'get:url:api' ) + '/page'


        getChildren: ( page ) ->
            return new Entities.PageCollection @where page_id: page.get( 'id' )

        _getBranches: ( parent ) ->
            leafs = @getChildren parent

            return if typeof leafs is 'undefined'

            leafs.each ( child ) =>
                child.children = @_getBranches( child )

            leafs

        getTreeview: ( parentId ) ->
            collection = new Entities.PageCollection @where page_id: parentId or null

            collection.each ( model ) =>
                model.children =  @_getBranches( model )

            collection

        _flatten: ( level, input, output ) ->
            input.each ( model ) =>
                model.set( 'level', level )
                output.push( model )

                if model.children
                    @_flatten( level + 1, model.children, output )

            output;

        getIndentedList: ( level = 0 ) ->
            # get the treeview
            treeview = @getTreeview()

            this.models = @_flatten level, treeview, []

            @

    API =
        getAll: ->
            page = new Entities.PageCollection
            page.fetch
                reset: true
            page

        getPage: (id) ->
            page = new Entities.Page
                id: id
            page.fetch()
            page

        newPage: ->
            new Entities.Page

    App.reqres.setHandler 'page:entities', ->
        API.getAll()

    App.reqres.setHandler 'page:entity', (id) ->
        API.getPage id

    App.reqres.setHandler 'new:page:entity', ->
        API.newPage()
