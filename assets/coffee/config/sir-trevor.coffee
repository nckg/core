#SirTrevor.BlockControl::render = ->
#    @$el.html "<i class=\"fa fa-3x st-fa-icon #{ _.result(@block_type, 'icon_name') }\"></i>#{ _.result(@block_type, 'title') }"
#    @
#
#SirTrevor.BlockReorder::attributes = ->
#    'html': '<i class="fa fa-arrows-v"></i>'
#    'draggable': 'true'
#
#SirTrevor.BlockDeletion::attributes = ->
#    'html': '<i class="fa fa-trash-o"></i>'
#    'draggable': 'true'
#
#SirTrevor.Blocks.Heading::icon_name = "fa-font"
#SirTrevor.Blocks.Text::icon_name = "fa-pencil"
#SirTrevor.Blocks.Image::icon_name = "fa-picture-o"
#SirTrevor.Blocks.Image::loadData = (data) ->
#
#    # Create our image tag
#    @$editor.html $("<img>",
#        src: data.public_path + "/" + data.name
#    )
#
#    return
#
#SirTrevor.Blocks.Video::icon_name = "fa-film"
#SirTrevor.Blocks.Tweet::icon_name = "fa-twitter"
#SirTrevor.Blocks.List::icon_name = "fa-list-ul"
#SirTrevor.Blocks.Quote::icon_name = "fa-quote-left"