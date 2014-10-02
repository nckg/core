@Rocket.module 'ArticlesApp.List', (List, App, Backbone, Marionette, $, _) ->
    class List.Layout extends App.Views.LayoutView
        template: 'articles/list/templates/layout'

        regions:
            listRegion: '#article-list'

    class List.PageItem extends App.Views.ItemView
        template: 'articles/list/templates/item'
        className: 'pageItem'

        ui:
            clickableState: '.js-pageItem-state'
            state: '.pageItem-state'
            destroy: '[data-action="destroy"]'

        triggers:
            'click @ui.clickableState': 'change:state'
            "click @ui.destroy" : "article:delete:clicked"

        modelEvents:
            "change": "render"

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
