@Rocket.module "AccountApp", (AccountApp, App, Backbone, Marionette, $, _) ->

    class AccountApp.Router extends App.Routers.Router
        appRoutes:
            "accounts" : "list"
            "accounts/add" : "new"
            "accounts/edit/:id" : "edit"

    API =
        list: ->
            new AccountApp.List.Controller

        new: ->
            new AccountApp.New.Controller
              region: App.mainRegion

        edit: (id, account) ->
            new AccountApp.Edit.Controller
                region: App.mainRegion
                id: id
                account: account

    App.vent.on "account:edit:clicked", (account) ->
        App.navigate "/account/edit/#{account.id}"
        API.edit account.id, account

    # Listen for the user created or saved then show alert and redirect.
    App.vent.on "account:created account:updated", ( item ) ->
        App.execute 'alert:show:success', "Account \"#{ item.get( 'first_name' ) }\" was successfully saved!"
        App.navigate "accounts"
        API.list()

    App.addInitializer ->
        new AccountApp.Router
          controller: API