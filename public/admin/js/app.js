this["JST"] = this["JST"] || {};

this["JST"]["account/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header col-sm-12">\n            <div class="row">\n                <div class="col-sm-6">\n                    <div class="form-group">\n                        <label for="first_name">Voornaam</label>\n                        <input type="text" id="first_name" name="first_name" class="form-control input-lg" placeholder="Voornaam" value="' +
((__t = ( first_name )) == null ? '' : __t) +
'" required="required">\n                    </div>\n                </div>\n                <div class="col-sm-6">\n                    <div class="form-group">\n                        <label for="last_name">Achternaam</label>\n                        <input type="text" id="last_name" name="last_name" class="form-control input-lg" placeholder="Achternaam" value="' +
((__t = ( last_name )) == null ? '' : __t) +
'" required="required">\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-sm-6">\n                    <div class="checkbox">\n                        <label>\n                            <input type="checkbox" name="activated" value="1"' +
((__t = ( activated ? 'checked="checked"' : '' )) == null ? '' : __t) +
'> Gebruiker is actief\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <label>E-mail</label>\n                <input type="email" class="form-control" id="email" name="email" value="' +
((__t = ( email )) == null ? '' : __t) +
'">\n            </div>\n            <div class="form-group">\n                <label>Wachtwoord</label>\n                <input type="text" class="form-control" id="password" name="password">\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

}
return __p
};

this["JST"]["account/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="pagesList"></div>';

}
return __p
};

this["JST"]["account/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="pageItem-status">\n    <a href="#" class="pageItem-state js-pageItem-state" data-toggle="tooltip" data-placement="top" title="' +
((__t = ( ( activated ) ? 'Actief' : 'Inactief' )) == null ? '' : __t) +
'">\n        ';
 if ( activated ) { ;
__p += '\n        <i class="text-success fa fa-3x fa-check-circle"></i>\n        ';
 } else { ;
__p += '\n        <i class="text-muted fa fa-3x fa-circle-o"></i>\n        ';
 } ;
__p += '\n    </a>\n</div><!-- /.pageItem-state -->\n\n<div class="pageItem-meta">\n    <div class="media">\n        <div class="pull-left">\n            <img class="media-object img-circle pull-left" src="' +
((__t = ( gravatar( email, 80 ) )) == null ? '' : __t) +
'" width="40" height="40">\n        </div>\n        <div class="media-body">\n            <a href="#accounts/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" class="pageItem-title" data-action="edit">' +
((__t = ( first_name )) == null ? '' : __t) +
' ' +
((__t = ( last_name )) == null ? '' : __t) +
'</a>\n            <div class="pageItem-date">\n                Laatste login: ' +
((__t = ( last_login ? moment( last_login, Config.date_format ).fromNow() : 'Nooit' )) == null ? '' : __t) +
'\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="pageItem-options">\n    <a class="pageItem-option" href="#accounts/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" data-action="edit">\n        <i class="fa fa-fw fa-2x fa-pencil"></i>\n    </a>\n    ';
 if (canDelete()) { ;
__p += '\n    <a href="#" class="pageItem-option text-danger" data-action="destroy">\n        <i class="fa fa-fw fa-2x fa-trash-o"></i>\n    </a>\n    ';
 } ;
__p += '\n</div><!-- /.pageItem-options -->\n';

}
return __p
};

this["JST"]["account/list/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row action-row">\n    <div class="col-md-offset-6 col-md-6 text-right">\n        <a href="#accounts/add" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Toevoegen</a>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-md-12 accounts">\n    </div>\n</div>';

}
return __p
};

this["JST"]["alert/show/templates/flash.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( message )) == null ? '' : __t);

}
return __p
};

this["JST"]["articles/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header col-sm-12">\n            <div class="row">\n                <div class="col-sm-6">\n                    <div class="form-group">\n                        <label for="title">Titel</label>\n                        <input type="text" id="title" name="title" class="form-control input-lg" placeholder="Titel" value="' +
((__t = ( title )) == null ? '' : __t) +
'" required="required">\n                        <small class="help-block">De titel van je pagina. Bijvoorbeeld: <em>Over ons</em></small>\n                    </div>\n                </div>\n                ';
 if (user) { ;
__p += '\n                <div class="col-sm-6">\n                    <div class="media">\n                        <div class="pull-left">\n                            <img class="media-object img-circle" src="' +
((__t = ( gravatar( user.email, 100 ) )) == null ? '' : __t) +
'" width="50" height="50">\n                        </div>\n                        <div class="media-body">\n                            <h4 class="media-heading">Laatste aanpassing</h4>\n                            <p><i class="fa fa-fw fa-user"></i> ' +
((__t = ( user.first_name )) == null ? '' : __t) +
' ' +
((__t = ( user.last_name )) == null ? '' : __t) +
'</p>\n                            <p><i class="fa fa-fw fa-clock-o"></i> ' +
((__t = ( moment( updated_at, Config.date_format ).format("dddd, MMMM Do YYYY, HH:mm") )) == null ? '' : __t) +
'</p>\n                        </div>\n                    </div>\n                </div>\n                ';
 } ;
__p += '\n            </div>\n\n            <div class="row">\n                <div class="col-sm-6">\n                    <div class="form-group">\n                        <label for="publish_at">Publiceer op</label>\n                        <input type="text" id="publish_at" name="publish_at" class="form-control" placeholder="Publiceer op" value="' +
((__t = ( publish_at ? moment( publish_at, Config.date_format ).format( 'YYYY-MM-DD HH:mm' ) : '' )) == null ? '' : __t) +
'">\n                    </div>\n                </div>\n                <div class="col-sm-6">\n                    <div class="form-group">\n                        <label>Leader Image</label>\n                        <input type="hidden" name="image_id" id="image_id">\n                        <input type="hidden" name="image" id="image">\n\n\n                        <div class="dropzone clickable inline" id="dropzone-attachment">\n                            <div class="dz-default dz-message"><span>Drag and Drop image here</span></div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-sm-12">\n                    <button class="btn btn-xs btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n                    ';
 if (user) { ;
__p += '\n                     <a class="btn btn-xs btn-default" href="' +
((__t = ( page.path )) == null ? '' : __t) +
'" target="_blank"><i class="fa fa-eye"></i> Bekijk op website</a>\n                    ';
 } ;
__p += '\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--<div class="row">-->\n        <!--<div class="col-sm-6">-->\n            <!--<div class="form-group">-->\n                <!--<label for="page_id">Bovenliggende pagina</label>-->\n                <!--<select id="page_id" name="page_id" class="form-control" required="required"></select>-->\n            <!--</div>-->\n        <!--</div>-->\n        <!--<div class="col-sm-6">-->\n            <!--<div class="form-group">-->\n                <!--<label for="template_id">Template</label>-->\n                <!--<select id="template_id" name="template_id" class="form-control" required="required"></select>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <label>Samenvatting</label>\n                <textarea class="form-control" name="summary">' +
((__t = ( summary )) == null ? '' : __t) +
'</textarea>\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <div id="page-body" class="rocket-editor">' +
((__t = ( page.body )) == null ? '' : __t) +
'</div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

}
return __p
};

this["JST"]["articles/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-md-12">\n        <div class="well text-center">\n            <i class="fa fa-pencil fa-3x"></i>\n            <h3>Je hebt nog geen artikels geschreven</h3>\n            <p>\n                <a href="#articles/add" class="btn btn-success"><i class="fa fa-plus"></i> Voeg je eerste artikel toe</a>\n            </p>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["articles/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="pagesList"></div>';

}
return __p
};

this["JST"]["articles/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="pageItem-status">\n    <a href="#" class="pageItem-state js-pageItem-state" data-toggle="tooltip" data-placement="top" title="' +
((__t = ( statusText() )) == null ? '' : __t) +
'">\n        ';
 if ( status() == 'scheduled' ) { ;
__p += '\n        <i class="text-warning fa fa-3x fa-clock-o"></i>\n        ';
 } else if ( status() == 'active' ) { ;
__p += '\n        <i class="text-success fa fa-3x fa-check-circle"></i>\n        ';
 } else { ;
__p += '\n        <i class="text-muted fa fa-3x fa-circle-o"></i>\n        ';
 } ;
__p += '\n    </a>\n</div><!-- /.pageItem-state -->\n\n<div class="pageItem-meta">\n    <a href="#articles/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" class="pageItem-title">' +
((__t = ( title )) == null ? '' : __t) +
'</a>\n    <div class="pageItem-date">\n        ' +
((__t = ( moment( updated_at, Config.date_format ).fromNow() )) == null ? '' : __t) +
' by\n        <img src="' +
((__t = ( gravatar( user.email, 40 ) )) == null ? '' : __t) +
'" width="20" height="20" class="avatar pageItem-avatar"> ' +
((__t = ( user.first_name )) == null ? '' : __t) +
' ' +
((__t = ( user.last_name )) == null ? '' : __t) +
'\n    </div>\n</div><!-- /.pageItem-meta -->\n\n<div class="pageItem-options">\n    <a class="pageItem-option" href="#articles/edit/' +
((__t = ( id )) == null ? '' : __t) +
'">\n        <i class="fa fa-fw fa-2x fa-pencil"></i>\n    </a>\n    <a href="#" class="pageItem-option text-danger" data-action="destroy">\n        <i class="fa fa-fw fa-2x fa-trash-o"></i>\n    </a>\n</div><!-- /.pageItem-options -->\n';

}
return __p
};

this["JST"]["articles/list/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row action-row">\n    <div class="col-md-offset-6 col-md-6 text-right">\n        <a href="#articles/add" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Toevoegen</a>\n    </div>\n</div>\n\n<div class="row">\n    <div id="article-list" class="col-md-12">\n    </div>\n</div>';

}
return __p
};

this["JST"]["articles/settings/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header">\n            <div class="col-sm-12">\n                <h3>Artikels: instellingen</h3>\n            </div>\n            <div class="col-sm-12">\n                <button class="btn btn-xs btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-6">\n            <div class="form-group">\n                <label for="template_id">Template</label>\n                <select id="template_id" name="template_id" class="form-control" required="required"></select>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

}
return __p
};

this["JST"]["articles/show/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["form/prompt/templates/prompt.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n            <h4 class="modal-title">Kies een formulier</h4>\n        </div>\n        <div class="modal-body">\n            <select name="form_id" class="form-control" required>\n                <option value="">Kies een formulier</option>\n                ';
 _.each( items, function( item ) { ;
__p += '\n                <option value="' +
((__t = ( item.id )) == null ? '' : __t) +
'">' +
((__t = ( item.title )) == null ? '' : __t) +
'</option>\n                ';
 } ); ;
__p += '\n            </select>\n        </div>\n        <div class="modal-footer">\n            <button type="button" class="btn btn-default" data-dismiss="modal">Annuleer en sluit</button>\n            <button type="submit" class="btn btn-primary">Toevoegen</button>\n        </div>\n    </div><!-- /.modal-content -->\n</form><!-- /.modal-dialog -->';

}
return __p
};

