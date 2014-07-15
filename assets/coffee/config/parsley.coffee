window.ParsleyConfig =
    errorClass: 'has-error'

    classHandler: (ParsleyField) ->
        ParsleyField.$element.parents('.form-group')

    errorsContainer: (ParsleyField) ->
        ParsleyField.$element.parents('.form-group');

    errorsWrapper: '<span class="help-block">'
    errorTemplate: '<div></div>'