(($) ->
    $.fn.mediumInsert.registerAddon "forms",

        ###*
        Maps initial function
        @return {void}
        ###
        init: ->
            @$el = $.fn.mediumInsert.insert.$el
            @preparePreviousForms()

        insertButton: (buttonLabels) ->
            return '<button data-addon="forms" data-action="add" class="medium-editor-action mediumInsert-action">
                <i class="fa fa-fw fa-check-square"></i>
            </button>'

        ###*
        Add map to placeholder
        @param {element} placeholder Placeholder to add map to
        @return {void}
        ###
        add: ( $placeholder ) ->
            $.fn.mediumInsert.insert.deselect()
            formId = prompt("Formulier ID", "1")
            if formId isnt null
                $placeholder.append "<rocket-form rocket-id=\"#{ formId }\"></rocket-form>"
                @currentPlaceholder = $placeholder;

        preparePreviousForms: () ->
            @$el.find( 'rocket-form' ).each( () ->
                $parent = $( @ ).parent()
                $parent.html( """
                    <div class=\"mediumInsert-placeholder\" draggable=\"true\">
                        #{ $parent.html() }
                    </div>
                """)
            )
) jQuery