'use strict';

define('kalebr-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('kalebr-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('kalebr-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'kalebr-frontend/tests/helpers/start-app', 'kalebr-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _kalebrFrontendTestsHelpersStartApp, _kalebrFrontendTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _kalebrFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _kalebrFrontendTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('kalebr-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('kalebr-frontend/tests/helpers/resolver', ['exports', 'kalebr-frontend/resolver', 'kalebr-frontend/config/environment'], function (exports, _kalebrFrontendResolver, _kalebrFrontendConfigEnvironment) {

  var resolver = _kalebrFrontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _kalebrFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _kalebrFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('kalebr-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('kalebr-frontend/tests/helpers/start-app', ['exports', 'ember', 'kalebr-frontend/app', 'kalebr-frontend/config/environment'], function (exports, _ember, _kalebrFrontendApp, _kalebrFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _kalebrFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _kalebrFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('kalebr-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('kalebr-frontend/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = _ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    (0, _emberQunit.test)(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }

  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }
});
define('kalebr-frontend/tests/test-helper', ['exports', 'kalebr-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _kalebrFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_kalebrFrontendTestsHelpersResolver['default']);
});
define('kalebr-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('kalebr-frontend/tests/unit/helpers/adder-test', ['exports', 'kalebr-frontend/helpers/adder', 'qunit'], function (exports, _kalebrFrontendHelpersAdder, _qunit) {

  (0, _qunit.module)('Unit | Helper | adder');

  (0, _qunit.test)('it works', function (assert) {
    var result;
    result = (0, _kalebrFrontendHelpersAdder.adder)(42);
    return assert.ok(result);
  });
});
define('kalebr-frontend/tests/unit/initializers/session-test', ['exports', 'ember', 'kalebr-frontend/initializers/session', 'qunit'], function (exports, _ember, _kalebrFrontendInitializersSession, _qunit) {
  var application, registry;

  application = null;

  registry = null;

  (0, _qunit.module)('Unit | Initializer | session', {
    beforeEach: function beforeEach() {
      return _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        registry = application.registry;
        return application.deferReadiness();
      });
    }
  });

  (0, _qunit.test)('it works', function (assert) {
    (0, _kalebrFrontendInitializersSession.initialize)(registry, application);
    return assert.ok(true);
  });
});
define('kalebr-frontend/tests/unit/models/performance-review-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('performance-review', 'Unit | Model | performance review', {
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });
});
define('kalebr-frontend/tests/unit/models/questions-option-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('questions-option', 'Unit | Model | questions option', {
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });
});
define('kalebr-frontend/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model;
    model = this.subject();
    return assert.ok(!!model);
  });
});
define('kalebr-frontend/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/questions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:questions', 'Unit | Route | questions', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/questions/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:questions/edit', 'Unit | Route | questions/edit', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/questions/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:questions/new', 'Unit | Route | questions/new', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/edit', 'Unit | Route | users/edit', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/new', 'Unit | Route | users/new', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/others-performance-reviews-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/others-performance-reviews', 'Unit | Route | users/others performance reviews', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/performance-review-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/performance-review', 'Unit | Route | users/performance review', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/review-comment-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/review-comment', 'Unit | Route | users/review comment', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/review-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/review', 'Unit | Route | users/review', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/routes/users/reviews-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users/reviews', 'Unit | Route | users/reviews', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var route;
    route = this.subject();
    return assert.ok(route);
  });
});
define('kalebr-frontend/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    needs: ['serializer:application']
  });

  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record, serializedRecord;
    record = this.subject();
    serializedRecord = record.serialize();
    return assert.ok(serializedRecord);
  });
});
define('kalebr-frontend/tests/unit/services/session-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:session', 'Unit | Service | session', {});

  (0, _emberQunit.test)('it exists', function (assert) {
    var service;
    service = this.subject();
    return assert.ok(service);
  });
});
/* jshint ignore:start */

require('kalebr-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
