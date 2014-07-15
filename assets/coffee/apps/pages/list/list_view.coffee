@Rocket.module 'PagesApp.List', (List, App, Backbone, Marionette, $, _) ->
    class List.Layout extends App.Views.LayoutView
        template: 'pages/list/templates/layout'

        regions:
            listRegion: '#project-list'

    class List.PageItem extends App.Views.ItemView
        template: 'pages/list/templates/item'
        className: 'list-group-item'

    class List.Empty extends App.Views.ItemView
        template: 'pages/list/templates/empty'

    class List.Pages extends App.Views.CompositeView
        template: 'pages/list/templates/grid'
        childView: List.PageItem
        emptyView: List.Empty
        childViewContainer: '.treeview'
        attributes:
            id: 'pages-list'

        ui:
            'items': '.list-group-item'