this["JST"]["header/list/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-default" role="navigation">\n    <div class="container">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <!--<a class="navbar-brand" href="#">-->\n                <!--<i class="fa fa-rocket"></i> Rocketship CMS-->\n            <!--</a>-->\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class="collapse navbar-collapse">\n            <ul class="nav navbar-nav" id="navigation">\n                <li><a href="#pages"><i class="fa fa-files-o"></i> Pagina\'s</a></li>\n                <li><a href="#articles"><i class="fa fa-pencil"></i> Artikels</a></li>\n                <li><a href="#accounts"><i class="fa fa-users"></i> Gebruikers</a></li>\n            </ul>\n\n            <ul class="nav navbar-nav navbar-right">\n                <li class="user-dropdown dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                        <img src="" class="avatar img-circle" width="21" height="21">\n                        <b class="caret"></b>\n                    </a>\n                    <ul class="dropdown-menu pull-right">\n                        <li><a href="/admin/logout"><i class="fa fa-fw fa-power-off"></i> Afmelden</a></li>\n                    </ul>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</nav>';

}
return __p
};

this["JST"]["pages/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header">\n            <div class="col-sm-6">\n                <div class="form-group">\n                    <label>Titel</label>\n                    <input type="text" name="title" class="form-control input-lg" placeholder="Titel" value="' +
((__t = ( title )) == null ? '' : __t) +
'" required="required">\n                    <small class="help-block">De titel van je pagina. Bijvoorbeeld: <em>Over ons</em></small>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="form-group">\n                    <label>URL</label>\n                    <div class="input-group input-group-lg">\n                        <span class="input-group-addon prefix">/' +
((__t = ( path.replace( slug, '' ) )) == null ? '' : __t) +
'</span>\n                        <input type="text" name="slug" class="form-control input-lg" placeholder="URL" value="' +
((__t = ( slug )) == null ? '' : __t) +
'">\n                    </div>\n                    <small class="help-block">De link naar je pagina. Bijvoorbeeld: <em>/over-ons/</em></small>\n                </div>\n            </div>\n            <div class="col-sm-12">\n                <button class="btn btn-xs btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n                ';
 if (path) { ;
__p += '\n                <a class="btn btn-xs btn-default" href="' +
((__t = ( path )) == null ? '' : __t) +
'" target="_blank"><i class="fa fa-eye"></i> Bekijk op website</a>\n                ';
 } ;
__p += '\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-6">\n            <div class="form-group">\n                <label for="page_id">Bovenliggende pagina</label>\n                <select id="page_id" name="page_id" class="form-control" required="required"></select>\n            </div>\n        </div>\n        <div class="col-sm-6">\n            <div class="form-group">\n                <label for="template_id">Template</label>\n                <select id="template_id" name="template_id" class="form-control" required="required"></select>\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <div id="page-body" class="rocket-editor">' +
((__t = ( body )) == null ? '' : __t) +
'</div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

}
return __p
};

this["JST"]["pages/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( Lang.posts_none )) == null ? '' : __t);

}
return __p
};

this["JST"]["pages/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="pagesList"></div>';

}
return __p
};

this["JST"]["pages/list/templates/item-disabled.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="pageItem-status">\n    <span class="pageItem-state" data-toggle="tooltip" data-placement="top" title="' +
((__t = ( ( active == '1' ) ? 'Gepubliceerd' : 'Verborgen' )) == null ? '' : __t) +
'">\n        ';
 if ( active == '1' ) { ;
__p += '\n        <i class="text-success fa fa-3x fa-check-circle"></i>\n        ';
 } else { ;
__p += '\n        <i class="text-muted fa fa-3x fa-circle-o"></i>\n        ';
 } ;
__p += '\n    </span>\n</div><!-- /.pageItem-state -->\n\n<div class="pageItem-meta">\n    <span class="pageItem-title">' +
((__t = ( title )) == null ? '' : __t) +
'</span>\n    <div class="pageItem-slug">\n        /' +
((__t = ( path )) == null ? '' : __t) +
'\n    </div>\n</div><!-- /.pageItem-meta -->';

}
return __p
};

this["JST"]["pages/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="pageItem-status">\n    <a href="#" class="pageItem-state js-pageItem-state" data-toggle="tooltip" data-placement="top" title="' +
((__t = ( ( active == '1' ) ? 'Gepubliceerd' : 'Verborgen' )) == null ? '' : __t) +
'">\n        ';
 if ( active == '1' ) { ;
__p += '\n        <i class="text-success fa fa-3x fa-check-circle"></i>\n        ';
 } else { ;
__p += '\n        <i class="text-muted fa fa-3x fa-circle-o"></i>\n        ';
 } ;
__p += '\n    </a>\n</div><!-- /.pageItem-state -->\n\n<div class="pageItem-meta">\n    <a href="#pages/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" class="pageItem-title">' +
((__t = ( title )) == null ? '' : __t) +
'</a>\n    <div class="pageItem-slug">\n        /' +
((__t = ( path )) == null ? '' : __t) +
'\n    </div>\n</div><!-- /.pageItem-meta -->\n\n<div class="pageItem-options">\n    <a class="pageItem-option" href="#pages/edit/' +
((__t = ( id )) == null ? '' : __t) +
'">\n        <i class="fa fa-fw fa-2x fa-pencil"></i>\n    </a>\n    <a href="#" class="pageItem-option text-danger" data-action="destroy">\n        <i class="fa fa-fw fa-2x fa-trash-o"></i>\n    </a>\n</div><!-- /.pageItem-options -->\n';

}
return __p
};

this["JST"]["pages/list/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row action-row">\n    <div class="col-md-offset-6 col-md-6 text-right">\n        <a href="#pages/add" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Toevoegen</a>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-md-12 pages">\n    </div>\n</div>';

}
return __p
};

this["JST"]["pages/show/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["settings/show/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form form-horizontal" data-parsley-validate>\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <label class="col-sm-2 control-label" for="blog_item_template">Blog item template</label>\n                <div class="col-sm-10">\n                    <select id="blog_item_template" name="blog.item.template" class="form-control" required="required"></select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

}
return __p
};

this["JST"]["templates/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header">\n            <div class="col-md-12">\n                <label>Naam</label>\n                <div class="form-group">\n                    <input type="text" name="name" class="form-control input-lg" placeholder="Naam" value="' +
((__t = ( name )) == null ? '' : __t) +
'" required="required">\n                    <small class="help-block">De titel van je template. Bijvoorbeeld: <em>Inhoud</em></small>\n                </div>\n            </div>\n            <div class="col-md-12">\n                <button class="btn btn-xs btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12">\n            <div class="form-group">\n                <textarea class="form-control js-codemirror" name="body">' +
((__t = ( body )) == null ? '' : __t) +
'</textarea>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

}
return __p
};

this["JST"]["templates/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( Lang.posts_none )) == null ? '' : __t);

}
return __p
};

this["JST"]["templates/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="treeview"></div>';

}
return __p
};

this["JST"]["templates/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h5><a href="#templates/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" class="list-group-item-heading">' +
((__t = ( name )) == null ? '' : __t) +
'</a></h5>';

}
return __p
};

this["JST"]["templates/list/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row action-row">\n    <div class="col-md-offset-6 col-md-6 text-right">\n        <a href="#templates/add" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Toevoegen</a>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-md-12">\n        <div id="project-list" class="list-group"></div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/show/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-8">\n    <h3><a href="#project/' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</a> <a href="' +
((__t = ( reference )) == null ? '' : __t) +
'" target="_blank"><i class="fa fa-external-link"></i></a></h3>\n</div>\n<div class="col-md-4">\n    <div class="btn-group pull-right">\n        <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown">\n            <i class="fa fa-cog fa-fw"></i>\n        </button>\n        <ul class="dropdown-menu pull-right">\n            <li><a href="#" data-action="trigger-new-build"><i class="fa fa-rotate-right fa-fw"></i> Start new build</a></li>\n            <li><a href="#project/' +
((__t = ( id )) == null ? '' : __t) +
'/settings"><i class="fa fa-cog fa-fw"></i> Settings</a></li>\n        </ul>\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/show/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/coffee/components/loading/templates/loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="loading-text"><i class="fa fa-fw fa-rocket"></i>\n    <span>Loading</span>\n    <span class="loading-bullet--0">.</span>\n    <span class="loading-bullet--1">.</span>\n    <span class="loading-bullet--2">.</span>\n</h3>';

}
return __p
};

this["JST"]["assets/coffee/views/templates/prompt.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'hello';

}
return __p
};
(function(Backbone) {
  var methods, _sync;
  _sync = Backbone.sync;
  Backbone.sync = function(method, entity, options) {
    var sync;
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      beforeSend: _.bind(methods.beforeSend, entity),
      complete: _.bind(methods.complete, entity)
    });
    sync = _sync(method, entity, options);
    if (!entity._fetch && method === "read") {
      return entity._fetch = sync;
    }
  };
  return methods = {
    beforeSend: function() {
      return this.trigger("sync:start", this);
    },
    complete: function() {
      return this.trigger("sync:stop", this);
    }
  };
})(Backbone);

$.fn.avatar = function(email, size) {
  if (size == null) {
    size = 28;
  }
  return $(this).attr("src", '//www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=' + (size * 2));
};

$.fn.formatDates = function() {
  var $el;
  $el = $(this);
  return $el.each(function(index, param) {
    var format, item, originalDate, time;
    item = $(this);
    format = item.data("format");
    originalDate = item.data("date");
    if (typeof format === "undefined") {
      format = "MMM Do YYYY, hh:mma";
    }
    time = isNaN(originalDate) ? moment(originalDate, "YYYY-MM-DD HH:mm:ss") : moment.unix(originalDate);
    return item.text(time.local().format(format));
  });
};

