@Rocket.module 'TemplatesApp.List', (List, App, Backbone, Marionette, $, _) ->
    class List.Layout extends App.Views.LayoutView
        template: 'templates/list/templates/layout'

        regions:
            listRegion: '#project-list'

    class List.PageItem extends App.Views.ItemView
        template: 'templates/list/templates/item'
        className: 'list-group-item'

    class List.Empty extends App.Views.ItemView
        template: 'templates/list/templates/empty'

    class List.Pages extends App.Views.CompositeView
        template: 'templates/list/templates/grid'
        childView: List.PageItem
        emptyView: List.Empty
        childViewContainer: '.treeview'
        attributes:
            id: 'templates-list'

        ui:
            'items': '.list-group-item'
