# Project View
# ---------------
# A parent view which the add and edit views extend from.
@Rocket.module 'Views', (Views, App, Backbone, Marionette, $, _) ->

    class Views.ArticleView extends App.Views.BaseForm
        template: 'articles/_base/templates/form'

        ui:
            form: 'form'
#            pages: '#page_id'
#            template: '#template_id'
            submit: '[data-action="submit"],[type="submit"]'
            destroy: '[data-action="destroy"]'
            sirTrevor: '.js-st-instance'
#            inputSlug: '[name="slug"]'
#            inputTitle: '[name="title"]'
#            prefix: '.input-group-addon.prefix'
#
        events:
            'click @ui.submit' : 'save'
#            'keyup @ui.inputTitle': 'showSlug'
#            'blur @ui.inputTitle': 'showSlug'
#            'keyup @ui.inputSlug': 'showSlug'
#            'change @ui.pages': 'changePrefix'
#
        triggers:
            'click @ui.destroy': 'page:delete:clicked'
#
#        showSlug: ->
#            @ui.inputSlug.val getSlug( @ui.inputTitle.val() )
#
#        changePrefix: ( event ) ->
#            page = @options.pageCollection.findWhere id: parseInt( @$( event.currentTarget ).val() )
#
#            if page
#                path = "/#{ page.get( 'path' ) }/".replace "//", "/"
#                @ui.prefix.html( path )
#
#
        # manipulate the `el` here. it's already
        # been rendered, and is full of the view's
        # HTML, ready to go.
        onRender: ->
#            # fill the template box
#            @renderSelect @options.templateCollection, @ui.template, 'id', 'name', @model.get( 'template_id' )
#
#            # fill the pages box
#            @renderSelect @options.pageCollection.getIndentedList(), @ui.pages, 'id', ( model ) ->
#                prefix = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat( model.get( 'level' ) )
#                "#{ prefix }#{ model.get( 'title' ) }"
#            , @model.get( 'page_id' )
#

            @sirTrevor = new SirTrevor.Editor
                # set element
                el: @ui.sirTrevor

                # set default type when instantiating
                defaultType: 'Markdown'

                # set available block types
                blockTypes: [
                    'Markdown'
                    'Heading'
                    'Image'
                    'Video'
                ]

        # override in child to format save data in a particular way.
        # It could be setting a particular date format or setting the
        # correct case on strings, for example.
        formatSaveData: ( data ) ->
            SirTrevor.onBeforeSubmit()

            # get data from sir Trevor
            data.body = @sirTrevor.$el.val()

            data