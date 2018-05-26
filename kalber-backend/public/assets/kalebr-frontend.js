"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define("kalebr-frontend/adapters/application", ["exports", "ember-data", "kalebr-frontend/utils/constants", "active-model-adapter"], function (exports, _emberData, _kalebrFrontendUtilsConstants, _activeModelAdapter) {
  var adapter;

  adapter = _activeModelAdapter["default"].extend({
    host: _kalebrFrontendUtilsConstants["default"].HOST,
    namespace: _kalebrFrontendUtilsConstants["default"].NAMESPACE,
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem('auth_token')
    },
    handleResponse: function handleResponse(status, headers, payload) {
      if (this.isInvalid(status, headers, payload)) {
        if (status === 422 || status === 500) {
          return alert(payload.message);
        }
      } else {
        return this._super(status, headers, payload);
      }
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
    reset: function reset() {
      this.set('email', void 0);
      return this.set('password', void 0);
    },
    emailIsValid: (function () {
      return this.get('email.length') > 0;
    }).property('email'),
    passwordIsValid: (function () {
      return this.get('password.length') > 0;
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
                self.get('session').set('currentUser', data.user);
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
      }
    }
  });

  exports['default'] = login;
});
define('kalebr-frontend/controllers/questions', ['exports', 'ember'], function (exports, _ember) {
  var questions;

  questions = _ember['default'].Controller.extend({
    actions: {
      toggleOptions: function toggleOptions(question) {
        question.set('showOptions', !question.get('showOptions'));
        return false;
      },
      deleteRecord: function deleteRecord(record) {
        return record.get('content').destroyRecord();
      }
    }
  });

  exports['default'] = questions;
});
define('kalebr-frontend/controllers/questions/edit', ['exports', 'ember', 'kalebr-frontend/controllers/questions/new'], function (exports, _ember, _kalebrFrontendControllersQuestionsNew) {
  var questionEdit;

  questionEdit = _kalebrFrontendControllersQuestionsNew['default'].extend();

  exports['default'] = questionEdit;
});
define('kalebr-frontend/controllers/questions/new', ['exports', 'ember'], function (exports, _ember) {
  var questionNew;

  questionNew = _ember['default'].Controller.extend({
    invalidOptionsMsg: 'Min. 2 Options Required',
    optionsValid: (function () {
      var optionCount;
      optionCount = 0;
      this.get('model.options').forEach(function (option) {
        if (option.get('statement.length') > 0) {
          return optionCount += 1;
        }
      });
      return optionCount >= 2;
    }).property('model.options.@each.statement'),
    markBlankOptionsToBeDeleted: function markBlankOptionsToBeDeleted() {
      return this.get('model.options').forEach(function (option) {
        if (option.get('statement.length') === void 0) {
          return option.set('_destroy', true);
        }
      });
    },
    actions: {
      createNewQuestion: function createNewQuestion() {
        var self;
        self = this;
        if (this.get('model.isValid') && this.get('optionsValid')) {
          this.markBlankOptionsToBeDeleted();
          this.set('showErrors', false);
          this.get('model').save().then(function (response) {
            return self.transitionToRoute('questions');
          });
        } else {
          this.set('showErrors', true);
        }
        return false;
      }
    }
  });

  exports['default'] = questionNew;
});
define('kalebr-frontend/controllers/users', ['exports', 'ember'], function (exports, _ember) {
  var users;

  users = _ember['default'].Controller.extend({
    actions: {
      deleteRecord: function deleteRecord(record) {
        return record.destroyRecord();
      }
    }
  });

  exports['default'] = users;
});
define('kalebr-frontend/controllers/users/edit', ['exports', 'ember', 'kalebr-frontend/controllers/users/new'], function (exports, _ember, _kalebrFrontendControllersUsersNew) {
  var userEdit;

  userEdit = _kalebrFrontendControllersUsersNew['default'].extend();

  exports['default'] = userEdit;
});
define('kalebr-frontend/controllers/users/new', ['exports', 'ember'], function (exports, _ember) {
  var userNew;

  userNew = _ember['default'].Controller.extend({
    invalidPasswordMsg: 'Password should be of Min. 6 Chars',
    checkPasswordValidity: function checkPasswordValidity() {
      var validity;
      validity = false;
      if (this.get('model.id')) {
        if (this.get('model.password') === void 0 || this.get('model.password.length') >= 6 || this.get('model.password.length') === 0) {
          validity = true;
        }
      } else if (this.get('model.password.length') >= 6) {
        validity = true;
      }
      this.set('passwordValid', validity);
      return validity;
    },
    actions: {
      createNewUser: function createNewUser() {
        var self;
        self = this;
        if (this.get('model.isValid') && this.checkPasswordValidity()) {
          this.set('showErrors', false);
          this.get('model').save().then(function (response) {
            return self.transitionToRoute('questions');
          });
        } else {
          this.set('showErrors', true);
        }
        return false;
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
define('kalebr-frontend/initializers/session', ['exports'], function (exports) {
  var initialize, session;

  initialize = function (container, application) {
    application.inject('route', 'session', 'service:session');
    application.inject('controller', 'session', 'service:session');
  };

  session = {
    name: 'session',
    initialize: initialize
  };

  exports['default'] = session;
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
define('kalebr-frontend/models/option', ['exports', 'ember-data'], function (exports, _emberData) {
  var optionModel;

  optionModel = _emberData['default'].Model.extend({
    statement: _emberData['default'].attr('string'),
    _destroy: _emberData['default'].attr('boolean', {
      defaultValue: false
    })
  });

  exports['default'] = optionModel;
});
define('kalebr-frontend/models/question', ['exports', 'ember-data', 'ember-validations'], function (exports, _emberData, _emberValidations) {
  var questionModel;

  questionModel = _emberData['default'].Model.extend(_emberValidations['default'], {
    statement: _emberData['default'].attr('string'),
    options: _emberData['default'].hasMany('option'),
    validations: {
      statement: {
        presence: true
      }
    }
  });

  exports['default'] = questionModel;
});
define('kalebr-frontend/models/user', ['exports', 'ember-data', 'ember-validations'], function (exports, _emberData, _emberValidations) {
  var userModel;

  userModel = _emberData['default'].Model.extend(_emberValidations['default'], {
    firstname: _emberData['default'].attr('string'),
    lastname: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    validations: {
      firstname: {
        presence: true
      },
      email: {
        presence: true,
        format: {
          "with": /^((?!\.)[a-z0-9._%+-]+(?!\.)\w)@[a-z0-9-]+\.[a-z.]{1,5}(?!\.)\w$/,
          message: 'Not a valid email'
        }
      }
    }
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
    this.route('questions/new');
    this.route('questions/edit', {
      path: 'questions/:id/edit'
    });
    return this.route('users/edit', {
      path: 'users/:id/edit'
    });
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
          self.get('session').set('currentUser', data.user);
          return console.log(data.user.email, 'logged in');
        },
        error: function error(msg) {
          console.log(msg.responseJSON.errors[0]);
          return self.replaceWith('login');
        }
      });
    },
    actions: {
      logout: function logout() {
        console.log('logging out ', this.get('session.currentUser.email'));
        this.get('session').set('currentUser', void 0);
        window.localStorage.setItem('auth_token', null);
        return this.replaceWith('login');
      }
    }
  });

  exports['default'] = applicationRoute;
});
define('kalebr-frontend/routes/login', ['exports', 'ember'], function (exports, _ember) {
  var login;

  login = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      controller.reset();
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
      model = model.map(function (question) {
        return Em.ObjectProxy.create({
          content: question,
          showOptions: false
        });
      });
      return controller.set('model', model);
    }
  });

  exports['default'] = questionsRoute;
});
define('kalebr-frontend/routes/questions/edit', ['exports', 'ember'], function (exports, _ember) {
  var questionEdit;

  questionEdit = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('question', params.id);
    },
    renderTemplate: function renderTemplate() {
      return this.render('questions.new', {
        controller: 'questions.edit'
      });
    },
    setupController: function setupController(controller, model) {
      var i, j, noOfOptions, option, ref, results;
      controller.set('model', model);
      noOfOptions = model.get('options.length');
      if (noOfOptions < 4) {
        results = [];
        for (i = j = 1, ref = 4 - noOfOptions; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          option = this.get('store').createRecord('option');
          results.push(model.get('options').pushObject(option));
        }
        return results;
      }
    }
  });

  exports['default'] = questionEdit;
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
define('kalebr-frontend/routes/users/edit', ['exports', 'ember'], function (exports, _ember) {
  var userEdit;

  userEdit = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('user', params.id);
    },
    renderTemplate: function renderTemplate() {
      return this.render('users.new', {
        controller: 'users.edit'
      });
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = userEdit;
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
define('kalebr-frontend/services/session', ['exports', 'ember'], function (exports, _ember) {
  var session;

  session = _ember['default'].Service.extend({});

  exports['default'] = session;
});
define('kalebr-frontend/services/validations', ['exports', 'ember'], function (exports, _ember) {

  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });
});
define("kalebr-frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 20
              },
              "end": {
                "line": 6,
                "column": 47
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
                "line": 7,
                "column": 20
              },
              "end": {
                "line": 7,
                "column": 55
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
              "line": 5,
              "column": 12
            },
            "end": {
              "line": 9,
              "column": 12
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
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("Sign Out");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          morphs[2] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["block", "link-to", ["users"], [], 0, null, ["loc", [null, [6, 20], [6, 59]]]], ["block", "link-to", ["questions"], [], 1, null, ["loc", [null, [7, 20], [7, 67]]]], ["element", "action", ["logout"], [], ["loc", [null, [8, 20], [8, 39]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
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
              "column": 12
            },
            "end": {
              "line": 11,
              "column": 12
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
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("Sign In");
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
            "line": 18,
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
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
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
        var element1 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.currentUser", ["loc", [null, [5, 18], [5, 37]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [5, 12], [11, 19]]]], ["content", "outlet", ["loc", [null, [14, 10], [14, 20]]], 0, 0, 0, 0]],
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
                "line": 15,
                "column": 12
              },
              "end": {
                "line": 15,
                "column": 58
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
            var el1 = dom.createTextNode(" Edit");
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
                "line": 19,
                "column": 22
              },
              "end": {
                "line": 19,
                "column": 58
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
            var el1 = dom.createTextNode("▲ ");
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
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 58
              },
              "end": {
                "line": 19,
                "column": 74
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
            var el1 = dom.createTextNode("▼ ");
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
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 10
              },
              "end": {
                "line": 28,
                "column": 10
              }
            },
            "moduleName": "kalebr-frontend/templates/questions.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "single-option");
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(".\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["inline", "adder", [["get", "index", ["loc", [null, [25, 32], [25, 37]]], 0, 0, 0, 0], 1], [], ["loc", [null, [25, 24], [25, 41]]], 0, 0], ["content", "option.statement", ["loc", [null, [26, 18], [26, 38]]], 0, 0, 0, 0]],
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
              "line": 10,
              "column": 4
            },
            "end": {
              "line": 31,
              "column": 4
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
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flex padtb1rem");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width5pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width65pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width10pc");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width10pc");
          var el3 = dom.createTextNode("Del");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width20pc");
          var el3 = dom.createTextNode("\n              Options ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "thick-border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [7]);
          var element3 = dom.childAt(element1, [9]);
          var element4 = dom.childAt(fragment, [3]);
          var morphs = new Array(8);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
          morphs[3] = dom.createElementMorph(element2);
          morphs[4] = dom.createElementMorph(element3);
          morphs[5] = dom.createMorphAt(element3, 1, 1);
          morphs[6] = dom.createAttrMorph(element4, 'class');
          morphs[7] = dom.createMorphAt(element4, 1, 1);
          return morphs;
        },
        statements: [["content", "question.id", ["loc", [null, [12, 34], [12, 49]]], 0, 0, 0, 0], ["content", "question.statement", ["loc", [null, [13, 33], [13, 55]]], 0, 0, 0, 0], ["block", "link-to", ["questions/edit", ["get", "question.id", ["loc", [null, [15, 40], [15, 51]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 12], [15, 70]]]], ["element", "action", ["deleteRecord", ["get", "question", ["loc", [null, [17, 57], [17, 65]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 33], [17, 67]]], 0, 0], ["element", "action", ["toggleOptions", ["get", "question", ["loc", [null, [18, 58], [18, 66]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 33], [18, 68]]], 0, 0], ["block", "if", [["get", "question.showOptions", ["loc", [null, [19, 28], [19, 48]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [19, 22], [19, 81]]]], ["attribute", "class", ["concat", ["flex padtb1rem ", ["subexpr", "unless", [["get", "question.showOptions", ["loc", [null, [22, 44], [22, 64]]], 0, 0, 0, 0], "hide"], [], ["loc", [null, [22, 35], [22, 73]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "question.options", ["loc", [null, [23, 18], [23, 34]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [23, 10], [28, 19]]]]],
        locals: ["question"],
        templates: [child0, child1, child2, child3]
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
            "line": 34,
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
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "questions-list users-list");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
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
        var element5 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["questions/new"], [], 0, null, ["loc", [null, [3, 8], [7, 20]]]], ["block", "each", [["get", "model", ["loc", [null, [10, 12], [10, 17]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [10, 4], [31, 13]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kalebr-frontend/templates/questions/edit", ["exports"], function (exports) {
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
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/questions/edit.hbs"
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
define("kalebr-frontend/templates/questions/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 8
            },
            "end": {
              "line": 8,
              "column": 8
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
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "errors");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.statement.firstObject", ["loc", [null, [6, 14], [6, 52]]], 0, 0, 0, 0]],
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
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 17,
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
        statements: [["inline", "adder", [["get", "index", ["loc", [null, [14, 53], [14, 58]]], 0, 0, 0, 0], 1], [], ["loc", [null, [14, 45], [14, 62]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "option.statement", ["loc", [null, [15, 24], [15, 40]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 10], [15, 42]]], 0, 0]],
        locals: ["option", "index"],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 21,
                "column": 12
              },
              "end": {
                "line": 23,
                "column": 12
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
            var el1 = dom.createTextNode("              ");
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
          statements: [["content", "invalidOptionsMsg", ["loc", [null, [22, 14], [22, 35]]], 0, 0, 0, 0]],
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
              "line": 19,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
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
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "errors");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "unless", [["get", "optionsValid", ["loc", [null, [21, 22], [21, 34]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [21, 12], [23, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 6
            },
            "end": {
              "line": 30,
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
          var el1 = dom.createTextNode("          Update\n");
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
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 6
            },
            "end": {
              "line": 32,
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
          var el1 = dom.createTextNode("          Create\n");
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
            "line": 34,
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
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
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "button width15rem");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [7]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element2, 3, 3);
        morphs[1] = dom.createMorphAt(element2, 5, 5);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 5, 5);
        morphs[4] = dom.createElementMorph(element3);
        morphs[5] = dom.createMorphAt(element3, 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "showErrors", ["loc", [null, [4, 14], [4, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "model.statement", ["loc", [null, [9, 23], [9, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", "80", "rows", "6"], ["loc", [null, [9, 6], [9, 59]]], 0, 0], ["block", "each", [["get", "model.options", ["loc", [null, [12, 12], [12, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [12, 4], [17, 13]]]], ["block", "if", [["get", "showErrors", ["loc", [null, [19, 10], [19, 20]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [19, 4], [25, 11]]]], ["element", "action", ["createNewQuestion"], [], ["loc", [null, [27, 35], [27, 65]]], 0, 0], ["block", "if", [["get", "model.id", ["loc", [null, [28, 12], [28, 20]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [28, 6], [32, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
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
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 37
              },
              "end": {
                "line": 15,
                "column": 74
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
            var el1 = dom.createTextNode("Edit");
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
              "line": 10,
              "column": 6
            },
            "end": {
              "line": 18,
              "column": 6
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
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "single-user-row flex");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width10pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width30pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width30pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width10pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width10pc");
          var el3 = dom.createTextNode("Destroy");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element0, [9]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element1, 0, 0);
          morphs[2] = dom.createMorphAt(element1, 2, 2);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
          morphs[5] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["content", "user.id", ["loc", [null, [12, 37], [12, 48]]], 0, 0, 0, 0], ["content", "user.firstname", ["loc", [null, [13, 37], [13, 55]]], 0, 0, 0, 0], ["content", "user.lastname", ["loc", [null, [13, 56], [13, 73]]], 0, 0, 0, 0], ["content", "user.email", ["loc", [null, [14, 37], [14, 51]]], 0, 0, 0, 0], ["block", "link-to", ["users/edit", ["get", "user.id", ["loc", [null, [15, 61], [15, 68]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 37], [15, 86]]]], ["element", "action", ["deleteRecord", ["get", "user", ["loc", [null, [16, 61], [16, 65]]], 0, 0, 0, 0]], [], ["loc", [null, [16, 37], [16, 67]]], 0, 0]],
        locals: ["user"],
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
            "line": 21,
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
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "users-list");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
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
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["users/new"], [], 0, null, ["loc", [null, [3, 8], [7, 20]]]], ["block", "each", [["get", "model", ["loc", [null, [10, 14], [10, 19]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [10, 6], [18, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("kalebr-frontend/templates/users/edit", ["exports"], function (exports) {
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
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/users/edit.hbs"
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
define("kalebr-frontend/templates/users/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 6
            },
            "end": {
              "line": 11,
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
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "errors");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.firstname.firstObject", ["loc", [null, [9, 12], [9, 50]]], 0, 0, 0, 0]],
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
              "line": 23,
              "column": 8
            },
            "end": {
              "line": 27,
              "column": 8
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
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "errors");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "model.errors.email.firstObject", ["loc", [null, [25, 14], [25, 48]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 10
              },
              "end": {
                "line": 38,
                "column": 10
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
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "errors");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "invalidPasswordMsg", ["loc", [null, [36, 16], [36, 38]]], 0, 0, 0, 0]],
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
              "line": 33,
              "column": 8
            },
            "end": {
              "line": 39,
              "column": 8
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "unless", [["get", "passwordValid", ["loc", [null, [34, 20], [34, 33]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [34, 10], [38, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 8
            },
            "end": {
              "line": 46,
              "column": 8
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
          var el1 = dom.createTextNode("          Update\n");
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
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 8
            },
            "end": {
              "line": 48,
              "column": 8
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
          var el1 = dom.createTextNode("            Create\n");
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
            "line": 51,
            "column": 0
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
        var el4 = dom.createTextNode("\n            First Name\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
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
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5]);
        var element3 = dom.childAt(element0, [7]);
        var element4 = dom.childAt(element0, [9]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(element1, 5, 5);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[4] = dom.createMorphAt(element2, 3, 3);
        morphs[5] = dom.createMorphAt(element2, 5, 5);
        morphs[6] = dom.createMorphAt(element3, 3, 3);
        morphs[7] = dom.createMorphAt(element3, 5, 5);
        morphs[8] = dom.createElementMorph(element4);
        morphs[9] = dom.createMorphAt(element4, 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0], ["block", "if", [["get", "showErrors", ["loc", [null, [7, 12], [7, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 6], [11, 13]]]], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [13, 21], [13, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model.firstname", ["loc", [null, [13, 32], [13, 47]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [13, 8], [13, 49]]], 0, 0], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [18, 21], [18, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model.lastname", ["loc", [null, [18, 32], [18, 46]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [18, 8], [18, 48]]], 0, 0], ["block", "if", [["get", "showErrors", ["loc", [null, [23, 14], [23, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [23, 8], [27, 15]]]], ["inline", "input", [], ["type", ["subexpr", "@mut", [["get", "text", ["loc", [null, [28, 21], [28, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [28, 32], [28, 43]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [28, 8], [28, 45]]], 0, 0], ["block", "if", [["get", "showErrors", ["loc", [null, [33, 14], [33, 24]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [33, 8], [39, 15]]]], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [40, 40], [40, 54]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [40, 8], [40, 56]]], 0, 0], ["element", "action", ["createNewUser"], [], ["loc", [null, [43, 35], [43, 61]]], 0, 0], ["block", "if", [["get", "model.id", ["loc", [null, [44, 14], [44, 22]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [44, 8], [48, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
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
