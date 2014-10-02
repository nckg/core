@Rocket.module 'PagesApp.List', (List, App, Backbone, Marionette, $, _) ->
    class List.Layout extends App.Views.LayoutView
        template: 'pages/list/templates/layout'

        regions:
            listRegion: '.pages'

    class List.PageItem extends App.Views.ItemView
        getTemplate: ->
            if @model.get("editable") is "1"
                return 'pages/list/templates/item'
            else
                return 'pages/list/templates/item-disabled'

        ###*
         * Returns attributes hash
         *
         * @return {Object}
        ###
        attributes: ->
            attrs =
                class: 'pageItem'

            if @model.get("editable") is "0"
                attrs.class = "pageItem pageItem-disabled"

            attrs

        ui:
            clickableState: '.js-pageItem-state'
            state: '.pageItem-state'
            destroy: '[data-action="destroy"]'

        triggers:
            'click @ui.clickableState': 'change:state'
            "click @ui.destroy" : "page:delete:clicked"

        modelEvents:
            "change": "render"

        onDomRefresh: ->
            @ui.state.tooltip()

    class List.Empty extends App.Views.ItemView
        template: 'pages/list/templates/empty'

    class List.Pages extends App.Views.CompositeView
        template: 'pages/list/templates/grid'
        childView: List.PageItem
        emptyView: List.Empty
        childViewContainer: '.pagesList'
        attributes:
            id: 'pages-list'

        ui:
            'items': '.pageItem'
