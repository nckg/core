this["JST"] = this["JST"] || {};

this["JST"]["alert/show/templates/flash.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a data-dismiss="alert" class="close"><i class="fa fa-times"></i></a>\n' +
((__t = ( message )) == null ? '' : __t);

}
return __p
};

this["JST"]["articles/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header">\n            <div class="col-sm-6">\n                <label>Titel</label>\n                <div class="form-group">\n                    <input type="text" name="title" class="form-control input-lg" placeholder="Titel" value="' +
((__t = ( title )) == null ? '' : __t) +
'" required="required">\n                    <small class="help-block">De titel van je pagina. Bijvoorbeeld: <em>Over ons</em></small>\n                </div>\n            </div>\n\n            <div class="col-sm-12">\n                <button class="btn btn-xs btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n                ';
 if ( id ) { ;
__p += '\n                <button class="btn btn-xs btn-danger" data-action="destroy" type="button"><i class="fa fa-trash-o"></i></button>\n                ';
 } ;
__p += '\n            </div>\n        </div>\n    </div>\n    <!--<div class="row">-->\n        <!--<div class="col-sm-6">-->\n            <!--<div class="form-group">-->\n                <!--<label for="page_id">Bovenliggende pagina</label>-->\n                <!--<select id="page_id" name="page_id" class="form-control" required="required"></select>-->\n            <!--</div>-->\n        <!--</div>-->\n        <!--<div class="col-sm-6">-->\n            <!--<div class="form-group">-->\n                <!--<label for="template_id">Template</label>-->\n                <!--<select id="template_id" name="template_id" class="form-control" required="required"></select>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n\n    <hr>\n\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <textarea class="form-control js-st-instance" name="body">' +
((__t = ( body )) == null ? '' : __t) +
'</textarea>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

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
__p += '<div class="treeview"></div>';

}
return __p
};

this["JST"]["articles/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h5><a href="#articles/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" class="list-group-item-heading">' +
((__t = ( title )) == null ? '' : __t) +
'</a></h5>';

}
return __p
};

this["JST"]["articles/list/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row action-row">\n    <div class="col-md-offset-6 col-md-6 text-right">\n        <a href="#articles/add" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Toevoegen</a>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-md-12">\n        <div id="article-list" class="list-group"></div>\n    </div>\n</div>';

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

this["JST"]["header/list/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-default" role="navigation">\n    <div class="container">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <!--<a class="navbar-brand" href="#">-->\n                <!--<i class="fa fa-rocket"></i> Rocketship CMS-->\n            <!--</a>-->\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class="collapse navbar-collapse">\n            <ul class="nav navbar-nav" id="navigation">\n                <li><a href="#pages"><i class="fa fa-files-o"></i> Pagina\'s</a></li>\n                <li><a href="#articles"><i class="fa fa-pencil"></i> Artikels</a></li>\n                <li><a href="#templates"><i class="fa fa-th-large"></i> Layouts</a></li>\n            </ul>\n\n            <ul class="nav navbar-nav navbar-right">\n                <li class="user-dropdown dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                        <img src="" class="avatar img-rounded" width="21" height="21">\n                        <b class="caret"></b>\n                    </a>\n                    <ul class="dropdown-menu pull-right">\n                        <li><a href="/admin/logout"><i class="fa fa-power-off"></i> Afmelden</a></li>\n                    </ul>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</nav>';

}
return __p
};

this["JST"]["pages/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form class="form" data-parsley-validate>\n    <div class="row">\n        <div class="header">\n            <div class="col-sm-6">\n                <label>Titel</label>\n                <div class="form-group">\n                    <input type="text" name="title" class="form-control input-lg" placeholder="Titel" value="' +
((__t = ( title )) == null ? '' : __t) +
'" required="required">\n                    <small class="help-block">De titel van je pagina. Bijvoorbeeld: <em>Over ons</em></small>\n                </div>\n            </div>\n            <div class="col-sm-6">\n                <div class="form-group">\n                    <label>URL</label>\n                    <div class="input-group input-group-lg">\n                        <span class="input-group-addon prefix">/' +
((__t = ( path.replace( slug, '' ) )) == null ? '' : __t) +
'</span>\n                        <input type="text" name="slug" class="form-control input-lg" placeholder="URL" value="' +
((__t = ( slug )) == null ? '' : __t) +
'">\n                    </div>\n                    <small class="help-block">De link naar je pagina. Bijvoorbeeld: <em>/over-ons/</em></small>\n                </div>\n            </div>\n            <div class="col-sm-12">\n                <button class="btn btn-xs btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n                ';
 if ( id ) { ;
__p += '\n                <button class="btn btn-xs btn-danger" data-action="destroy" type="button"><i class="fa fa-trash-o"></i></button>\n                ';
 } ;
__p += '\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-6">\n            <div class="form-group">\n                <label for="page_id">Bovenliggende pagina</label>\n                <select id="page_id" name="page_id" class="form-control" required="required"></select>\n            </div>\n        </div>\n        <div class="col-sm-6">\n            <div class="form-group">\n                <label for="template_id">Template</label>\n                <select id="template_id" name="template_id" class="form-control" required="required"></select>\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="form-group">\n                <textarea class="form-control js-st-instance" name="body">' +
((__t = ( body )) == null ? '' : __t) +
'</textarea>\n            </div>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-sm-12 text-right">\n            <button class="ui btn btn-link" type="reset">Annuleer en ga terug</button>\n            <button class="btn btn-success" type="submit"><i class="fa fa-check"></i> Opslaan</button>\n        </div>\n    </div>\n</form>';

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
__p += '<div class="treeview"></div>';

}
return __p
};

