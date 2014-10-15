@Rocket.module "Components.Loading", (Loading, App, Backbone, Marionette, $, _) ->

	class Loading.LoadingView extends App.Views.ItemView

        template: 'assets/coffee/components/loading/templates/loading'

        className: 'loading'

