# New Post View
# ---------------
# Handle adding a new post.
@Rocket.module 'ArticlesApp.New', (New, App, Backbone, Marionette, $, _) ->

    class New.View extends App.Views.ArticleView