this["JST"]["pages/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h5><a href="#pages/edit/' +
((__t = ( id )) == null ? '' : __t) +
'" class="list-group-item-heading">' +
((__t = ( title )) == null ? '' : __t) +
'</a></h5>\n<small class="text-muted">/' +
((__t = ( path )) == null ? '' : __t) +
'</small>';

}
return __p
};

this["JST"]["pages/list/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row action-row">\n    <div class="col-md-offset-6 col-md-6 text-right">\n        <a href="#pages/add" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Toevoegen</a>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-md-12">\n        <div id="project-list" class="list-group"></div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["pages/show/templates/header.html"] = function(obj) {
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

this["JST"]["pages/show/templates/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

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
__p += '<h3 class="loading text-muted"><i class="fa fa-rocket"></i> Laden...</h3>';

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
      this.$el.on("shown", (function(_this) {
        return function() {
          return Snappy.execute("dialog:shown", view);
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
      return this.listenTo(view, "dialog:close", this.closeDialog);
    };

    Dialog.prototype.closeDialog = function() {
      this.stopListening();
      this.close();
      return this.$el.modal("hide");
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

_.mixin({
  stripTrailingSlash: function(url) {
    if (url.slice(-1) === '/') {
      return url.substr(0, url.length - 1);
    } else {
      return url;
    }
  }
});

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

SirTrevor.BlockControl.prototype.render = function() {
  this.$el.html("<i class=\"fa fa-3x st-fa-icon " + (_.result(this.block_type, 'icon_name')) + "\"></i>" + (_.result(this.block_type, 'title')));
  return this;
};

SirTrevor.BlockReorder.prototype.attributes = function() {
  return {
    'html': '<i class="fa fa-arrows-v"></i>',
    'draggable': 'true'
  };
};

SirTrevor.BlockDeletion.prototype.attributes = function() {
  return {
    'html': '<i class="fa fa-trash-o"></i>',
    'draggable': 'true'
  };
};

SirTrevor.Blocks.Heading.prototype.icon_name = "fa-font";

SirTrevor.Blocks.Text.prototype.icon_name = "fa-pencil";

SirTrevor.Blocks.Image.prototype.icon_name = "fa-picture-o";

SirTrevor.Blocks.Image.prototype.loadData = function(data) {
  this.$editor.html($("<img>", {
    src: data.public_path + "/" + data.name
  }));
};

SirTrevor.Blocks.Video.prototype.icon_name = "fa-film";

SirTrevor.Blocks.Tweet.prototype.icon_name = "fa-twitter";

SirTrevor.Blocks.List.prototype.icon_name = "fa-list-ul";

SirTrevor.Blocks.Quote.prototype.icon_name = "fa-quote-left";


/*
Interface of Editor.
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SirTrevor.Blocks.Markdown = (function(_super) {
  __extends(Markdown, _super);

  function Markdown() {
    return Markdown.__super__.constructor.apply(this, arguments);
  }

  Markdown.prototype.type = "markdown";

  Markdown.prototype.title = function() {
    return 'Markdown';
  };

  Markdown.prototype.editorHTML = '<textarea class="st-required st-text-block"></textarea>';

  Markdown.prototype.icon_name = 'fa-paragraph';

  Markdown.prototype.toData = function() {
    var content, dataObj;
    SirTrevor.log("toData for " + this.blockID);
    dataObj = {};
    if (!this.editor) {
      return;
    }
    this.editor.codemirror.save();
    content = this.editor.codemirror.getValue();
    if (content.length > 0) {
      dataObj.text = content;
    }
    if (!_.isEmpty(dataObj)) {
      this.setData(dataObj);
    }
    return dataObj;
  };

  Markdown.prototype.loadData = function(data) {
    data = _.defaults(data, {
      text: ''
    });
    return this.getTextBlock().text(data.text);
  };

  Markdown.prototype.onBlockRender = function() {
    this.editor = new Editor({
      element: this.getTextBlock()[0],
      status: []
    });
    return setTimeout((function(_this) {
      return function() {
        return _this.editor.codemirror.refresh();
      };
    })(this), 1);
  };

  Markdown.prototype.toMarkdown = function(markdown) {
    return markdown;
  };

  Markdown.prototype.toHTML = function(html) {
    return html;
  };

  return Markdown;

})(SirTrevor.Block);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SirTrevor.Blocks.Video = (function(_super) {
  __extends(Video, _super);

  function Video() {
    return Video.__super__.constructor.apply(this, arguments);
  }

  Video.prototype.droppable = false;

  Video.prototype.pastable = true;

  Video.prototype.icon_name = 'fa-youtube-play';

  return Video;

})(SirTrevor.Blocks.Video);

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
    return this.apiUrl = _.stripTrailingSlash(options.api_url);
  });
  App.reqres.setHandler('get:current:user', function() {
    return App.currentUser;
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
    flashRegion: '#flash-message'
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
    this.startHistory();
    return SirTrevor.setDefaults({
      uploadUrl: App.request('get:url:api') + '/image'
    });
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
      body: '',
      title: ''
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

this.Rocket.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Page = (function(_super) {
    __extends(Page, _super);

    function Page() {
      return Page.__super__.constructor.apply(this, arguments);
    }

    Page.prototype.defaults = {
      id: null,
      body: '',
      is_home: false,
      path: '',
      slug: '',
      template_id: 1,
      title: ''
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
    getAll: function() {
      var template;
      template = new Entities.TemplateCollection;
      template.fetch({
        reset: true
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
  App.reqres.setHandler('template:entities', function() {
    return API.getAll();
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
        "class": 'alert'
      };
      if (this.options.extraClassName) {
        attrs["class"] = "alert " + this.options.extraClassName;
      }
      return attrs;
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

    ArticleView.prototype.ui = {
      form: 'form',
      submit: '[data-action="submit"],[type="submit"]',
      destroy: '[data-action="destroy"]',
      sirTrevor: '.js-st-instance'
    };

    ArticleView.prototype.events = {
      'click @ui.submit': 'save'
    };

    ArticleView.prototype.triggers = {
      'click @ui.destroy': 'page:delete:clicked'
    };

    ArticleView.prototype.onRender = function() {
      return this.sirTrevor = new SirTrevor.Editor({
        el: this.ui.sirTrevor,
        defaultType: 'Markdown',
        blockTypes: ['Markdown', 'Heading', 'Image', 'Video']
      });
    };

    ArticleView.prototype.formatSaveData = function(data) {
      SirTrevor.onBeforeSubmit();
      data.body = this.sirTrevor.$el.val();
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
      'articles/add': 'add'
    };

    return Router;

  })(App.Routers.Router);
  API = {
    list: function() {
      return new ArticlesApp.List.Controller();
    },
    add: function() {
      return new ArticlesApp.New.Controller();
    }
  };
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

    Controller.prototype.getListView = function(articles) {
      return new List.Pages({
        collection: articles
      });
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

    PageItem.prototype.className = 'list-group-item';

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

    Pages.prototype.childViewContainer = '.treeview';

    Pages.prototype.attributes = {
      id: 'articles-list'
    };

    Pages.prototype.ui = {
      'items': '.list-group-item'
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
      destroy: '[data-action="destroy"]',
      sirTrevor: '.js-st-instance',
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

    PageView.prototype.triggers = {
      'click @ui.destroy': 'page:delete:clicked'
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
      this.renderSelect(this.options.templateCollection, this.ui.template, 'id', 'name', this.model.get('template_id'));
      this.renderSelect(this.options.pageCollection.getIndentedList(), this.ui.pages, 'id', function(model) {
        var prefix;
        prefix = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(model.get('level'));
        return "" + prefix + (model.get('title'));
      }, this.model.get('page_id'));
      return this.sirTrevor = new SirTrevor.Editor({
        el: this.ui.sirTrevor,
        defaultType: 'Markdown',
        blockTypes: ['Markdown', 'Heading', 'Image', 'Video']
      });
    };

    PageView.prototype.formatSaveData = function(data) {
      SirTrevor.onBeforeSubmit();
      data.body = this.sirTrevor.$el.val();
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
      return new List.Pages({
        collection: pages
      });
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
      listRegion: '#project-list'
    };

    return Layout;

  })(App.Views.LayoutView);
  List.PageItem = (function(_super) {
    __extends(PageItem, _super);

    function PageItem() {
      return PageItem.__super__.constructor.apply(this, arguments);
    }

    PageItem.prototype.template = 'pages/list/templates/item';

    PageItem.prototype.className = 'list-group-item';

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

    Pages.prototype.childViewContainer = '.treeview';

    Pages.prototype.attributes = {
      id: 'pages-list'
    };

    Pages.prototype.ui = {
      'items': '.list-group-item'
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
    console.log(item);
    return App.execute('alert:show:success', 'Great! page created');
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
      this.listenTo(page, 'updated', (function(_this) {
        return function() {
          return App.vent.trigger('page:updated', page);
        };
      })(this));
      this.view = this.getView(page, pages, templates);
      this.listenTo(this.view, 'page:delete:clicked', function(args) {
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

    LoadingView.prototype.className = 'loading-container';

    return LoadingView;

  })(App.Views.ItemView);
});
