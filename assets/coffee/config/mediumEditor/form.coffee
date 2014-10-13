(($) ->
    $.fn.mediumInsert.registerAddon "forms",

        ###*
        Maps initial function
        @return {void}
        ###
        init: ->
            @$el = $.fn.mediumInsert.insert.$el
            return

        insertButton: (buttonLabels) ->
            label = "<i class=\"fa fa-check-square\"></i> Form"
#            label = "<i class=\"fa fa-check-square\"></i>"  if buttonLabels is "fontawesome" or typeof buttonLabels is "object" and !!(buttonLabels.fontawesome)
#            label = buttonLabels.map  if typeof buttonLabels is "object" and buttonLabels.map
            "<button data-addon=\"forms\" data-action=\"add\" class=\"medium-editor-action mediumInsert-action\">" + label + "</button>"

        ###*
        Add map to placeholder
        @param {element} placeholder Placeholder to add map to
        @return {void}
        ###
        add: (placeholder) ->
            $.fn.mediumInsert.insert.deselect()
            formId = prompt("Formulier ID", "1")
            if formId isnt null
                placeholder.append "<rocket-form rocket-id=\"#{ formId }\"></rocket-form>"

            return

    return
) jQuery