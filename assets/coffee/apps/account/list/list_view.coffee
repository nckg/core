@Rocket.module "AccountApp.List", (List, App, Backbone, Marionette, $, _) ->
    class List.Layout extends App.Views.LayoutView
        template: 'account/list/templates/layout'

        regions:
            listRegion: '.accounts'

    class List.AccountItem extends App.Views.ItemView
        template: "account/list/templates/item"
        className: "pageItem accountItem"

        ui:
            destroy: '[data-action="destroy"]'
            editButton: '[data-action="edit"]'

        triggers:
            "click @ui.destroy" : "account:delete:clicked"

        events:
            "click @ui.editButton" : "edit"

        templateHelpers: ->
            canDelete: ->
                me = App.request "get:current:user"
                if me.id isnt this.id then true else false

        edit: (e) ->
            e.preventDefault()
            App.vent.trigger "account:edit:clicked", @model

    class List.Accounts extends App.Views.CompositeView
        template: "account/list/templates/grid"
        childView: List.AccountItem
        childViewContainer: ".pagesList"