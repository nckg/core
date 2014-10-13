# Mixin Helpers
#--------------
_.mixin
    # Removes trailing slashes on Urls
    stripTrailingSlash : (url) ->
        return if url.slice(-1) is '/' then url.substr(0, url.length - 1) else url

gravatar = ( email, size = 40 ) ->
    '//www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=' + (size * 2)

String::repeat = ( num ) ->
    new Array( num + 1 ).join( @ )