$.fn.fillJSON = function(json) {
  var $el, key, val, _results;
  $el = $(this);
  _results = [];
  for (key in json) {
    val = json[key];
    if (key !== "active") {
      _results.push($el.find("[name='" + key + "']").val(val));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

$.fn.showAlert = function(title, msg, type) {
  var $el, html;
  $el = $(this);
  html = "<div class='alert alert-block " + type + "'> <button type='button' class='close' data-dismiss='alert'>×</button> <h4 class='alert-heading'>" + title + "</h4> <p>" + msg + "</p> </div>";
  $el.html(html).fadeIn();
  return $(".alert").delay(3000).fadeOut(400);
};

(function(Backbone) {
  return _.extend(Backbone.Marionette.Application.prototype, {
    navigate: function(route, options) {
      if (options == null) {
        options = {};
      }
      return Backbone.history.navigate(route, options);
    },
    getCurrentRoute: function() {
      var frag;
      frag = Backbone.history.fragment;
      if (_.isEmpty(frag)) {
        return null;
      } else {
        return frag;
      }
    },
    startHistory: function() {
      if (Backbone.history) {
        return Backbone.history.start();
      }
    },
    register: function(instance, id) {
      if (this._registry == null) {
        this._registry = {};
      }
      return this._registry[id] = instance;
    },
    unregister: function(instance, id) {
      return delete this._registry[id];
    },
    resetRegistry: function() {
      var controller, key, msg, oldCount, _ref;
      oldCount = this.getRegistrySize();
      _ref = this._registry;
      for (key in _ref) {
        controller = _ref[key];
        controller.region.close();
      }
      msg = "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize());
      if (this.getRegistrySize() > 0) {
        return console.warn(msg, this._registry);
      } else {
        return console.log(msg);
      }
    },
    getRegistrySize: function() {
      return _.size(this._registry);
    }
  });
})(Backbone);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(Backbone, Marionette) {
  return Marionette.Region.Dialog = (function(_super) {
    __extends(Dialog, _super);

    function Dialog() {
      _.extend(this, Backbone.Events);
    }

    Dialog.prototype.onShow = function(view) {
      var options;
      this.setupBindings(view);
      options = this.getDefaultOptions(_.result(view, "dialog"));
      this.$el.on("hidden", (function(_this) {
        return function() {
          return _this.closeDialog();
        };
      })(this));
      return this.$el.modal(options);
    };

    Dialog.prototype.getDefaultOptions = function(options) {
      if (options == null) {
        options = {};
      }
      return _.defaults(options, {
        backdrop: true,
        keyboard: true,
        show: true,
        remote: false,
        shown: null
      });
    };

    Dialog.prototype.setupBindings = function(view) {
      return this.listenTo(view, "dialog:close", function() {
        return this.$el.modal("hide");
      }, this);
    };

    Dialog.prototype.closeDialog = function() {
      console.log(this, arguments);
      this.stopListening();
      return this.destroy();
    };

    return Dialog;

  })(Marionette.Region);
})(Backbone, Marionette);

Backbone.Marionette.Renderer.render = function(template, data) {
  var path;
  path = JST[template + ".html"];
  if (!path) {
    throw "Template " + template + " not found!";
  }
  return path(data);
};

(function($) {
  return $.fn.mediumInsert.registerAddon("forms", {
    defaults: {
      setForm: function($placeholder, that) {
        var formId;
        formId = prompt("Formulier ID", "1");
        if (formId !== null) {
          $placeholder.append("<rocket-form rocket-id=\"" + formId + "\"></rocket-form>");
          return that.currentPlaceholder = $placeholder;
        }
      }
    },

    /**
    Maps initial function
    @return {void}
     */
    init: function(options) {
      this.options = $.extend(this.defaults, options);
      this.$el = $.fn.mediumInsert.insert.$el;
      return this.preparePreviousForms();
    },
    insertButton: function(buttonLabels) {
      return '<button data-addon="forms" data-action="add" class="medium-editor-action mediumInsert-action"> <i class="fa fa-fw fa-check-square"></i> </button>';
    },
    setForm: function($placeholder, that) {
      return that.options.setForm($placeholder, that);
    },

    /**
    Add map to placeholder
    @param {element} placeholder Placeholder to add map to
    @return {void}
     */
    add: function($placeholder) {
      $.fn.mediumInsert.insert.deselect();
      return this.setForm($placeholder, this);
    },
    preparePreviousForms: function() {
      return this.$el.find('rocket-form').each(function() {
        var $parent;
        $parent = $(this).parent();
        return $parent.html("<div class=\"mediumInsert-placeholder\" draggable=\"true\">\n    " + ($parent.html()) + "\n</div>");
      });
    }
  });
})(jQuery);

var gravatar;

_.mixin({
  stripTrailingSlash: function(url) {
    if (url.slice(-1) === '/') {
      return url.substr(0, url.length - 1);
    } else {
      return url;
    }
  }
});

gravatar = function(email, size) {
  if (size == null) {
    size = 40;
  }
  return '//www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=' + (size * 2);
};

String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this);
};

window.ParsleyConfig = {
  errorClass: 'has-error',
  classHandler: function(ParsleyField) {
    return ParsleyField.$element.parents('.form-group');
  },
  errorsContainer: function(ParsleyField) {
    return ParsleyField.$element.parents('.form-group');
  },
  errorsWrapper: '<span class="help-block">',
  errorTemplate: '<div></div>'
};

var Storage;

Storage = (function() {
  function Storage(opts) {
    if (opts == null) {
      opts = {};
    }
    this.key = opts.id || "new";
  }

  Storage.prototype.getKey = function() {
    return "post-" + this.key;
  };

  Storage.prototype.put = function(data, ttl) {
    if (ttl == null) {
      ttl = 30000;
    }
    $.jStorage.set(this.getKey(), data, ttl);
    return $.jStorage.publish(this.getKey(), data);
  };

  Storage.prototype.get = function(default_val) {
    if (default_val == null) {
      default_val = {};
    }
    return $.jStorage.get(this.getKey(), default_val);
  };

  Storage.prototype.destroy = function() {
    return $.jStorage.deleteKey(this.getKey());
  };

  return Storage;

})();

this.Rocket = (function(Backbone, Marionette) {
  var App;
  App = new Backbone.Marionette.Application();
  App.on("before:start", function(options) {
    App.environment = $('meta[name=env]').attr('content');
    App.csrfToken = $('meta[name="token"]').attr('content');
    this.currentUser = App.request('set:current:user', options.user);
    this.settings = options.settings;
    this.allUsers = App.request('set:all:users', options.users);
    return this.apiUrl = _.stripTrailingSlash(options.api_url);
  });
  App.reqres.setHandler('get:current:user', function() {
    return App.currentUser;
  });
  App.reqres.setHandler("get:all:users", function() {
    return App.allUsers;
  });
  App.reqres.setHandler('get:all:users', function() {
    return App.allUsers;
  });
  App.reqres.setHandler('get:url:api', function() {
    return App.apiUrl;
  });
  App.reqres.setHandler('get:url:admin', function() {
    return App.adminUrl;
  });
  App.reqres.setHandler('get:settings', function() {
    return App.settings;
  });
  App.reqres.setHandler('get:setting', function(key) {
    return App.settings[key];
  });
  App.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    flashRegion: '#flash-message',
    dialogRegion: Marionette.Region.Dialog.extend({
      el: "#dialog-region"
    })
  });
  App.addInitializer(function() {
    return App.module('HeaderApp').start();
  });
  App.reqres.setHandler('default:region', function() {
    return App.mainRegion;
  });
  App.reqres.setHandler('flash:region', function() {
    return App.flashRegion;
  });
  App.commands.setHandler('register:instance', function(instance, id) {
    if (App.environment === 'dev') {
      return App.register(instance, id);
    }
  });
  App.commands.setHandler('unregister:instance', function(instance, id) {
    if (App.environment === 'dev') {
      return App.unregister(instance, id);
    }
  });
  App.on('start', function() {
    return this.startHistory();
  });
  return App;
})(Backbone, Marionette);

