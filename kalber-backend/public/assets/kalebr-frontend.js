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
        var self, user;
        self = this;
        if (this.get('validLogin')) {
          user = {};
          user.email = this.get('email');
          user.password = this.get('password');
          return $.ajax({
            type: 'POST',
            url: _kalebrFrontendUtilsConstants['default'].USER_SIGN_IN_URL,
            data: user,
            success: function success(data) {
              if (data.user && data.auth_token) {
                window.localStorage.setItem('auth_token', data.auth_token);
                return self.transitionToRoute('users');
              }
            },
            error: function error(msg) {
              return alert(msg.responseJSON.errors[0]);
            }
          });
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
define('kalebr-frontend/controllers/questions/new', ['exports', 'ember'], function (exports, _ember) {
  var questionNew;

  questionNew = _ember['default'].Controller.extend({
    actions: {
      createNewQuestion: function createNewQuestion() {
        return this.get('model').save();
      }
    }
  });

  exports['default'] = questionNew;
});
define('kalebr-frontend/controllers/users/new', ['exports', 'ember'], function (exports, _ember) {
  var userNew;

  userNew = _ember['default'].Controller.extend({
    actions: {
      createNewUser: function createNewUser() {
        return this.get('model').save();
      }
    }
  });

  exports['default'] = userNew;
});
define('kalebr-frontend/helpers/adder', ['exports', 'ember'], function (exports, _ember) {
  var Adder, adder;

  exports.adder = adder = function (params) {
    return params[0] + params[1];
  };

  Adder = _ember['default'].Helper.helper(adder);

  exports.adder = adder;
  exports['default'] = Adder;
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
define("kalebr-frontend/models/option", ["exports", "ember-data"], function (exports, _emberData) {
  var optionModel;

  optionModel = _emberData["default"].Model.extend({
    statement: _emberData["default"].attr('string')
  });

  exports["default"] = optionModel;
});
define('kalebr-frontend/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
  var questionModel;

  questionModel = _emberData['default'].Model.extend({
    statement: _emberData['default'].attr('string'),
    options: _emberData['default'].hasMany('option')
  });

  exports['default'] = questionModel;
});
define('kalebr-frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  var userModel;

  userModel = _emberData['default'].Model.extend({
    firstname: _emberData['default'].attr('string'),
    lastname: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string')
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
    this.route('login', {
      path: '/login'
    });
    this.route('users/new');
    this.route('questions');
    return this.route('questions/new');
  });

  exports['default'] = Router;
});
define('kalebr-frontend/routes/application', ['exports', 'ember', 'kalebr-frontend/utils/constants'], function (exports, _ember, _kalebrFrontendUtilsConstants) {
  var applicationRoute;

  applicationRoute = _ember['default'].Route.extend({
    setupController: function setupController() {
      return this.getCurrentUser();
    },
    getCurrentUser: function getCurrentUser() {
      var auth_token, self;
      self = this;
      auth_token = window.localStorage.getItem('auth_token');
      return $.ajax({
        type: 'POST',
        url: _kalebrFrontendUtilsConstants['default'].LOGGED_IN_USER_URL,
        headers: {
          Authorization: "Bearer " + auth_token
        },
        success: function success(data) {
          console.log(data.user.email, 'logged in');
          return self.transitionTo('users');
        },
        error: function error(msg) {
          console.log(msg.responseJSON.errors[0]);
          return self.replaceWith('login');
        }
      });
    }
  });

  exports['default'] = applicationRoute;
});
define('kalebr-frontend/routes/login', ['exports', 'ember'], function (exports, _ember) {
  var login;

  login = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = login;
});
define('kalebr-frontend/routes/questions', ['exports', 'ember'], function (exports, _ember) {
  var questionsRoute;

  questionsRoute = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('question');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = questionsRoute;
});
define('kalebr-frontend/routes/questions/new', ['exports', 'ember'], function (exports, _ember) {
  var questionNew;

  questionNew = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').createRecord('question');
    },
    setupController: function setupController(controller, model) {
      var i, j, option;
      for (i = j = 1; j <= 4; i = ++j) {
        option = this.get('store').createRecord('option');
        model.get('options').pushObject(option);
      }
      return controller.set('model', model);
    }
  });

  exports['default'] = questionNew;
});
define('kalebr-frontend/routes/users', ['exports', 'ember'], function (exports, _ember) {
  var usersRoute;

  usersRoute = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = usersRoute;
});
define('kalebr-frontend/routes/users/new', ['exports', 'ember'], function (exports, _ember) {
  var userNew;

  userNew = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').createRecord('user');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = userNew;
});
define('kalebr-frontend/serializers/application', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  var ApplicationSerializer;

  ApplicationSerializer = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      options: {
        embedded: 'always'
      }
    }
  });

  exports['default'] = ApplicationSerializer;
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
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 16
            },
            "end": {
              "line": 5,
              "column": 43
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
          var el1 = dom.createTextNode(" Users ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 16
            },
            "end": {
              "line": 6,
              "column": 51
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
          var el1 = dom.createTextNode(" Questions ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
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
            "line": 14,
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
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "navigation");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode("Home");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode("Sign Out");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
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
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["users"], [], 0, null, ["loc", [null, [5, 16], [5, 55]]]], ["block", "link-to", ["questions"], [], 1, null, ["loc", [null, [6, 16], [6, 63]]]], ["content", "outlet", ["loc", [null, [10, 10], [10, 20]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
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
        dom.setAttribute(el2, "class", "button width15rem");
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0], ["inline", "input", [], ["class", "", "type", "text", "value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [5, 43], [5, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 6], [5, 50]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [9, 38], [9, 46]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [9, 6], [9, 48]]], 0, 0], ["element", "action", ["login"], [], ["loc", [null, [12, 35], [12, 53]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("kalebr-frontend/templates/questions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 7,
              "column": 8
            }
          },
          "moduleName": "kalebr-frontend/templates/questions.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "button");
          dom.setAttribute(el1, "id", "apple");
          var el2 = dom.createTextNode("\n                Add New\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 6
              },
              "end": {
                "line": 16,
                "column": 6
              }
            },
            "moduleName": "kalebr-frontend/templates/questions.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "option.statement", ["loc", [null, [15, 8], [15, 28]]], 0, 0, 0, 0]],
          locals: ["option"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 17,
              "column": 2
            }
          },
          "moduleName": "kalebr-frontend/templates/questions.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      Options\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "question.statement", ["loc", [null, [11, 8], [11, 30]]], 0, 0, 0, 0], ["block", "each", [["get", "question.options", ["loc", [null, [14, 14], [14, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 6], [16, 15]]]]],
        locals: ["question"],
        templates: [child0]
      };
    })();
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/questions.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "questions pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flex flex-right");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["questions/new"], [], 0, null, ["loc", [null, [3, 8], [7, 20]]]], ["block", "each", [["get", "model", ["loc", [null, [9, 10], [9, 15]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [9, 2], [17, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kalebr-frontend/templates/questions/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "kalebr-frontend/templates/questions/new.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "input-wrapper");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "input-label");
          var el3 = dom.createTextNode(" Option ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["inline", "adder", [["get", "index", ["loc", [null, [9, 53], [9, 58]]], 0, 0, 0, 0], 1], [], ["loc", [null, [9, 45], [9, 62]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "option.statement", ["loc", [null, [10, 25], [10, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 10], [10, 43]]], 0, 0]],
        locals: ["option", "index"],
        templates: []
      };
    })();
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
            "line": 17,
            "column": 6
          }
        },
        "moduleName": "kalebr-frontend/templates/questions/new.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "new-question pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-label");
        var el4 = dom.createTextNode(" Statement ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "button width15rem");
        var el3 = dom.createTextNode("\n        Create\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [5]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "model.statement", ["loc", [null, [4, 24], [4, 39]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 6], [4, 41]]], 0, 0], ["block", "each", [["get", "model.options", ["loc", [null, [7, 12], [7, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 4], [12, 13]]]], ["element", "action", ["createNewQuestion"], [], ["loc", [null, [14, 35], [14, 65]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("kalebr-frontend/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 7,
              "column": 8
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
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "button");
          dom.setAttribute(el1, "id", "apple");
          var el2 = dom.createTextNode("\n                Add New\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "kalebr-frontend/templates/users.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["content", "user.firstname", ["loc", [null, [11, 8], [11, 26]]], 0, 0, 0, 0], ["content", "user.lastname", ["loc", [null, [11, 27], [11, 44]]], 0, 0, 0, 0]],
        locals: ["user"],
        templates: []
      };
    })();
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
            "line": 15,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "users pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "flex flex-right");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["users/new"], [], 0, null, ["loc", [null, [3, 8], [7, 20]]]], ["block", "each", [["get", "model", ["loc", [null, [9, 12], [9, 17]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [9, 4], [13, 13]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kalebr-frontend/templates/users/new", ["exports"], function (exports) {
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
            "line": 28,
            "column": 6
          }
        },
        "moduleName": "kalebr-frontend/templates/users/new.hbs"
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
        dom.setAttribute(el1, "class", "new-user pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-label");
        var el4 = dom.createTextNode(" First Name ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-label");
        var el4 = dom.createTextNode(" Last Name ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
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
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-wrapper");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-label");
        var el4 = dom.createTextNode(" Password ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "button width15rem");
        var el3 = dom.createTextNode("\n        Create\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [9]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 3, 3);
        morphs[5] = dom.createElementMorph(element1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [5, 21], [5, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model.firstname", ["loc", [null, [5, 32], [5, 47]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 8], [5, 49]]], 0, 0], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [10, 21], [10, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model.lastname", ["loc", [null, [10, 32], [10, 46]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 48]]], 0, 0], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [15, 21], [15, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [15, 32], [15, 43]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 8], [15, 45]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [20, 40], [20, 54]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [20, 8], [20, 56]]], 0, 0], ["element", "action", ["createNewUser"], [], ["loc", [null, [23, 35], [23, 61]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('kalebr-frontend/utils/constants', ['exports'], function (exports) {
  var constants;

  constants = {
    HOST: 'http://localhost:3000',
    NAMESPACE: 'api/v1'
  };

  constants.USER_SIGN_IN_URL = constants.HOST + '/user_sign_in';

  constants.LOGGED_IN_USER_URL = constants.HOST + '/signed_in_user';

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
