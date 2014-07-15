
###
Interface of Editor.
###
# class Editor
#     constructor: (options) ->
#         options = options or {}
#         @element = options.element  if options.element
#         options.toolbar = options.toolbar or Editor.toolbar

#         # you can customize toolbar with object
#         # [{name: 'bold', shortcut: 'Ctrl-B', className: 'icon-bold'}]
#         unless options.hasOwnProperty("status")
#             options.status = [
#                 "lines"
#                 "words"
#                 "cursor"
#             ]

#         @options = options

#         # If user has passed an element, it should auto rendered
#         @render() if @element

#     markdown: ( text ) ->
#         if window.marked
#             # use marked as markdown parser
#             return marked( text )

#     ###
#     Render editor to the given element.
#     ###
#     render: (el) ->
#         el = @element or document.getElementsByTagName("textarea")[0] unless el

#         # Already rendered.
#         # return if @_rendered and @_rendered is el
#         # @element = el
#         # options = @options
#         # self = this
#         # keyMaps = {}
#         # # for key of shortcuts
#         # #     ((key) ->
#         # #         keyMaps[fixShortcut(key)] = (cm) ->
#         # #             shortcuts[key] self
#         # #             return

#         # #         return
#         # #     ) key
#         # keyMaps["Enter"] = "newlineAndIndentContinueMarkdownList"
#         @codemirror = CodeMirror.fromTextArea el,
#             mode: "markdown"
#             theme: "paper"
#             indentWithTabs: true
#             lineNumbers: false
#             # extraKeys: keyMaps
#         # )
#         # @codemirror.refresh()
#         # @createToolbar()    if options.toolbar isnt false
#         # @createStatusbar()    if options.status isnt false
#         # @_rendered = @element
#         # return

class SirTrevor.Blocks.Markdown extends SirTrevor.Block
    type: "markdown"

    title: -> 'Markdown'

    editorHTML: '<textarea class="st-required st-text-block"></textarea>',

    icon_name: 'fa-paragraph'

    # Function; Executed on save of the block, once the block is validated
    # toData expects a way for the block to be transformed from inputs into structured data
    # The default toData function provides a pretty comprehensive way of turning data into JSON
    # In this example we take the text data and save it to the data object on the block
    toData: ->
        SirTrevor.log("toData for " + this.blockID);

        dataObj = {}

        return unless @editor

        @editor.codemirror.save()

        content = @editor.codemirror.getValue()
        if content.length > 0
            dataObj.text = content

        # Set
        @setData( dataObj ) unless _.isEmpty( dataObj )

        dataObj

#     var dataObj = [];

#     this.mapForms.children.each( function( childView ) {
#         var model = childView.model;
#         dataObj.push( {
#             lat: model.get( 'lat' ),
#             lng: model.get( 'lng' ),
#             descr: model.get( 'descr' )
#         } );
#     } );

#     this.setData( dataObj );
# },

    loadData: ( data ) ->
        data = _.defaults data,
            text: ''

        @getTextBlock().text( data.text )

    onBlockRender: ->

        @editor = new Editor
            element: @getTextBlock()[ 0 ]
            status: []

        setTimeout =>
            @editor.codemirror.refresh()
        , 1
        # console.log editor

    toMarkdown: ( markdown ) -> markdown
    toHTML: ( html ) -> html