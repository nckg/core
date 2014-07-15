@Rocket.module "Views", ( Views, App ) ->
    class Views.Treeview extends App.Views.CompositeView
        tagName: 'li'

        initialize: ->
            # grab the child collection from the parent model
            # so that we can render the collection as children
            # of this parent node
            @collection = @model.children

        # Append the HTML to the collection's `el`.
        # Override this method to do something other
        # than `.append`.
        attachHtml: ( collectionView, itemView ) ->
            # ensure we nest the child list inside of
            # the current list item
            collectionView.$( 'ul:first' ).append( itemView.el )

        onRender: () ->
            @$( 'ul:first' ).remove() if _.isUndefined( @collection )