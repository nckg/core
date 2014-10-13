@Rocket.module 'ArticlesApp.List', (List, App, Backbone, Marionette, $, _) ->
    class List.Layout extends App.Views.LayoutView
        template: 'articles/list/templates/layout'

        regions:
            listRegion: '#article-list'

    class List.PageItem extends App.Views.ItemView
        template: 'articles/list/templates/item'

        attributes: ->
            if String( @model.get( "page" ).active ) is "1" and @model.get( "publish_at" ) > moment().format('YYYY-MM-DD HH:mm:ss')
                class: "pageItem pageItem--scheduled"
            else
                class: "pageItem pageItem--published"

        ui:
            clickableState: '.js-pageItem-state'
            state: '.pageItem-state'
            destroy: '[data-action="destroy"]'

        triggers:
            'click @ui.clickableState': 'change:state'
            "click @ui.destroy" : "article:delete:clicked"

        modelEvents:
            "change": "render"

        templateHelpers: ->
            status: ->
                if String( @page.active ) is "1" and @publish_at > moment().format('YYYY-MM-DD HH:mm:ss')
                    return 'scheduled'
                else if String( @page.active ) is "1"
                    return 'active'

                return 'inactive'

            statusText: ->
                if String( @page.active ) is "1" and @publish_at > moment().format('YYYY-MM-DD HH:mm:ss')
                    return 'Actief vanaf: ' + moment( @publish_at ).format('DD-MM-YYYY HH:mm')
                else if String( @page.active ) is "1"
                    return 'Actief'

                return 'Inactief'

        onDomRefresh: ->
            @ui.state.tooltip()

    class List.Empty extends App.Views.ItemView
        template: 'articles/list/templates/empty'

    class List.Pages extends App.Views.CompositeView
        template: 'articles/list/templates/grid'
        childView: List.PageItem
        emptyView: List.Empty
        childViewContainer: '.pagesList'
        attributes:
            id: 'articles-list'

        ui:
            'items': '.pageItem'
