@Rocket = do (Backbone, Marionette) ->

    App = new Backbone.Marionette.Application()

    # Basic pre-seed of common data.
    App.on "before:start", (options) ->
        App.environment = $( 'meta[name=env]' ).attr 'content'
        App.csrfToken = $( 'meta[name="token"]' ).attr 'content'

        @currentUser = App.request 'set:current:user', options.user
        @settings = options.settings
        # @allUsers = App.request 'set:all:users', options.users
        @apiUrl = _.stripTrailingSlash options.api_url
        # @adminUrl = _.stripTrailingSlash options.admin_url

    # Set a handler so that other parts of the app can grab the current user.
    App.reqres.setHandler 'get:current:user', ->
        App.currentUser

    App.reqres.setHandler 'get:all:users', ->
        App.allUsers

    App.reqres.setHandler 'get:url:api', ->
        App.apiUrl

    App.reqres.setHandler 'get:url:admin', ->
        App.adminUrl

    App.reqres.setHandler 'get:settings', ->
        App.settings

    App.reqres.setHandler 'get:setting', ( key ) ->
        App.settings[ key ]

    # Main regions used throughout the admin.
    App.addRegions
        headerRegion: '#header-region'
        # leftRegion: '#leftRegionft-region'
        mainRegion: '#main-region'
        flashRegion: '#flash-message'

    # When our app starts go ahead and start the header.
    App.addInitializer ->
        App.module('HeaderApp').start()
        # App.execute 'list:pages', App.leftRegion

    # Set a default region for our base controller
    App.reqres.setHandler 'default:region', ->
        App.mainRegion

    # Set a default region for our base controller
    App.reqres.setHandler 'flash:region', ->
        App.flashRegion

    App.commands.setHandler 'register:instance', (instance, id) ->
        App.register instance, id if App.environment is 'dev'

    App.commands.setHandler 'unregister:instance', (instance, id) ->
        App.unregister instance, id if App.environment is 'dev'

    # Finally start up backbone history.
    App.on 'start', ->
        @startHistory()

        SirTrevor.setDefaults
            # set image upload url
            uploadUrl: App.request( 'get:url:api' ) + '/image'



    App
