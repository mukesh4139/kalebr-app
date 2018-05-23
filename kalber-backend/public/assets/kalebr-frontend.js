"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define("kalebr-frontend/adapters/application", ["exports", "ember-data", "kalebr-frontend/utils/constants", "active-model-adapter"], function (exports, _emberData, _kalebrFrontendUtilsConstants, _activeModelAdapter) {
  var adapter;

  adapter = _activeModelAdapter["default"].extend({
    host: _kalebrFrontendUtilsConstants["default"].HOST,
    namespace: _kalebrFrontendUtilsConstants["default"].NAMESPACE,
    handleResponse: function handleResponse(status, headers, payload) {
      return this._super(status, headers, payload);
    }
  });

  exports["default"] = adapter;
});
define('kalebr-frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'kalebr-frontend/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _kalebrFrontendConfigEnvironment) {
  var App;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _kalebrFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _kalebrFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _kalebrFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('kalebr-frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'kalebr-frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _kalebrFrontendConfigEnvironment) {

  var name = _kalebrFrontendConfigEnvironment['default'].APP.name;
  var version = _kalebrFrontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('kalebr-frontend/controllers/login', ['exports', 'ember', 'kalebr-frontend/utils/constants'], function (exports, _ember, _kalebrFrontendUtilsConstants) {
  var login;

  login = _ember['default'].Controller.extend({
    emailIsValid: (function () {
      return this.get('email').length > 0;
    }).property('email'),
    passwordIsValid: (function () {
      return this.get('password').length > 0;
    }).property('password'),
    validLogin: (function () {
      return this.get('emailIsValid') && this.get('passwordIsValid');
    }).property('emailIsValid', 'passwordIsValid'),
    actions: {
      login: function login() {
        var user;
        if (this.get('validLogin')) {
          user = {};
          user.email = this.get('email');
          user.password = this.get('password');
          $.ajax({
            type: 'POST',
            url: _kalebrFrontendUtilsConstants['default'].USER_SIGN_IN_URL,
            data: user
          });
          return {
            success: function success(data) {
              debugger;
            },
            error: function error() {
              debugger;
            }
          };
        } else {
          if (!this.get('emailIsValid')) {
            return alert('Invalid Email');
          } else if (!this.get('passwordIsValid')) {
            return alert('Invalid Password');
          }
        }
      },
      cancel: function cancel() {
        return window.history.back();
      }
    }
  });

  exports['default'] = login;
});
define('kalebr-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('kalebr-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("kalebr-frontend/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('kalebr-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'kalebr-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _kalebrFrontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_kalebrFrontendConfigEnvironment['default'].APP.name, _kalebrFrontendConfigEnvironment['default'].APP.version)
  };
});
define('kalebr-frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('kalebr-frontend/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('kalebr-frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('kalebr-frontend/initializers/export-application-global', ['exports', 'ember', 'kalebr-frontend/config/environment'], function (exports, _ember, _kalebrFrontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_kalebrFrontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _kalebrFrontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_kalebrFrontendConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('kalebr-frontend/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('kalebr-frontend/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('kalebr-frontend/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("kalebr-frontend/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('kalebr-frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  var userModel;

  userModel = _emberData['default'].Model.extend({
    firstname: _emberData['default'].attr('string'),
    lastname: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string')
  });

  exports['default'] = userModel;
});
define('kalebr-frontend/router', ['exports', 'ember', 'kalebr-frontend/config/environment'], function (exports, _ember, _kalebrFrontendConfigEnvironment) {
  var Router;

  Router = _ember['default'].Router.extend({
    location: _kalebrFrontendConfigEnvironment['default'].locationType,
    rootURL: _kalebrFrontendConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('users');
    return this.route('login', {
      path: '/'
    });
  });

  exports['default'] = Router;
});
define('kalebr-frontend/routes/login', ['exports', 'ember'], function (exports, _ember) {
  var login;

  login = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findRecord('user', '1');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = login;
});
define('kalebr-frontend/routes/users', ['exports', 'ember'], function (exports, _ember) {
  var usersRoute;

  usersRoute = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findRecord('user', '1');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = usersRoute;
});
define('kalebr-frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("kalebr-frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "app-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "application-header");
        var el4 = dom.createTextNode("\n            Kalebr App\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "application-container");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [7, 10], [7, 20]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kalebr-frontend/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "login pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-label");
        var el4 = dom.createTextNode(" Email ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-label ");
        var el4 = dom.createTextNode(" Password");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "button");
        var el3 = dom.createTextNode("\n        Login\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [5]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[3] = dom.createElementMorph(element1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0], ["inline", "input", [], ["class", "", "type", "text", "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [5, 43], [5, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 6], [5, 50]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [9, 38], [9, 46]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [9, 6], [9, 48]]], 0, 0], ["element", "action", ["login"], [], ["loc", [null, [12, 24], [12, 42]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kalebr-frontend/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/users.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Apple");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('kalebr-frontend/utils/constants', ['exports'], function (exports) {
  var constants;

  constants = {
    HOST: 'http://localhost:3000',
    NAMESPACE: '/api/v1'
  };

  constants.USER_SIGN_IN_URL = constants.HOST + '/user_sign_in';

  exports['default'] = constants;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('kalebr-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'kalebr-frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("kalebr-frontend/app")["default"].create({"name":"kalebr-frontend","version":"0.0.0+160d14bf"});
}

/* jshint ignore:end */
//# sourceMappingURL=kalebr-frontend.map
