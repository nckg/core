@Rocket.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

    class Entities.User extends App.Entities.Model
        urlRoot: ->
            App.request("get:url:api") + "/user"

    class Entities.UsersCollection extends App.Entities.Collection
        model: Entities.User
        url: ->
            App.request("get:url:api") + "/user"

    API =
        setCurrentUser: (currentUser) ->
            new Entities.User currentUser

        setAllUsers: (users) ->
            new Entities.UsersCollection users

        getUser: (id) ->
            user = new Entities.User
                id: id
            user.fetch()
            user

        getUserEntities: (cb) ->
            users = new Entities.UsersCollection
            users.fetch
                success: ->
                    cb users

        newUser: ->
            new Entities.User

    App.reqres.setHandler "set:current:user", (currentUser) ->
        API.setCurrentUser currentUser

    App.reqres.setHandler "set:all:users", (users) ->
        API.setAllUsers users

    App.reqres.setHandler "user:entities", (cb) ->
        API.getUserEntities cb

    App.reqres.setHandler "user:entity", (id) ->
        API.getUser id

    App.reqres.setHandler "new:user:entity", ->
        API.newUser()