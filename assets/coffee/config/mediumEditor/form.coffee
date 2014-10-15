(($) ->
    $.fn.mediumInsert.registerAddon "forms",

        defaults:
            setForm: ( $placeholder, that ) ->
                # DO WHATEVER YOU WANT HERE
                formId = prompt("Formulier ID", "1")
                if formId isnt null
                    $placeholder.append "<rocket-form rocket-id=\"#{ formId }\"></rocket-form>"
                    that.currentPlaceholder = $placeholder;

        ###*
        Maps initial function
        @return {void}
        ###
        init: ( options ) ->
            @options = $.extend( @defaults, options )
            @$el = $.fn.mediumInsert.insert.$el
            @preparePreviousForms()

        insertButton: (buttonLabels) ->
            return '<button data-addon="forms" data-action="add" class="medium-editor-action mediumInsert-action">
                <i class="fa fa-fw fa-check-square"></i>
            </button>'

        setForm: ( $placeholder, that ) ->
            that.options.setForm( $placeholder, that )

        ###*
        Add map to placeholder
        @param {element} placeholder Placeholder to add map to
        @return {void}
        ###
        add: ( $placeholder ) ->
            $.fn.mediumInsert.insert.deselect()
            @setForm( $placeholder, @ )

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