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
define('kalebr-frontend/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {});

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
/* jshint ignore:start */

require('kalebr-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