this.Rocket.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return App.commands.setHandler("when:fetched", function(entities, callback) {
    var xhrs;
    xhrs = _.chain([entities]).flatten().pluck("_fetch").value();
    return $.when.apply($, xhrs).done(function() {
      return callback();
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      return Collection.__super__.constructor.apply(this, arguments);
    }

    Collection.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Collection.prototype.defaultErrorHandler = function(model, error) {
      switch (error.status) {
        case 401:
          return document.location.href = "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Collection.prototype.sync = function(method, model, options) {
      options.headers = _.extend({
        "X-CSRF-Token": App.csrfToken
      }, options.headers);
      return Backbone.sync(method, model, options);
    };

    return Collection;

  })(Backbone.Collection);
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      this.saveError = __bind(this.saveError, this);
      this.saveSuccess = __bind(this.saveSuccess, this);
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind('error', this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Model.prototype.defaultErrorHandler = function(model, error, test) {
      switch (error.status) {
        case 500:
          return App.execute('alert:show:warning', 'Oops, something went wrong');
        case 401:
          return document.location.href = "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Model.prototype.destroy = function(options) {
      if (options == null) {
        options = {};
      }
      this.set({
        _destroy: true
      });
      return Model.__super__.destroy.call(this, options);
    };

    Model.prototype.isDestroyed = function() {
      return this.get("_destroy");
    };

    Model.prototype.save = function(data, options) {
      var isNew;
      if (options == null) {
        options = {};
      }
      isNew = this.isNew();
      _.defaults(options, {
        wait: true,
        success: _.bind(this.saveSuccess, this, isNew, options.collection),
        error: _.bind(this.saveError, this)
      });
      this.unset("_errors");
      return Model.__super__.save.call(this, data, options);
    };

    Model.prototype.saveSuccess = function(isNew, collection) {
      if (isNew) {
        if (collection) {
          collection.add(this);
        }
        if (collection) {
          collection.trigger('model:created', this);
        }
        return this.trigger('created', this);
      } else {
        if (collection == null) {
          collection = this.collection;
        }
        if (collection) {
          collection.trigger('model:updated', this);
        }
        return this.trigger('updated', this);
      }
    };

    Model.prototype.saveError = function(model, xhr, options) {
      if (xhr.status === 400) {
        return this.set({
          _errors: $.parseJSON(xhr.responseText)
        });
      }
    };

    Model.prototype.sync = function(method, model, options) {
      options.headers = _.extend({
        'X-CSRF-Token': App.csrfToken
      }, options.headers);
      return Backbone.sync(method, model, options);
    };

    return Model;

  })(Backbone.Model);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Article = (function(_super) {
    __extends(Article, _super);

    function Article() {
      return Article.__super__.constructor.apply(this, arguments);
    }

    Article.prototype.defaults = {
      id: null,
      summary: '',
      title: '',
      user: null,
      publish_at: null,
      page: {
        body: ''
      },
      image_id: null,
      image: null
    };

    Article.prototype.urlRoot = function() {
      return App.request('get:url:api') + '/article';
    };

    return Article;

  })(App.Entities.Model);
  Entities.ArticleCollection = (function(_super) {
    __extends(ArticleCollection, _super);

    function ArticleCollection() {
      return ArticleCollection.__super__.constructor.apply(this, arguments);
    }

    ArticleCollection.prototype.model = Entities.Article;

    ArticleCollection.prototype.comparator = function(article) {
      return -moment(article.get('created_at')).unix();
    };

    ArticleCollection.prototype.url = function() {
      return App.request('get:url:api') + '/article';
    };

    return ArticleCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function() {
      var article;
      article = new Entities.ArticleCollection;
      article.fetch({
        reset: true
      });
      return article;
    },
    getPage: function(id) {
      var article;
      article = new Entities.Article({
        id: id
      });
      article.fetch();
      return article;
    },
    newPage: function() {
      return new Entities.Article;
    }
  };
  App.reqres.setHandler('article:entities', function() {
    return API.getAll();
  });
  App.reqres.setHandler('article:entity', function(id) {
    return API.getPage(id);
  });
  return App.reqres.setHandler('new:article:entity', function() {
    return API.newPage();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Entities', function(Entities, App) {
  var API;
  Entities.Form = (function(_super) {
    __extends(Form, _super);

    function Form() {
      return Form.__super__.constructor.apply(this, arguments);
    }

    Form.prototype.defaults = {
      id: null,
      title: '',
      email_to: '',
      success: '',
      fields: []
    };

    Form.prototype.urlRoot = function() {
      return App.request('get:url:api') + '/form';
    };

    return Form;

  })(App.Entities.Model);
  Entities.FormCollection = (function(_super) {
    __extends(FormCollection, _super);

    function FormCollection() {
      return FormCollection.__super__.constructor.apply(this, arguments);
    }

    FormCollection.prototype.model = Entities.Form;

    FormCollection.prototype.url = function() {
      return App.request('get:url:api') + '/form';
    };

    return FormCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function() {
      var model;
      model = new Entities.FormCollection;
      model.fetch({
        reset: true
      });
      return model;
    },
    newSetting: function() {
      return new Entities.Form;
    }
  };
  App.reqres.setHandler('form:entities', function() {
    return API.getAll();
  });
  return App.reqres.setHandler('new:form:entity', function() {
    return API.newSetting();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Page = (function(_super) {
    __extends(Page, _super);

    function Page() {
      return Page.__super__.constructor.apply(this, arguments);
    }

    Page.prototype.defaults = {
      id: null,
      body: '<p></p>',
      is_home: false,
      path: '',
      slug: '',
      template_id: 1,
      title: '',
      user: null
    };

    Page.prototype.urlRoot = function() {
      return App.request('get:url:api') + '/page';
    };

    return Page;

  })(App.Entities.Model);
  Entities.PageCollection = (function(_super) {
    __extends(PageCollection, _super);

    function PageCollection() {
      return PageCollection.__super__.constructor.apply(this, arguments);
    }

    PageCollection.prototype.model = Entities.Page;

    PageCollection.prototype.url = function() {
      return App.request('get:url:api') + '/page';
    };

    PageCollection.prototype.getChildren = function(page) {
      return new Entities.PageCollection(this.where({
        page_id: page.get('id')
      }));
    };

    PageCollection.prototype._getBranches = function(parent) {
      var leafs;
      leafs = this.getChildren(parent);
      if (typeof leafs === 'undefined') {
        return;
      }
      leafs.each((function(_this) {
        return function(child) {
          return child.children = _this._getBranches(child);
        };
      })(this));
      return leafs;
    };

    PageCollection.prototype.getTreeview = function(parentId) {
      var collection;
      collection = new Entities.PageCollection(this.where({
        page_id: parentId || null
      }));
      collection.each((function(_this) {
        return function(model) {
          return model.children = _this._getBranches(model);
        };
      })(this));
      return collection;
    };

    PageCollection.prototype._flatten = function(level, input, output) {
      input.each((function(_this) {
        return function(model) {
          model.set('level', level);
          output.push(model);
          if (model.children) {
            return _this._flatten(level + 1, model.children, output);
          }
        };
      })(this));
      return output;
    };

    PageCollection.prototype.getIndentedList = function(level) {
      var treeview;
      if (level == null) {
        level = 0;
      }
      treeview = this.getTreeview();
      this.models = this._flatten(level, treeview, []);
      return this;
    };

    return PageCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function() {
      var page;
      page = new Entities.PageCollection;
      page.fetch({
        reset: true
      });
      return page;
    },
    getPage: function(id) {
      var page;
      page = new Entities.Page({
        id: id
      });
      page.fetch();
      return page;
    },
    newPage: function() {
      return new Entities.Page;
    }
  };
  App.reqres.setHandler('page:entities', function() {
    return API.getAll();
  });
  App.reqres.setHandler('page:entity', function(id) {
    return API.getPage(id);
  });
  return App.reqres.setHandler('new:page:entity', function() {
    return API.newPage();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Entities', function(Entities, App) {
  var API;
  Entities.Setting = (function(_super) {
    __extends(Setting, _super);

    function Setting() {
      return Setting.__super__.constructor.apply(this, arguments);
    }

    Setting.prototype.defaults = {
      key: '',
      value: ''
    };

    Setting.prototype.urlRoot = function() {
      return App.request('get:url:api') + '/setting';
    };

    return Setting;

  })(App.Entities.Model);
  Entities.SettingCollection = (function(_super) {
    __extends(SettingCollection, _super);

    function SettingCollection() {
      return SettingCollection.__super__.constructor.apply(this, arguments);
    }

    SettingCollection.prototype.model = Entities.Setting;

    SettingCollection.prototype.url = function() {
      return App.request('get:url:api') + '/setting';
    };

    return SettingCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function() {
      var model;
      model = new Entities.SettingCollection;
      model.fetch({
        reset: true
      });
      return model;
    },
    newSetting: function() {
      return new Entities.Setting;
    }
  };
  App.reqres.setHandler('setting:entities', function() {
    return API.getAll();
  });
  return App.reqres.setHandler('new:setting:entity', function() {
    return API.newSetting();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Template = (function(_super) {
    __extends(Template, _super);

    function Template() {
      return Template.__super__.constructor.apply(this, arguments);
    }

    Template.prototype.defaults = {
      id: null,
      body: '',
      name: ''
    };

    Template.prototype.urlRoot = function() {
      return App.request('get:url:api') + '/template';
    };

    return Template;

  })(App.Entities.Model);
  Entities.TemplateCollection = (function(_super) {
    __extends(TemplateCollection, _super);

    function TemplateCollection() {
      return TemplateCollection.__super__.constructor.apply(this, arguments);
    }

    TemplateCollection.prototype.model = Entities.Template;

    TemplateCollection.prototype.url = function() {
      return App.request('get:url:api') + '/template';
    };

    return TemplateCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function(options) {
      var template;
      template = new Entities.TemplateCollection;
      template.fetch({
        reset: true,
        data: options
      });
      return template;
    },
    getTemplate: function(id) {
      var template;
      template = new Entities.Template({
        id: id
      });
      template.fetch();
      return template;
    },
    newTemplate: function() {
      return new Entities.Template;
    }
  };
  App.reqres.setHandler('template:entities', function(options) {
    return API.getAll(options);
  });
  App.reqres.setHandler('template:entity', function(id) {
    return API.getTemplate(id);
  });
  return App.reqres.setHandler('new:template:entity', function() {
    return API.newTemplate();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.defaults = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      activated: true,
      last_login: null
    };

    User.prototype.urlRoot = function() {
      return App.request("get:url:api") + "/user";
    };

    return User;

  })(App.Entities.Model);
  Entities.UsersCollection = (function(_super) {
    __extends(UsersCollection, _super);

    function UsersCollection() {
      return UsersCollection.__super__.constructor.apply(this, arguments);
    }

    UsersCollection.prototype.model = Entities.User;

    UsersCollection.prototype.url = function() {
      return App.request("get:url:api") + "/user";
    };

    return UsersCollection;

  })(App.Entities.Collection);
  API = {
    setCurrentUser: function(currentUser) {
      return new Entities.User(currentUser);
    },
    setAllUsers: function(users) {
      return new Entities.UsersCollection(users);
    },
    getUser: function(id) {
      var user;
      user = new Entities.User({
        id: id
      });
      user.fetch();
      return user;
    },
    getUserEntities: function(cb) {
      var users;
      users = new Entities.UsersCollection;
      return users.fetch({
        success: function() {
          return cb(users);
        }
      });
    },
    newUser: function() {
      return new Entities.User;
    }
  };
  App.reqres.setHandler("set:current:user", function(currentUser) {
    return API.setCurrentUser(currentUser);
  });
  App.reqres.setHandler("set:all:users", function(users) {
    return API.setAllUsers(users);
  });
  App.reqres.setHandler("user:entities", function(cb) {
    return API.getUserEntities(cb);
  });
  App.reqres.setHandler("user:entity", function(id) {
    return API.getUser(id);
  });
  return App.reqres.setHandler("new:user:entity", function() {
    return API.newUser();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Controllers", function(Controllers, App, Backbone, Marionette, $, _) {
  return Controllers.Base = (function(_super) {
    __extends(Base, _super);

    function Base(options) {
      if (options == null) {
        options = {};
      }
      this.region = options.region || App.request("default:region");
      this._instance_id = _.uniqueId("controller");
      App.execute("register:instance", this, this._instance_id);
      Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.close = function() {
      App.execute("unregister:instance", this, this._instance_id);
      return Base.__super__.close.apply(this, arguments);
    };

    Base.prototype.show = function(view, options) {
      if (options == null) {
        options = {};
      }
      _.defaults(options, {
        loading: false,
        region: this.region
      });
      this._setMainView(view);
      return this._manageView(view, options);
    };

    Base.prototype._setMainView = function(view) {
      if (this._mainView) {
        return;
      }
      this._mainView = view;
      return this.listenTo(view, "close", this.close);
    };

    Base.prototype._manageView = function(view, options) {
      if (options.loading) {
        return App.execute("show:loading", view, options);
      } else {
        return options.region.show(view);
      }
    };

    return Base;

  })(Marionette.Controller);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.CollectionView = (function(_super) {
    __extends(CollectionView, _super);

    function CollectionView() {
      return CollectionView.__super__.constructor.apply(this, arguments);
    }

    CollectionView.prototype.childViewEventPrefix = "childview";

    return CollectionView;

  })(Marionette.CollectionView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.CompositeView = (function(_super) {
    __extends(CompositeView, _super);

    function CompositeView() {
      return CompositeView.__super__.constructor.apply(this, arguments);
    }

    CompositeView.prototype.childViewEventPrefix = "childview";

    return CompositeView;

  })(Marionette.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.ItemView = (function(_super) {
    __extends(ItemView, _super);

    function ItemView() {
      return ItemView.__super__.constructor.apply(this, arguments);
    }

    ItemView.prototype.fillJSON = function(data) {
      var _ref, _ref1;
      if (data == null) {
        data = {};
      }
      if ((_ref = this.model) != null ? _ref.isNew() : void 0) {
        return this.$('form').fillJSON(data);
      } else {
        return this.$('form').fillJSON(((_ref1 = this.model) != null ? _ref1.toJSON() : void 0) || data);
      }
    };

    ItemView.prototype.changeErrors = function(model, errors, options) {
      if (_.isEmpty(errors)) {
        return this.removeErrors();
      } else {
        return this.addErrors(errors);
      }
    };

    ItemView.prototype.addErrors = function(errors) {
      var error, name, _results;
      if (errors == null) {
        errors = {};
      }
      this.$("#js-errors").show().find("span").html(Lang.post_errors);
      _results = [];
      for (name in errors) {
        error = errors[name];
        _results.push(this.addError(error));
      }
      return _results;
    };

    ItemView.prototype.addError = function(error) {
      var sm;
      sm = $("<li>").text(error);
      return this.$("#js-errors span").append(sm);
    };

    ItemView.prototype.removeErrors = function() {
      return this.$("#js-errors").hide();
    };

    return ItemView;

  })(Marionette.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.LayoutView = (function(_super) {
    __extends(LayoutView, _super);

    function LayoutView() {
      return LayoutView.__super__.constructor.apply(this, arguments);
    }

    return LayoutView;

  })(Marionette.LayoutView);
});

var __slice = [].slice;

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  var _destroy;
  _destroy = Marionette.View.prototype.destroy;
  return _.extend(Marionette.View.prototype, {
    destroy: function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (App.environment === "dev") {
        console.log("removing", this);
      }
      if ((_ref = this.model) != null ? typeof _ref.isDestroyed === "function" ? _ref.isDestroyed() : void 0 : void 0) {
        return this.$el.fadeOut(400, (function(_this) {
          return function() {
            return _destroy.apply(_this, args);
          };
        })(this));
      } else {
        return _destroy.apply(this, args);
      }
    }
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.BaseForm = (function(_super) {
    __extends(BaseForm, _super);

    function BaseForm() {
      return BaseForm.__super__.constructor.apply(this, arguments);
    }

    BaseForm.prototype.baseFormEvents = {
      "click button[type=\"reset\"]": "cancel"
    };

    BaseForm.prototype.triggers = {
      "submit form": "form:submit"
    };

    BaseForm.prototype.init = function() {
      this.events = _.extend({}, this.baseEvents, this.events);
    };

    BaseForm.prototype.initialize = function(options) {
      this.init.call(this);
      this.options = options;
      return this.events = _.extend({}, this.baseFormEvents, this.events);
    };

    BaseForm.prototype.cancel = function() {
      return App.navigate(this.returnUrl, {
        trigger: true
      });
    };

    BaseForm.prototype.formatSaveData = function(data) {
      return data;
    };

    BaseForm.prototype.getSaveData = function() {
      var data;
      data = Backbone.Syphon.serialize(this);
      return this.formatSaveData(data);
    };

    BaseForm.prototype.save = function(e) {
      e.preventDefault();
      if (!this.ui.form.parsley().validate()) {
        return;
      }
      return this.model.save(this.getSaveData());
    };


    /*
    Renders `<option></option>` from a collection
    
    @param  {Backbone.Collection} collection
    @param  {String} element
    @param  {String} key
    @param  {String} value
    @return {void}
     */

    BaseForm.prototype.renderSelect = function(collection, $element, key, value, selected) {
      var output, _this;
      output = [];
      _this = this;
      if (typeof collection === "undefined") {
        return;
      }
      collection.each(function(model) {
        var optionValue, selectedClass;
        optionValue = void 0;
        if (_.isFunction(value)) {
          optionValue = value(model);
        } else {
          optionValue = model.get(value);
        }
        selectedClass = selected === model.get(key) ? " selected=\"selected\"" : "";
        return output.push("<option value=\"" + model.get(key) + "\"" + selectedClass + ">" + optionValue + "</option>");
      });
      return $element.html(output);
    };

    return BaseForm;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.BasePrompt = (function(_super) {
    __extends(BasePrompt, _super);

    function BasePrompt() {
      return BasePrompt.__super__.constructor.apply(this, arguments);
    }

    BasePrompt.prototype.template = 'assets/coffee/views/templates/prompt';

    BasePrompt.prototype.tagName = 'form';

    BasePrompt.prototype.triggers = {
      "submit form": "form:submit"
    };

    BasePrompt.prototype.init = function() {
      this.events = _.extend({}, this.baseEvents, this.events);
    };

    BasePrompt.prototype.initialize = function(options) {
      this.init.call(this);
      this.options = options;
      return this.events = _.extend({}, this.baseFormEvents, this.events);
    };

    BasePrompt.prototype.formatSaveData = function(data) {
      return data;
    };

    BasePrompt.prototype.getSaveData = function() {
      var data;
      data = Backbone.Syphon.serialize(this);
      return this.formatSaveData(data);
    };

    BasePrompt.prototype.save = function(e) {
      e.preventDefault();
      if (!this.ui.form.parsley().validate()) {
        return;
      }
      return this.model.save(this.getSaveData());
    };

    return BasePrompt;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Views", function(Views, App) {
  return Views.Treeview = (function(_super) {
    __extends(Treeview, _super);

    function Treeview() {
      return Treeview.__super__.constructor.apply(this, arguments);
    }

    Treeview.prototype.tagName = 'li';

    Treeview.prototype.initialize = function() {
      return this.collection = this.model.children;
    };

    Treeview.prototype.attachHtml = function(collectionView, itemView) {
      return collectionView.$('ul:first').append(itemView.el);
    };

    Treeview.prototype.onRender = function() {
      if (_.isUndefined(this.collection)) {
        return this.$('ul:first').remove();
      }
    };

    return Treeview;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Routers", function(Routers, App, Backbone, Marionette, $, _) {
  return Routers.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.onRoute = function(name, path, args) {
      return App.vent.trigger('app:routed', {
        name: name,
        path: path,
        args: args
      });
    };

    return Router;

  })(Marionette.AppRouter);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Views', function(Views, App, Backbone, Marionette, $, _) {
  return Views.UserView = (function(_super) {
    __extends(UserView, _super);

    function UserView() {
      return UserView.__super__.constructor.apply(this, arguments);
    }

    UserView.prototype.template = 'account/_base/templates/form';

    UserView.prototype.ui = {
      form: 'form',
      submit: '[data-action="submit"],[type="submit"]'
    };

    UserView.prototype.events = {
      'click @ui.submit': 'save'
    };

    UserView.prototype.save = function(e) {
      e.preventDefault();
      if (!this.ui.form.parsley().validate()) {
        return;
      }
      return this.model.save(this.getSaveData(), {
        collection: this.collection
      });
    };

    return UserView;

  })(App.Views.BaseForm);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp", function(AccountApp, App, Backbone, Marionette, $, _) {
  var API;
  AccountApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "accounts": "list",
      "accounts/add": "new",
      "accounts/edit/:id": "edit"
    };

    return Router;

  })(App.Routers.Router);
  API = {
    list: function() {
      return new AccountApp.List.Controller;
    },
    "new": function() {
      return new AccountApp.New.Controller({
        region: App.mainRegion
      });
    },
    edit: function(id, account) {
      return new AccountApp.Edit.Controller({
        region: App.mainRegion,
        id: id,
        account: account
      });
    }
  };
  App.vent.on("account:edit:clicked", function(account) {
    App.navigate("/account/edit/" + account.id);
    return API.edit(account.id, account);
  });
  App.vent.on("account:created account:updated", function(item) {
    App.execute('alert:show:success', "Account \"" + (item.get('first_name')) + "\" was successfully saved!");
    App.navigate("accounts");
    return API.list();
  });
  return App.addInitializer(function() {
    return new AccountApp.Router({
      controller: API
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var account, id;
      account = options.account, id = options.id;
      account || (account = App.request("user:entity", id));
      this.listenTo(account, "updated", function() {
        return App.vent.trigger("account:updated", account);
      });
      return App.execute("when:fetched", account, (function(_this) {
        return function() {
          var view;
          view = _this.getEditView(account);
          return _this.show(view);
        };
      })(this));
    };

    Controller.prototype.getEditView = function(account) {
      return new Edit.User({
        model: account
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    return User;

  })(App.Views.UserView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var users;
      users = App.request("get:all:users");
      this.layout = this.getLayout();
      this.listenTo(this.layout, 'show', (function(_this) {
        return function() {
          return _this.show(_this.getListView(users), {
            region: _this.layout.listRegion
          });
        };
      })(this));
      return this.show(this.layout, {
        loading: {
          entities: users
        }
      });
    };

    Controller.prototype.getLayout = function() {
      return new List.Layout();
    };

    Controller.prototype.getListView = function(users) {
      var view;
      view = new List.Accounts({
        collection: users
      });
      this.listenTo(view, "childview:account:delete:clicked", function(child, args) {
        var model;
        model = args.model;
        if (confirm("Gebruiker \"" + (model.get('first_name')) + " " + (model.get('last_name')) + "\" verwijderen?")) {
          return model.destroy();
        } else {
          return false;
        }
      });
      this.listenTo(view, 'childview:change:state', function(view, args) {
        var model;
        model = args.model;
        model.set('actived', model.get('actived') === true ? true : false);
        return model.save();
      });
      return view;
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.Layout = (function(_super) {
    __extends(Layout, _super);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    Layout.prototype.template = 'account/list/templates/layout';

    Layout.prototype.regions = {
      listRegion: '.accounts'
    };

    return Layout;

  })(App.Views.LayoutView);
  List.AccountItem = (function(_super) {
    __extends(AccountItem, _super);

    function AccountItem() {
      return AccountItem.__super__.constructor.apply(this, arguments);
    }

    AccountItem.prototype.template = "account/list/templates/item";

    AccountItem.prototype.className = "pageItem accountItem";

    AccountItem.prototype.ui = {
      destroy: '[data-action="destroy"]',
      editButton: '[data-action="edit"]'
    };

    AccountItem.prototype.triggers = {
      "click @ui.destroy": "account:delete:clicked"
    };

    AccountItem.prototype.events = {
      "click @ui.editButton": "edit"
    };

    AccountItem.prototype.templateHelpers = function() {
      return {
        canDelete: function() {
          var me;
          me = App.request("get:current:user");
          if (me.id !== this.id) {
            return true;
          } else {
            return false;
          }
        }
      };
    };

    AccountItem.prototype.edit = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:edit:clicked", this.model);
    };

    return AccountItem;

  })(App.Views.ItemView);
  return List.Accounts = (function(_super) {
    __extends(Accounts, _super);

    function Accounts() {
      return Accounts.__super__.constructor.apply(this, arguments);
    }

    Accounts.prototype.template = "account/list/templates/grid";

    Accounts.prototype.childView = List.AccountItem;

    Accounts.prototype.childViewContainer = ".pagesList";

    return Accounts;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var user, view;
      user = App.request("new:user:entity");
      this.listenTo(user, "created", function() {
        return App.vent.trigger("account:created", user);
      });
      view = this.getNewView(user);
      return this.show(view);
    };

    Controller.prototype.getNewView = function(user) {
      return new New.User({
        model: user,
        collection: App.request("get:all:users")
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("AccountApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.User = (function(_super) {
    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    return User;

  })(App.Views.UserView);
});

this.Rocket.module('AlertApp', function(Alert, App, Backbone, Marionette, $, _) {

  /**
   * App API
   * @type {Object}
   */
  var API;
  API = {
    show: function(message, type) {
      return new Alert.Show.Controller({
        message: message,
        className: "alert-" + type
      });
    }
  };
  App.commands.setHandler('alert:show:success', function(message) {
    return API.show(message, 'success');
  });
  App.commands.setHandler('alert:show:info', function(message) {
    return API.show(message, 'info');
  });
  return App.commands.setHandler('alert:show:warning', function(message) {
    return API.show(message, 'warning');
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('AlertApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var className, message, view;
      message = options.message, className = options.className;
      view = this.alertView(message, className);
      return this.show(view, {
        region: App.request('flash:region')
      });
    };

    Controller.prototype.alertView = function(message, className) {
      return new Show.View({
        model: new Backbone.Model({
          message: message
        }),
        extraClassName: className
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('AlertApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = 'alert/show/templates/flash';


    /**
     * Returns attributes hash
     *
     * @return {Object}
     */

    View.prototype.attributes = function() {
      var attrs;
      attrs = {
        "class": 'alert alert-top animated fadeIn'
      };
      if (this.options.extraClassName) {
        attrs["class"] += ' ' + this.options.extraClassName;
      }
      return attrs;
    };

    View.prototype.onShow = function() {
      return this.timeOut = setTimeout((function(_this) {
        return function() {
          return _this.$el.addClass("fadeOut");
        };
      })(this), 2000);
    };

    View.prototype.onBeforeClose = function() {
      return clearTimeout(this.timeOut);
    };

    return View;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Views', function(Views, App, Backbone, Marionette, $, _) {
  return Views.ArticleView = (function(_super) {
    __extends(ArticleView, _super);

    function ArticleView() {
      return ArticleView.__super__.constructor.apply(this, arguments);
    }

    ArticleView.prototype.template = 'articles/_base/templates/form';

    ArticleView.prototype.returnUrl = 'articles';

    ArticleView.prototype.ui = {
      form: 'form',
      submit: '[data-action="submit"],[type="submit"]',
      editor: '.rocket-editor',
      publishAt: '[name="publish_at"]'
    };

    ArticleView.prototype.events = {
      'click @ui.submit': 'save'
    };

    ArticleView.prototype.onShow = function() {
      var that;
      this.publishAt = this.ui.publishAt.datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        icons: {
          time: "fa fa-clock-o",
          date: "fa fa-calendar",
          up: "fa fa-arrow-up",
          down: "fa fa-arrow-down"
        }
      });
      this.editor = new MediumEditor(this.ui.editor, {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote', 'unorderedlist'],
        buttonLabels: 'fontawesome'
      });
      that = this;
      this.ui.editor.mediumInsert({
        editor: this.editor,
        addons: {
          forms: {
            setForm: function($placeholder, that) {
              var controller;
              controller = App.request('form:prompt');
              return controller.view.on('prompt:submit', function(data) {
                $placeholder.append("<rocket-form rocket-id=\"" + data.form_id + "\"></rocket-form>");
                return this.currentPlaceholder = $placeholder;
              });
            }
          },
          embeds: {
            oembedProxy: 'http://medium.iframe.ly/api/oembed?iframe=1'
          }
        }
      });
      return App.vent.trigger("setup:dropzone", "#dropzone-attachment", this.model.get("image"));
    };

    ArticleView.prototype.onBeforeDestroy = function() {
      this.editor.deactivate();
      return this.publishAt.data("DateTimePicker").destroy();
    };

    ArticleView.prototype.formatSaveData = function(data) {
      var body;
      body = this.editor.serialize();
      data['body'] = body['page-body']['value'];
      return data;
    };

    return ArticleView;

  })(App.Views.BaseForm);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("ArticlesApp", function(ArticlesApp, App, Backbone, Marionette, $, _) {

  /**
   * The page router
   */
  var API;
  ArticlesApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      'articles': 'list',
      'articles/add': 'add',
      'articles/edit/:id': 'edit'
    };

    return Router;

  })(App.Routers.Router);
  API = {
    list: function() {
      return new ArticlesApp.List.Controller();
    },
    add: function() {
      return new ArticlesApp.New.Controller();
    },
    edit: function(id) {
      return new ArticlesApp.Show.Controller({
        id: id
      });
    }
  };
  App.vent.on('article:created article:updated', function(item) {
    App.execute('alert:show:success', "Article \"" + (item.get('title')) + "\" was successfully saved!");
    App.navigate("articles");
    return API.list();
  });
  return App.addInitializer(function() {
    return new ArticlesApp.Router({
      controller: API
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.List', function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var articles;
      articles = App.request('article:entities');
      this.layout = this.getLayout();
      this.listenTo(this.layout, 'show', (function(_this) {
        return function() {
          return _this.show(_this.getListView(articles), {
            region: _this.layout.listRegion
          });
        };
      })(this));
      return this.show(this.layout, {
        loading: {
          entities: articles
        }
      });
    };

    Controller.prototype.getLayout = function() {
      return new List.Layout();
    };

    Controller.prototype.getListView = function(collection) {
      var list;
      list = new List.Pages({
        collection: collection
      });
      list.on('childview:change:state', function(view, args) {
        var page;
        page = App.request('new:page:entity');
        page.set(args.model.get('page'));
        page.set('active', args.model.get('page').active === "0" ? "1" : "0");
        args.model.get('page').active = page.get('active');
        view.render();
        return page.save();
      });
      this.listenTo(list, "childview:article:delete:clicked", function(child, args) {
        var model;
        model = args.model;
        if (confirm("Artikel \"" + (model.get('title')) + "\" verwijderen?")) {
          return model.destroy();
        } else {
          return false;
        }
      });
      return list;
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.Layout = (function(_super) {
    __extends(Layout, _super);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    Layout.prototype.template = 'articles/list/templates/layout';

    Layout.prototype.regions = {
      listRegion: '#article-list'
    };

    return Layout;

  })(App.Views.LayoutView);
  List.PageItem = (function(_super) {
    __extends(PageItem, _super);

    function PageItem() {
      return PageItem.__super__.constructor.apply(this, arguments);
    }

    PageItem.prototype.template = 'articles/list/templates/item';

    PageItem.prototype.attributes = function() {
      if (String(this.model.get("page").active) === "1" && this.model.get("publish_at") > moment().format('YYYY-MM-DD HH:mm:ss')) {
        return {
          "class": "pageItem pageItem--scheduled"
        };
      } else {
        return {
          "class": "pageItem pageItem--published"
        };
      }
    };

    PageItem.prototype.ui = {
      clickableState: '.js-pageItem-state',
      state: '.pageItem-state',
      destroy: '[data-action="destroy"]'
    };

    PageItem.prototype.triggers = {
      'click @ui.clickableState': 'change:state',
      "click @ui.destroy": "article:delete:clicked"
    };

    PageItem.prototype.modelEvents = {
      "change": "render"
    };

    PageItem.prototype.templateHelpers = function() {
      return {
        status: function() {
          if (String(this.page.active) === "1" && this.publish_at > moment().format('YYYY-MM-DD HH:mm:ss')) {
            return 'scheduled';
          } else if (String(this.page.active) === "1") {
            return 'active';
          }
          return 'inactive';
        },
        statusText: function() {
          if (String(this.page.active) === "1" && this.publish_at > moment().format('YYYY-MM-DD HH:mm:ss')) {
            return 'Actief vanaf: ' + moment(this.publish_at).format('DD-MM-YYYY HH:mm');
          } else if (String(this.page.active) === "1") {
            return 'Actief';
          }
          return 'Inactief';
        }
      };
    };

    PageItem.prototype.onDomRefresh = function() {
      return this.ui.state.tooltip();
    };

    return PageItem;

  })(App.Views.ItemView);
  List.Empty = (function(_super) {
    __extends(Empty, _super);

    function Empty() {
      return Empty.__super__.constructor.apply(this, arguments);
    }

    Empty.prototype.template = 'articles/list/templates/empty';

    return Empty;

  })(App.Views.ItemView);
  return List.Pages = (function(_super) {
    __extends(Pages, _super);

    function Pages() {
      return Pages.__super__.constructor.apply(this, arguments);
    }

    Pages.prototype.template = 'articles/list/templates/grid';

    Pages.prototype.childView = List.PageItem;

    Pages.prototype.emptyView = List.Empty;

    Pages.prototype.childViewContainer = '.pagesList';

    Pages.prototype.attributes = {
      id: 'articles-list'
    };

    Pages.prototype.ui = {
      'items': '.pageItem'
    };

    return Pages;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.New', function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var article, view;
      article = App.request('new:article:entity');
      this.listenTo(article, 'created', (function(_this) {
        return function() {
          return App.vent.trigger('article:created', article);
        };
      })(this));
      view = this.getView(article);
      return this.show(view, {
        loading: {
          entities: article
        }
      });
    };

    Controller.prototype.getView = function(article) {
      return new New.View({
        model: article
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.New', function(New, App, Backbone, Marionette, $, _) {
  return New.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    return View;

  })(App.Views.ArticleView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.Settings', function(Settings, App, Backbone, Marionette, $, _) {
  return Settings.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var templates;
      templates = App.request('template:entities');
      this.view = this.getSettingsView(templates);
      return this.show(this.view, {
        loading: {
          entities: templates
        }
      });
    };

    Controller.prototype.getSettingsView = function(templates) {
      return new Settings.Form({
        templates: templates
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.Settings', function(Settings, App, Backbone, Marionette, $, _) {
  return Settings.Form = (function(_super) {
    __extends(Form, _super);

    function Form() {
      return Form.__super__.constructor.apply(this, arguments);
    }

    Form.prototype.template = "articles/settings/templates/form";

    return Form;

  })(App.Views.BaseForm);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var id, model;
      model = options.model, id = options.id;
      model || (model = App.request('article:entity', id));
      this.listenTo(model, 'updated', (function(_this) {
        return function() {
          return App.vent.trigger('article:updated', model);
        };
      })(this));
      this.view = this.getView({
        model: model
      });
      return this.show(this.view, {
        loading: {
          entities: model
        }
      });
    };

    Controller.prototype.getView = function(options) {
      return new Show.View(options);
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('ArticlesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    return View;

  })(App.Views.ArticleView);
});

this.Rocket.module("DropzoneApp", function(DropzoneApp, App, Backbone, Marionette, $, _) {
  var API;
  Dropzone.autoDiscover = false;
  API = {
    setupDropzone: function(el, defaultImg) {
      var mockFile, myDropzone;
      if (defaultImg == null) {
        defaultImg = null;
      }
      myDropzone = new Dropzone(el, {
        url: App.request("get:url:api") + "/image",
        method: "POST",
        addRemoveLinks: true,
        maxFiles: 1,
        acceptedFiles: "image/*"
      });
      myDropzone.on("maxfilesexceeded", function(file) {
        return this.removeFile(file);
      });
      myDropzone.on("removedfile", function(file) {
        $("#image_id").val("");
        $("#image").val("");
        return myDropzone.options.maxFiles = 1;
      });
      myDropzone.on("error", function(file, message, xhr) {
        var msg;
        if (xhr) {
          msg = $.parseJSON(message);
          return App.execute('alert:show:warning', "Oops! \"" + msg.error.message + "\"");
        } else {
          return App.execute('alert:show:warning', "Oops! \"" + message + "\"");
        }
      });
      myDropzone.on("success", function(file, contents) {
        $("#image_id").val(contents.id);
        return $("#image").val(file.name);
      });
      if (defaultImg) {
        mockFile = {
          name: "Filename",
          size: 12345
        };
        myDropzone.emit("addedfile", mockFile);
        myDropzone.emit("thumbnail", mockFile, "" + defaultImg.public_path + "/" + defaultImg.name);
        myDropzone.options.maxFiles = 0;
        return $("#image_id").val(defaultImg.id);
      }
    }
  };
  return App.vent.on("setup:dropzone", function(el, defaultImg) {
    return API.setupDropzone(el, defaultImg);
  });
});

this.Rocket.module('FormsApp', function(FormsApp, App, Backbone, Marionette, $, _) {
  var API;
  API = {
    prompt: function() {
      return new FormsApp.Prompt.Controller;
    }
  };
  return App.reqres.setHandler('form:prompt', function() {
    return API.prompt();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('FormsApp.Prompt', function(Prompt, App, Backbone, Marionette, $, _) {
  return Prompt.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var collection;
      collection = App.request('form:entities');
      this.view = this.getView(collection);
      return this.show(this.view, {
        region: App.dialogRegion,
        loading: {
          entities: collection
        }
      });
    };

    Controller.prototype.getView = function(collection) {
      return new Prompt.View({
        collection: collection
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('FormsApp.Prompt', function(Prompt, App, Backbone, Marionette, $, _) {
  return Prompt.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = 'form/prompt/templates/prompt';

    View.prototype.ui = {
      form: 'form',
      submit: '[type="submit"]'
    };

    View.prototype.events = {
      'click @ui.submit': 'save'
    };

    View.prototype.save = function(e) {
      e.preventDefault();
      if (!this.ui.form.parsley().validate()) {
        return;
      }
      this.trigger('prompt:submit', this.getSaveData());
      return this.trigger('dialog:close');
    };

    return View;

  })(App.Views.BaseForm);
});

this.Rocket.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
  var API;
  this.startWithParent = false;
  API = {
    list: function() {
      return new HeaderApp.List.Controller({
        region: App.headerRegion
      });
    }
  };
  return HeaderApp.on("start", function() {
    return API.list();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var listView;
      listView = this.getListView();
      return this.show(listView);
    };

    Controller.prototype.getListView = function() {
      return new List.Header;
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Header = (function(_super) {
    __extends(Header, _super);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.ui = {
      listItems: '#navigation > li',
      navItem: '#navigation > li > a'
    };

    Header.prototype.template = "header/list/templates/header";

    Header.prototype.tagName = "header";

    Header.prototype.initialize = function() {
      return App.vent.on('app:routed', (function(_this) {
        return function(args) {
          var active;
          active = args.path.split('/');
          _this.ui.listItems.removeClass('active');
          return _this.ui.navItem.filter("[href^=\"#" + active[0] + "\"]").parent('li').addClass('active');
        };
      })(this));
    };

    Header.prototype.events = {
      "click .write": "newPost",
      "click .accounts": "accounts"
    };

    Header.prototype.onRender = function() {
      return this.generateAvatar(App.request("get:current:user"));
    };

    Header.prototype.templateHelpers = {
      logoutUrl: function() {
        return "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Header.prototype.generateAvatar = function(user) {
      var $avEl;
      $avEl = this.$(".avatar");
      return $avEl.avatar(user.get("email"), $avEl.attr("width"));
    };

    Header.prototype.accounts = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:clicked");
    };

    Header.prototype.newPost = function(e) {
      e.preventDefault();
      return App.vent.trigger("page:new:clicked");
    };

    return Header;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Views', function(Views, App, Backbone, Marionette, $, _) {
  return Views.PageView = (function(_super) {
    __extends(PageView, _super);

    function PageView() {
      return PageView.__super__.constructor.apply(this, arguments);
    }

    PageView.prototype.template = 'pages/_base/templates/form';

    PageView.prototype.ui = {
      form: 'form',
      pages: '#page_id',
      template: '#template_id',
      submit: '[data-action="submit"],[type="submit"]',
      editor: '.rocket-editor',
      inputSlug: '[name="slug"]',
      inputTitle: '[name="title"]',
      prefix: '.input-group-addon.prefix'
    };

    PageView.prototype.events = {
      'click @ui.submit': 'save',
      'keyup @ui.inputTitle': 'showSlug',
      'blur @ui.inputTitle': 'showSlug',
      'keyup @ui.inputSlug': 'showSlug',
      'change @ui.pages': 'changePrefix'
    };

    PageView.prototype.showSlug = function() {
      return this.ui.inputSlug.val(getSlug(this.ui.inputTitle.val()));
    };

    PageView.prototype.changePrefix = function(event) {
      var page, path;
      page = this.options.pageCollection.findWhere({
        id: parseInt(this.$(event.currentTarget).val())
      });
      if (page) {
        path = ("/" + (page.get('path')) + "/").replace("//", "/");
        return this.ui.prefix.html(path);
      }
    };

    PageView.prototype.onRender = function() {
      var that;
      this.renderSelect(this.options.templateCollection, this.ui.template, 'id', 'name', this.model.get('template_id'));
      this.renderSelect(this.options.pageCollection.getIndentedList(), this.ui.pages, 'id', function(model) {
        var prefix;
        prefix = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(model.get('level'));
        return "" + prefix + (model.get('title'));
      }, this.model.get('page_id'));
      this.editor = new MediumEditor(this.ui.editor, {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote', 'unorderedlist'],
        buttonLabels: 'fontawesome'
      });
      that = this;
      return this.ui.editor.mediumInsert({
        editor: this.editor,
        addons: {
          forms: {
            setForm: function($placeholder, that) {
              var controller;
              controller = App.request('form:prompt');
              return controller.view.on('prompt:submit', function(data) {
                $placeholder.append("<rocket-form rocket-id=\"" + data.form_id + "\"></rocket-form>");
                return this.currentPlaceholder = $placeholder;
              });
            }
          },
          embeds: {
            oembedProxy: 'http://medium.iframe.ly/api/oembed?iframe=1'
          }
        }
      });
    };

    PageView.prototype.onBeforeDestroy = function() {
      return this.editor.deactivate();
    };

    PageView.prototype.formatSaveData = function(data) {
      var body;
      body = this.editor.serialize();
      data.body = body['page-body']['value'];
      return data;
    };

    return PageView;

  })(App.Views.BaseForm);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var pages;
      pages = App.request('page:entities');
      this.layout = this.getLayout();
      this.listenTo(this.layout, 'show', (function(_this) {
        return function() {
          return _this.show(_this.getListView(pages), {
            region: _this.layout.listRegion
          });
        };
      })(this));
      return this.show(this.layout, {
        loading: {
          entities: pages
        }
      });
    };

    Controller.prototype.getLayout = function() {
      return new List.Layout();
    };

    Controller.prototype.getListView = function(pages) {
      var list;
      list = new List.Pages({
        collection: pages
      });
      list.on('childview:change:state', function(view, args) {
        var model;
        model = args.model;
        model.set('active', model.get('active') === "0" ? "1" : "0");
        return model.save();
      });
      this.listenTo(list, "childview:page:delete:clicked", function(child, args) {
        var model;
        model = args.model;
        if (confirm("Pagina \"" + (model.get('title')) + "\" verwijderen?")) {
          return model.destroy();
        } else {
          return false;
        }
      });
      return list;
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.Layout = (function(_super) {
    __extends(Layout, _super);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    Layout.prototype.template = 'pages/list/templates/layout';

    Layout.prototype.regions = {
      listRegion: '.pages'
    };

    return Layout;

  })(App.Views.LayoutView);
  List.PageItem = (function(_super) {
    __extends(PageItem, _super);

    function PageItem() {
      return PageItem.__super__.constructor.apply(this, arguments);
    }

    PageItem.prototype.getTemplate = function() {
      if (this.model.get("editable") === "1") {
        return 'pages/list/templates/item';
      } else {
        return 'pages/list/templates/item-disabled';
      }
    };


    /**
     * Returns attributes hash
     *
     * @return {Object}
     */

    PageItem.prototype.attributes = function() {
      var attrs;
      attrs = {
        "class": 'pageItem'
      };
      if (this.model.get("editable") === "0") {
        attrs["class"] = "pageItem pageItem-disabled";
      }
      return attrs;
    };

    PageItem.prototype.ui = {
      clickableState: '.js-pageItem-state',
      state: '.pageItem-state',
      destroy: '[data-action="destroy"]'
    };

    PageItem.prototype.triggers = {
      'click @ui.clickableState': 'change:state',
      "click @ui.destroy": "page:delete:clicked"
    };

    PageItem.prototype.modelEvents = {
      "change": "render"
    };

    PageItem.prototype.onDomRefresh = function() {
      return this.ui.state.tooltip();
    };

    return PageItem;

  })(App.Views.ItemView);
  List.Empty = (function(_super) {
    __extends(Empty, _super);

    function Empty() {
      return Empty.__super__.constructor.apply(this, arguments);
    }

    Empty.prototype.template = 'pages/list/templates/empty';

    return Empty;

  })(App.Views.ItemView);
  return List.Pages = (function(_super) {
    __extends(Pages, _super);

    function Pages() {
      return Pages.__super__.constructor.apply(this, arguments);
    }

    Pages.prototype.template = 'pages/list/templates/grid';

    Pages.prototype.childView = List.PageItem;

    Pages.prototype.emptyView = List.Empty;

    Pages.prototype.childViewContainer = '.pagesList';

    Pages.prototype.attributes = {
      id: 'pages-list'
    };

    Pages.prototype.ui = {
      'items': '.pageItem'
    };

    return Pages;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp.New', function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var page, pages, templates, view;
      page = App.request('new:page:entity');
      pages = App.request('page:entities');
      templates = App.request('template:entities');
      this.listenTo(page, 'created', (function(_this) {
        return function() {
          return App.vent.trigger('page:created', page);
        };
      })(this));
      view = this.getView(page, pages, templates);
      return this.show(view, {
        loading: {
          entities: [page, pages, templates]
        }
      });
    };

    Controller.prototype.getView = function(page, pages, templates) {
      return new New.View({
        model: page,
        pageCollection: pages,
        templateCollection: templates
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp.New', function(New, App, Backbone, Marionette, $, _) {
  return New.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    return View;

  })(App.Views.PageView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp', function(PagesApp, App, Backbone, Marionette, $, _) {

  /**
   * The page router
   */
  var API;
  PagesApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      '': 'list',
      'pages': 'list',
      'pages/add': 'add',
      'pages/edit/:id': 'edit',
      'pages/delete/:id': 'delete'
    };

    return Router;

  })(App.Routers.Router);
  API = {
    list: function() {
      return new PagesApp.List.Controller;
    },
    add: function() {
      return new PagesApp.New.Controller;
    },
    edit: function(id, item, activeTab) {
      return new PagesApp.Show.Controller({
        id: id,
        page: item,
        activeTab: activeTab
      });
    },
    "delete": function(id, item) {}
  };
  App.vent.on('page:created page:updated', function(item) {
    App.execute('alert:show:success', "Page \"" + (item.get('title')) + "\" was successfully saved!");
    App.navigate("pages");
    return API.list();
  });
  App.addInitializer(function() {
    return new PagesApp.Router({
      controller: API
    });
  });
  return App.commands.setHandler('list:pages', function() {
    return API.list();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var id, page, pages, templates;
      page = options.page, id = options.id;
      page || (page = App.request('page:entity', id));
      pages = App.request('page:entities');
      templates = App.request('template:entities');
      this.listenTo(page, "updated", function() {
        return App.vent.trigger('page:updated', page);
      });
      this.view = this.getView(page, pages, templates);
      return this.show(this.view, {
        loading: {
          entities: [page, pages, templates]
        }
      });
    };

    Controller.prototype.getView = function(page, pages, templates) {
      return new Show.View({
        model: page,
        pageCollection: pages,
        templateCollection: templates
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    return View;

  })(App.Views.PageView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('SettingsApp', function(SettingsApp, App, Backbone, Marionette, $, _) {

  /**
   * The router
   */
  var API;
  SettingsApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      'settings': 'show'
    };

    return Router;

  })(App.Routers.Router);
  API = {
    show: function() {
      return new SettingsApp.Show.Controller;
    }
  };
  return App.addInitializer(function() {
    return new SettingsApp.Router({
      controller: API
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('SettingsApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var settings, templates;
      templates = App.request('template:entities', {
        restricted: false
      });
      settings = App.request('setting:entities');
      this.view = this.getView(settings, templates);
      return this.show(this.view, {
        loading: {
          entities: [settings, templates]
        }
      });
    };

    Controller.prototype.getView = function(settings, templates) {
      return new Show.View({
        collection: settings,
        templateCollection: templates
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('SettingsApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = 'settings/show/templates/form';

    View.prototype.ui = {
      form: 'form',
      template: '#blog_item_template',
      submit: '[data-action="submit"],[type="submit"]'
    };

    View.prototype.events = {
      'click @ui.submit': 'save'
    };

    View.prototype.onRender = function() {
      var model;
      model = this.collection.findWhere({
        key: 'blog.item.template'
      });
      if (!model) {
        model = App.request('new:setting:entity');
      }
      console.log(model);
      return this.renderSelect(this.options.templateCollection, this.ui.template, 'id', 'name', model.get('value'));
    };

    View.prototype.formatSaveData = function(data) {
      console.log(data);
      return data;
    };

    View.prototype.save = function(e) {
      e.preventDefault();
      if (!this.ui.form.parsley().validate()) {
        return;
      }
      return this.collection.save(this.getSaveData());
    };

    return View;

  })(App.Views.BaseForm);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('Views', function(Views, App, Backbone, Marionette, $, _) {
  return Views.TemplateView = (function(_super) {
    __extends(TemplateView, _super);

    function TemplateView() {
      return TemplateView.__super__.constructor.apply(this, arguments);
    }

    TemplateView.prototype.template = 'templates/_base/templates/form';

    TemplateView.prototype.ui = {
      form: 'form',
      submit: '[data-action="submit"],[type="submit"]',
      destroy: '[data-action="destroy"]',
      inputTitle: '[name="title"]',
      editor: '[name="body"]'
    };

    TemplateView.prototype.events = {
      'click @ui.submit': 'save'
    };

    TemplateView.prototype.triggers = {
      'click @ui.destroy': 'page:delete:clicked'
    };

    TemplateView.prototype.onRender = function() {
      this.editor = CodeMirror.fromTextArea(this.ui.editor.get(0), {
        mode: 'text/html',
        lineNumbers: true,
        styleActiveLine: true,
        theme: "solarized dark"
      });
      return setTimeout((function(_this) {
        return function() {
          return _this.editor.refresh();
        };
      })(this), 1);
    };

    TemplateView.prototype.formatSaveData = function(data) {
      var content;
      this.editor.save();
      content = this.editor.getValue();
      if (content.length > 0) {
        data.body = content;
      }
      return data;
    };

    return TemplateView;

  })(App.Views.BaseForm);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp.List', function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var templates;
      templates = App.request('template:entities');
      this.layout = this.getLayout();
      this.listenTo(this.layout, 'show', (function(_this) {
        return function() {
          return _this.show(_this.getListView(templates), {
            region: _this.layout.listRegion
          });
        };
      })(this));
      return this.show(this.layout, {
        loading: {
          entities: templates
        }
      });
    };

    Controller.prototype.getLayout = function() {
      return new List.Layout();
    };

    Controller.prototype.getListView = function(templates) {
      return new List.Pages({
        collection: templates
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp.List', function(List, App, Backbone, Marionette, $, _) {
  List.Layout = (function(_super) {
    __extends(Layout, _super);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    Layout.prototype.template = 'templates/list/templates/layout';

    Layout.prototype.regions = {
      listRegion: '#project-list'
    };

    return Layout;

  })(App.Views.LayoutView);
  List.PageItem = (function(_super) {
    __extends(PageItem, _super);

    function PageItem() {
      return PageItem.__super__.constructor.apply(this, arguments);
    }

    PageItem.prototype.template = 'templates/list/templates/item';

    PageItem.prototype.className = 'list-group-item';

    return PageItem;

  })(App.Views.ItemView);
  List.Empty = (function(_super) {
    __extends(Empty, _super);

    function Empty() {
      return Empty.__super__.constructor.apply(this, arguments);
    }

    Empty.prototype.template = 'templates/list/templates/empty';

    return Empty;

  })(App.Views.ItemView);
  return List.Pages = (function(_super) {
    __extends(Pages, _super);

    function Pages() {
      return Pages.__super__.constructor.apply(this, arguments);
    }

    Pages.prototype.template = 'templates/list/templates/grid';

    Pages.prototype.childView = List.PageItem;

    Pages.prototype.emptyView = List.Empty;

    Pages.prototype.childViewContainer = '.treeview';

    Pages.prototype.attributes = {
      id: 'templates-list'
    };

    Pages.prototype.ui = {
      'items': '.list-group-item'
    };

    return Pages;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp.New', function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var template, view;
      template = App.request('new:template:entity');
      this.listenTo(template, 'created', (function(_this) {
        return function() {
          return App.vent.trigger('template:created', template);
        };
      })(this));
      view = this.getView(template);
      return this.show(view, {
        loading: {
          entities: template
        }
      });
    };

    Controller.prototype.getView = function(template) {
      return new New.View({
        model: template
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp.New', function(New, App, Backbone, Marionette, $, _) {
  return New.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    return View;

  })(App.Views.TemplateView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var id, template;
      template = options.template, id = options.id;
      template || (template = App.request('template:entity', id));
      this.listenTo(template, 'updated', (function(_this) {
        return function() {
          return App.vent.trigger('template:updated', template);
        };
      })(this));
      this.view = this.getView(template);
      this.listenTo(this.view, 'template:delete:clicked', function(args) {
        var model;
        model = args.model;
        if (confirm("Pagina \"" + (model.get('title')) + "\" verwijderen?")) {
          return model.destroy();
        } else {
          return false;
        }
      });
      return this.show(this.view, {
        loading: {
          entities: template
        }
      });
    };

    Controller.prototype.getView = function(template) {
      return new Show.View({
        model: template
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
  return Show.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    return View;

  })(App.Views.TemplateView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module('TemplatesApp', function(TemplatesApp, App, Backbone, Marionette, $, _) {

  /**
   * The page router
   */
  var API;
  TemplatesApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      'templates': 'list',
      'templates/add': 'add',
      'templates/edit/:id': 'edit',
      'templates/delete/:id': 'delete'
    };

    return Router;

  })(App.Routers.Router);
  API = {
    list: function() {
      return new TemplatesApp.List.Controller;
    },
    add: function() {
      return new TemplatesApp.New.Controller;
    },
    edit: function(id, item, activeTab) {
      return new TemplatesApp.Show.Controller({
        id: id,
        template: item
      });
    },
    "delete": function(id, item) {}
  };
  App.vent.on('template:created template:updated', function(item) {
    console.log(item);
    return App.execute('alert:show:success', 'Great! template created');
  });
  App.addInitializer(function() {
    return new TemplatesApp.Router({
      controller: API
    });
  });
  return App.commands.setHandler('list:templates', function() {
    return API.list();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Components.Loading", function(Loading, App, Backbone, Marionette, $, _) {
  Loading.LoadingController = (function(_super) {
    __extends(LoadingController, _super);

    function LoadingController() {
      return LoadingController.__super__.constructor.apply(this, arguments);
    }

    LoadingController.prototype.initialize = function(options) {
      var config, loadingView, view;
      view = options.view, config = options.config;
      config = _.isBoolean(config) ? {} : config;
      _.defaults(config, {
        loadingType: "spinner",
        entities: this.getEntities(view),
        debug: false
      });
      switch (config.loadingType) {
        case "opacity":
          this.region.currentView.$el.css("opacity", 0.5);
          break;
        case "spinner":
          loadingView = this.getLoadingView();
          this.show(loadingView);
          break;
        default:
          throw new Error("Invalid loadingType");
      }
      return this.showRealView(view, loadingView, config);
    };

    LoadingController.prototype.showRealView = function(realView, loadingView, config) {
      return App.execute("when:fetched", config.entities, (function(_this) {
        return function() {
          switch (config.loadingType) {
            case "opacity":
              _this.region.currentView.$el.removeAttr("style");
              break;
            case "spinner":
              if (_this.region.currentView !== loadingView) {
                return realView.destroy();
              }
          }
          if (!config.debug) {
            return _this.show(realView);
          }
        };
      })(this));
    };

    LoadingController.prototype.getEntities = function(view) {
      return _.chain(view).pick("model", "collection").toArray().compact().value();
    };

    LoadingController.prototype.getLoadingView = function() {
      return new Loading.LoadingView;
    };

    return LoadingController;

  })(App.Controllers.Base);
  return App.commands.setHandler("show:loading", function(view, options) {
    return new Loading.LoadingController({
      view: view,
      region: options.region,
      config: options.loading
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Rocket.module("Components.Loading", function(Loading, App, Backbone, Marionette, $, _) {
  return Loading.LoadingView = (function(_super) {
    __extends(LoadingView, _super);

    function LoadingView() {
      return LoadingView.__super__.constructor.apply(this, arguments);
    }

    LoadingView.prototype.template = 'assets/coffee/components/loading/templates/loading';

    LoadingView.prototype.className = 'loading';

    return LoadingView;

  })(App.Views.ItemView);
});
