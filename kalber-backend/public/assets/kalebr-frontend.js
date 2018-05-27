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
define('kalebr-frontend/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('kalebr-frontend/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('kalebr-frontend/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _emberBootstrapComponentsBsAccordionItemBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemBody['default'];
    }
  });
});
define('kalebr-frontend/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _emberBootstrapComponentsBsAccordionItemTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemTitle['default'];
    }
  });
});
define('kalebr-frontend/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('kalebr-frontend/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('kalebr-frontend/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('kalebr-frontend/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('kalebr-frontend/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _emberBootstrapComponentsBsCarousel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCarousel['default'];
    }
  });
});
define('kalebr-frontend/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _emberBootstrapComponentsBsCarouselSlide) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCarouselSlide['default'];
    }
  });
});
define('kalebr-frontend/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _emberBootstrapComponentsBsDropdownMenuLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuLinkTo['default'];
    }
  });
});
define('kalebr-frontend/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _emberBootstrapComponentsBsFormElementHelpText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementHelpText['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('kalebr-frontend/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('kalebr-frontend/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('kalebr-frontend/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('kalebr-frontend/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('kalebr-frontend/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('kalebr-frontend/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('kalebr-frontend/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('kalebr-frontend/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _emberBootstrapComponentsBsNavbarLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarLinkTo['default'];
    }
  });
});
define('kalebr-frontend/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('kalebr-frontend/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('kalebr-frontend/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('kalebr-frontend/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('kalebr-frontend/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('kalebr-frontend/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('kalebr-frontend/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('kalebr-frontend/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('kalebr-frontend/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('kalebr-frontend/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('kalebr-frontend/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperComponentsEmberPopperTargetingParent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPopperComponentsEmberPopperTargetingParent['default'];
    }
  });
});
define('kalebr-frontend/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopperComponentsEmberPopper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPopperComponentsEmberPopper['default'];
    }
  });
});
define('kalebr-frontend/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
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
              var currUser, normalizedData;
              if (data.user && data.auth_token) {
                window.localStorage.setItem('auth_token', data.auth_token);
                normalizedData = self.store.normalize('user', data.user);
                currUser = self.store.push(normalizedData);
                return currUser.reload().then(function (user) {
                  self.get('session').set('currentUser', user);
                  return self.transitionToRoute('home');
                });
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
        var question;
        question = record.get('content');
        question.destroyRecord();
        return this.get('model').removeObject(record);
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
          this.get('model').save().then(function () {
            var i, index, j, length, option, ref;
            index = 0;
            length = self.get('model.options.length');
            for (i = j = 0, ref = length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              option = self.get('model.options').objectAt(index);
              if (!Em.isEmpty(option) && Em.isEmpty(option.get("id"))) {
                self.get('model.options').objectAt(index).destroyRecord();
              } else {
                index = index + 1;
              }
            }
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
            return self.transitionToRoute('users');
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
define('kalebr-frontend/controllers/users/performance-review', ['exports', 'ember'], function (exports, _ember) {
  var userPerformanceReview;

  userPerformanceReview = _ember['default'].Controller.extend({
    actions: {
      createPerformanceReview: function createPerformanceReview() {
        var self, users;
        users = this.get('users').filter(function (user) {
          return user.selected;
        });
        self = this;
        if (users.length > 0) {
          this.get('model.reviewers').clear();
          users.forEach(function (user) {
            return self.get('model').get('reviewers').pushObject(user.content);
          });
          this.get('model').save().then(function (response) {
            return self.transitionToRoute('users/reviews', self.get('model.reviewee.id'));
          });
        } else {
          alert('Please Select at least one reviewers');
        }
        return false;
      }
    }
  });

  exports['default'] = userPerformanceReview;
});
define('kalebr-frontend/controllers/users/review-comment', ['exports', 'ember', 'kalebr-frontend/utils/constants'], function (exports, _ember, _kalebrFrontendUtilsConstants) {
  var userReviewComment;

  userReviewComment = _ember['default'].Controller.extend({
    comment: '',
    actions: {
      submitComment: function submitComment() {
        var self, url;
        self = this;
        url = _kalebrFrontendUtilsConstants['default'].HOST + _kalebrFrontendUtilsConstants['default'].NAMESPACE + '/reviews/' + this.get('model.id') + '/comment';
        return $.ajax({
          type: 'POST',
          url: url,
          data: {
            comment: this.get('comment')
          },
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem('auth_token')
          },
          success: function success(response) {
            return self.get('model').set('feedback', self.get('comment'));
          }
        });
      }
    }
  });

  exports['default'] = userReviewComment;
});
define('kalebr-frontend/controllers/users/review', ['exports', 'ember'], function (exports, _ember) {
  var userReview;

  userReview = _ember['default'].Controller.extend({
    checkIfAllQuestionsAttempted: function checkIfAllQuestionsAttempted() {
      var allAttempted, self;
      self = this;
      allAttempted = true;
      this.get('questions').forEach(function (question) {
        if (!question.get('attempted')) {
          self.set('showErrors', true);
          return allAttempted = false;
        }
      });
      return allAttempted;
    },
    actions: {
      selectOption: function selectOption(question, option) {
        question.set('attempted', true);
        question.get('options').forEach(function (opt) {
          return opt.set('selected', false);
        });
        option.set('selected', true);
        return false;
      },
      submitReview: function submitReview() {
        var self;
        self = this;
        if (this.checkIfAllQuestionsAttempted()) {
          this.get('questions').forEach(function (question) {
            var questionsAnswer, selectedOption;
            selectedOption = void 0;
            question.get('options').forEach(function (option) {
              if (option.get('selected')) {
                return selectedOption = option;
              }
            });
            if (selectedOption) {
              questionsAnswer = self.get('store').createRecord('questions-option', {
                option: selectedOption,
                question: question.get('content')
              });
              return self.get('model').get('questionsOptions').pushObject(questionsAnswer);
            }
          });
          return this.get('model').save().then(function (response) {
            self.get('reviewee').reload();
            return self.transitionToRoute('users/othersPerformanceReviews', self.get('session.currentUser.id'));
          });
        }
      }
    }
  });

  exports['default'] = userReview;
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
define('kalebr-frontend/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('kalebr-frontend/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('kalebr-frontend/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _emberConcurrencyHelpersCancelAll) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyHelpersCancelAll['default'];
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyHelpersCancelAll.cancelAll;
    }
  });
});
define('kalebr-frontend/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _emberConcurrencyHelpersPerform) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyHelpersPerform['default'];
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyHelpersPerform.perform;
    }
  });
});
define('kalebr-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('kalebr-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('kalebr-frontend/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _emberConcurrencyHelpersTask) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyHelpersTask['default'];
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyHelpersTask.task;
    }
  });
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
define('kalebr-frontend/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrencyInitializersEmberConcurrency) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyInitializersEmberConcurrency['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberConcurrencyInitializersEmberConcurrency.initialize;
    }
  });
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
define('kalebr-frontend/initializers/load-bootstrap-config', ['exports', 'kalebr-frontend/config/environment', 'ember-bootstrap/config'], function (exports, _kalebrFrontendConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_kalebrFrontendConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
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
    selected: _emberData['default'].attr('boolean', {
      defaultValue: false
    }),
    _destroy: _emberData['default'].attr('boolean', {
      defaultValue: false
    })
  });

  exports['default'] = optionModel;
});
define('kalebr-frontend/models/performance-review', ['exports', 'ember-data'], function (exports, _emberData) {
  var performanceReviewModel;

  performanceReviewModel = _emberData['default'].Model.extend({
    reviewee: _emberData['default'].belongsTo('user', {
      async: true
    }),
    reviewers: _emberData['default'].hasMany('user', {
      async: true,
      inverse: null
    })
  });

  exports['default'] = performanceReviewModel;
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
define('kalebr-frontend/models/questions-option', ['exports', 'ember-data'], function (exports, _emberData) {
  var questionsOption;

  questionsOption = _emberData['default'].Model.extend({
    review: _emberData['default'].belongsTo('review'),
    question: _emberData['default'].belongsTo('question'),
    option: _emberData['default'].belongsTo('option')
  });

  exports['default'] = questionsOption;
});
define('kalebr-frontend/models/review', ['exports', 'ember-data'], function (exports, _emberData) {
  var reviewModel;

  reviewModel = _emberData['default'].Model.extend({
    feedback: _emberData['default'].attr('string'),
    performanceReview: _emberData['default'].belongsTo('performanceReview'),
    reviewer: _emberData['default'].belongsTo('user', {
      inverse: null
    }),
    questionsOptions: _emberData['default'].hasMany('questions-option')
  });

  exports['default'] = reviewModel;
});
define('kalebr-frontend/models/user', ['exports', 'ember-data', 'ember-validations'], function (exports, _emberData, _emberValidations) {
  var userModel;

  userModel = _emberData['default'].Model.extend(_emberValidations['default'], {
    firstname: _emberData['default'].attr('string'),
    lastname: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    admin: _emberData['default'].attr('boolean'),
    selfPerformanceReview: _emberData['default'].belongsTo('performance-review', {
      inverse: 'reviewee'
    }),
    othersPerformanceReviews: _emberData['default'].hasMany('performance-review', {
      inverse: null
    }),
    scopedReview: _emberData['default'].belongsTo('review', {
      inverse: null
    }),
    reviews: _emberData['default'].hasMany('review', {
      inverse: null
    }),
    fullname: (function () {
      return this.get('firstname') + ' ' + this.get('lastname');
    }).property('firstname', 'lastname'),
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
    this.route('users', {
      path: '/users'
    });
    this.route('login', {
      path: '/'
    });
    this.route('questions');
    this.route('questions/new');
    this.route('questions/edit', {
      path: 'questions/:id/edit'
    });
    this.route('users/new');
    this.route('users/edit', {
      path: 'users/:id/edit'
    });
    this.route('users/reviews', {
      path: 'users/:id/reviews'
    });
    this.route('users/review', {
      path: 'users/:id/review'
    });
    this.route('users/performanceReview', {
      path: 'users/:id/performanceReview'
    });
    this.route('users/othersPerformanceReviews', {
      path: 'users/:id/othersPerformanceReviews'
    });
    this.route('home');
    return this.route('users/reviewComment', {
      path: 'users/:user_id/reviews/:review_id/comment'
    });
  });

  exports['default'] = Router;
});
define('kalebr-frontend/routes/application', ['exports', 'ember', 'kalebr-frontend/utils/constants'], function (exports, _ember, _kalebrFrontendUtilsConstants) {
  var applicationRoute;

  applicationRoute = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
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
          var currUser, normalizedData;
          if (!data.errors) {
            normalizedData = self.store.normalize('user', data.user);
            currUser = self.store.push(normalizedData);
            self.get('session').set('currentUser', currUser);
            return console.log(data.user.email, 'logged in');
          } else {
            console.log(data.errors[0]);
            return self.replaceWith('login');
          }
        },
        error: function error(msg) {
          console.log(data.errors[0]);
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
define('kalebr-frontend/routes/home', ['exports', 'ember'], function (exports, _ember) {
  var home;

  home = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      if (!this.get('session.currentUser')) {
        return this.transitionTo('login');
      }
    }
  });

  exports['default'] = home;
});
define('kalebr-frontend/routes/login', ['exports', 'ember'], function (exports, _ember) {
  var login;

  login = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      if (this.get('session.currentUser')) {
        return this.transitionTo('home');
      }
    },
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
      return this.get('store').query('question', {
        all: true
      }).then(function (questions) {
        return questions;
      });
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
define('kalebr-frontend/routes/users/others-performance-reviews', ['exports', 'ember'], function (exports, _ember) {
  var othersPerformanceReviewsRoute;

  othersPerformanceReviewsRoute = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('session.currentUser.othersPerformanceReviews');
    },
    setupController: function setupController(controller, model) {
      return controller.set('model', model);
    }
  });

  exports['default'] = othersPerformanceReviewsRoute;
});
define('kalebr-frontend/routes/users/performance-review', ['exports', 'ember'], function (exports, _ember) {
  var userPerformanceReviewRoute,
      indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  userPerformanceReviewRoute = _ember['default'].Route.extend({
    model: function model(params) {
      var self;
      self = this;
      return this.get('store').query('user', {}).then(function (users) {
        return self.get('store').findRecord('user', params.id).then(function (reviewee) {
          self.set('users', users.toArray().removeObject(reviewee));
          if (!reviewee.get('selfPerformanceReview.id')) {
            return self.get('store').createRecord('performance-review', {
              reviewee: reviewee
            });
          } else {
            return reviewee.get('selfPerformanceReview');
          }
        });
      });
    },
    setupController: function setupController(controller, model) {
      var reviewerIds;
      reviewerIds = model.get('reviewers').map(function (reviewer) {
        return reviewer.id;
      });
      controller.set('users', this.get('users').map(function (user) {
        var ref;
        return Em.ObjectProxy.create({
          content: user,
          selected: model.get('id') && (ref = user.id, indexOf.call(reviewerIds, ref) >= 0)
        });
      }));
      return controller.set('model', model);
    }
  });

  exports['default'] = userPerformanceReviewRoute;
});
define('kalebr-frontend/routes/users/review-comment', ['exports', 'ember'], function (exports, _ember) {
  var userReviewComment;

  userReviewComment = _ember['default'].Route.extend({
    model: function model(params) {
      var self;
      self = this;
      return this.get('store').findAll('question', {
        review_id: params.review_id
      }).then(function (response) {
        self.set('questions', response);
        return self.get('store').findRecord('review', params.review_id);
      });
    },
    setupController: function setupController(controller, model) {
      var self;
      self = this;
      this.get('questions').forEach(function (question) {
        return question.get('options').forEach(function (option) {
          return model.get('questionsOptions').forEach(function (questionOption) {
            if (questionOption.get('question.id') === question.id) {
              if (option.id === questionOption.get('option.id')) {
                return option.set('selected', true);
              }
            }
          });
        });
      });
      controller.set('questions', this.get('questions'));
      return controller.set('model', model);
    },
    exit: function exit() {
      return this.get('questions').forEach(function (question) {
        return question.get('options').forEach(function (option) {
          return option.set('selected', false);
        });
      });
    }
  });

  exports['default'] = userReviewComment;
});
define('kalebr-frontend/routes/users/review', ['exports', 'ember'], function (exports, _ember) {
  var userReview;

  userReview = _ember['default'].Route.extend({
    model: function model(params) {
      var self;
      self = this;
      return this.get('store').findAll('question').then(function (response) {
        self.set('questions', response);
        return self.get('store').findRecord('user', params.id).then(function (reviewee) {
          self.set('reviewee', reviewee);
          if (self.get('session.currentUser.scopedReview.id')) {
            return self.get('session.currentUser.scopedReview');
          } else {
            return self.get('store').createRecord('review', {
              reviewer: self.get('session.currentUser'),
              performanceReview: self.get('reviewee.selfPerformanceReview')
            });
          }
        });
      });
    },
    setupController: function setupController(controller, model) {
      controller.set('questions', this.get('questions').map(function (question) {
        return Em.ObjectProxy.create({
          content: question,
          attempted: false
        });
      }));
      controller.set('reviewee', this.get('reviewee'));
      controller.set('model', model);
      return controller.set('showErrors', false);
    },
    exit: function exit() {
      return this.get('questions').forEach(function (question) {
        return question.get('options').forEach(function (option) {
          return option.set('selected', false);
        });
      });
    }
  });

  exports['default'] = userReview;
});
define('kalebr-frontend/routes/users/reviews', ['exports', 'ember'], function (exports, _ember) {
  var userReviews;

  userReviews = _ember['default'].Route.extend({
    model: function model(params) {
      var self;
      self = this;
      return this.get('store').findRecord('user', params.id).then(function (reviewee) {
        self.set('reviewee', reviewee);
        return reviewee.get('reviews');
      });
    },
    setupController: function setupController(controller, model) {
      controller.set('reviewee', this.get('reviewee'));
      return controller.set('model', model);
    }
  });

  exports['default'] = userReviews;
});
define('kalebr-frontend/serializers/application', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  var ApplicationSerializer;

  ApplicationSerializer = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      options: {
        embedded: 'always'
      },
      reviewers: {
        serialize: 'ids',
        deserialize: 'ids'
      },
      questionsOptions: {
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
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 16
            },
            "end": {
              "line": 4,
              "column": 39
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
          var el1 = dom.createTextNode("Home");
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
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 22
                },
                "end": {
                  "line": 7,
                  "column": 49
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
                  "line": 8,
                  "column": 22
                },
                "end": {
                  "line": 8,
                  "column": 57
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
                "line": 6,
                "column": 14
              },
              "end": {
                "line": 9,
                "column": 14
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
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
            return morphs;
          },
          statements: [["block", "link-to", ["users"], [], 0, null, ["loc", [null, [7, 22], [7, 61]]]], ["block", "link-to", ["questions"], [], 1, null, ["loc", [null, [8, 22], [8, 69]]]]],
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
                "line": 10,
                "column": 18
              },
              "end": {
                "line": 10,
                "column": 89
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
            var el1 = dom.createTextNode(" Self Perf. Reviews ");
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
                "line": 11,
                "column": 18
              },
              "end": {
                "line": 11,
                "column": 108
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
            var el1 = dom.createTextNode(" Others Perf. Reviews ");
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
              "line": 13,
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n              ");
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
          var element0 = dom.childAt(fragment, [6]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
          morphs[3] = dom.createElementMorph(element0);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "session.currentUser.admin", ["loc", [null, [6, 20], [6, 45]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 14], [9, 21]]]], ["block", "link-to", ["users/reviews", ["get", "session.currentUser.id", ["loc", [null, [10, 45], [10, 67]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [10, 18], [10, 101]]]], ["block", "link-to", ["users/othersPerformanceReviews", ["get", "session.currentUser.id", ["loc", [null, [11, 62], [11, 84]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [11, 18], [11, 120]]]], ["element", "action", ["logout"], [], ["loc", [null, [12, 18], [12, 37]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 12
            },
            "end": {
              "line": 15,
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
            "line": 22,
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
        var el5 = dom.createComment("");
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
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [4, 16], [4, 51]]]], ["block", "if", [["get", "session.currentUser", ["loc", [null, [5, 18], [5, 37]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [5, 12], [15, 19]]]], ["content", "outlet", ["loc", [null, [18, 10], [18, 20]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('kalebr-frontend/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopperTemplatesComponentsEmberPopper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPopperTemplatesComponentsEmberPopper['default'];
    }
  });
});
define("kalebr-frontend/templates/home", ["exports"], function (exports) {
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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Welcome Onboard, ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Please find links on the above navigation bars");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "session.currentUser.fullname", ["loc", [null, [2, 25], [2, 57]]], 0, 0, 0, 0]],
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
          var el3 = dom.createTextNode(".");
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
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          var el4 = dom.createTextNode("Delete");
          dom.appendChild(el3, el4);
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
          var element2 = dom.childAt(element1, [7, 1]);
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
        statements: [["content", "question.id", ["loc", [null, [12, 34], [12, 49]]], 0, 0, 0, 0], ["content", "question.statement", ["loc", [null, [13, 33], [13, 55]]], 0, 0, 0, 0], ["block", "link-to", ["questions/edit", ["get", "question.id", ["loc", [null, [15, 40], [15, 51]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 12], [15, 70]]]], ["element", "action", ["deleteRecord", ["get", "question", ["loc", [null, [17, 63], [17, 71]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 39], [17, 73]]], 0, 0], ["element", "action", ["toggleOptions", ["get", "question", ["loc", [null, [18, 58], [18, 66]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 33], [18, 68]]], 0, 0], ["block", "if", [["get", "question.showOptions", ["loc", [null, [19, 28], [19, 48]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [19, 22], [19, 81]]]], ["attribute", "class", ["concat", ["flex padtb1rem ", ["subexpr", "unless", [["get", "question.showOptions", ["loc", [null, [22, 44], [22, 64]]], 0, 0, 0, 0], "hide"], [], ["loc", [null, [22, 35], [22, 73]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "question.options", ["loc", [null, [23, 18], [23, 34]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [23, 10], [28, 19]]]]],
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
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 16
                },
                "end": {
                  "line": 16,
                  "column": 65
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
              var el1 = dom.createTextNode("Actions ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "caret");
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
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.8.3",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 19,
                      "column": 20
                    },
                    "end": {
                      "line": 19,
                      "column": 63
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
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 18,
                    "column": 18
                  },
                  "end": {
                    "line": 20,
                    "column": 18
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
                var el1 = dom.createTextNode("                    ");
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
              statements: [["block", "menu.link-to", ["users/edit", ["get", "user.id", ["loc", [null, [19, 49], [19, 56]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [19, 20], [19, 80]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 18
                  },
                  "end": {
                    "line": 23,
                    "column": 18
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
                var el1 = dom.createTextNode("                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "destroy-action");
                var el2 = dom.createTextNode("Destroy");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(1);
                morphs[0] = dom.createElementMorph(element0);
                return morphs;
              },
              statements: [["element", "action", ["deleteRecord", ["get", "user", ["loc", [null, [22, 72], [22, 76]]], 0, 0, 0, 0]], [], ["loc", [null, [22, 48], [22, 78]]], 0, 0]],
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
                      "line": 25,
                      "column": 20
                    },
                    "end": {
                      "line": 25,
                      "column": 69
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
                  var el1 = dom.createTextNode(" Reviews");
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
                    "line": 24,
                    "column": 18
                  },
                  "end": {
                    "line": 26,
                    "column": 18
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
                var el1 = dom.createTextNode("                    ");
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
              statements: [["block", "menu.link-to", ["users/reviews", ["get", "user.id", ["loc", [null, [25, 52], [25, 59]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [25, 20], [25, 86]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 17,
                  "column": 16
                },
                "end": {
                  "line": 27,
                  "column": 16
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
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "menu.item", [], [], 0, null, ["loc", [null, [18, 18], [20, 32]]]], ["block", "menu.item", [], [], 1, null, ["loc", [null, [21, 18], [23, 32]]]], ["block", "menu.item", [], [], 2, null, ["loc", [null, [24, 18], [26, 32]]]]],
            locals: ["menu"],
            templates: [child0, child1, child2]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 14
              },
              "end": {
                "line": 28,
                "column": 14
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
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "dd.button", [], [], 0, null, ["loc", [null, [16, 16], [16, 79]]]], ["block", "dd.menu", [], [], 1, null, ["loc", [null, [17, 16], [27, 28]]]]],
          locals: ["dd"],
          templates: [child0, child1]
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
              "line": 31,
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
          dom.setAttribute(el1, "class", "flex");
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
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
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
          var element2 = dom.childAt(element1, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element2, 0, 0);
          morphs[2] = dom.createMorphAt(element2, 2, 2);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
          morphs[4] = dom.createMorphAt(element1, 7, 7);
          return morphs;
        },
        statements: [["content", "user.id", ["loc", [null, [12, 37], [12, 48]]], 0, 0, 0, 0], ["content", "user.firstname", ["loc", [null, [13, 37], [13, 55]]], 0, 0, 0, 0], ["content", "user.lastname", ["loc", [null, [13, 56], [13, 73]]], 0, 0, 0, 0], ["content", "user.email", ["loc", [null, [14, 37], [14, 51]]], 0, 0, 0, 0], ["block", "bs-dropdown", [], [], 0, null, ["loc", [null, [15, 14], [28, 30]]]]],
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
            "line": 34,
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
      statements: [["block", "link-to", ["users/new"], [], 0, null, ["loc", [null, [3, 8], [7, 20]]]], ["block", "each", [["get", "model", ["loc", [null, [10, 14], [10, 19]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [10, 6], [31, 15]]]]],
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
define("kalebr-frontend/templates/users/others-performance-reviews", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 18
                },
                "end": {
                  "line": 9,
                  "column": 87
                }
              },
              "moduleName": "kalebr-frontend/templates/users/others-performance-reviews.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Go to Review");
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
                "line": 8,
                "column": 16
              },
              "end": {
                "line": 10,
                "column": 16
              }
            },
            "moduleName": "kalebr-frontend/templates/users/others-performance-reviews.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
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
          statements: [["block", "link-to", ["users/review", ["get", "performanceReview.reviewee.id", ["loc", [null, [9, 44], [9, 73]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 18], [9, 99]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 16
              },
              "end": {
                "line": 12,
                "column": 16
              }
            },
            "moduleName": "kalebr-frontend/templates/users/others-performance-reviews.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  Reviewed\n");
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
              "line": 3,
              "column": 6
            },
            "end": {
              "line": 16,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/others-performance-reviews.hbs"
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
          dom.setAttribute(el1, "class", "flex");
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
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width20pc");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("              ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
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
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "performanceReview.id", ["loc", [null, [5, 37], [5, 61]]], 0, 0, 0, 0], ["content", "performanceReview.reviewee.fullname", ["loc", [null, [6, 37], [6, 76]]], 0, 0, 0, 0], ["block", "unless", [["get", "performanceReview.reviewee.scopedReview", ["loc", [null, [8, 26], [8, 65]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [8, 16], [12, 27]]]]],
        locals: ["performanceReview"],
        templates: [child0, child1]
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
        "moduleName": "kalebr-frontend/templates/users/others-performance-reviews.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "others-performance-reviews users pad1rem");
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
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [3, 14], [3, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 6], [16, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("kalebr-frontend/templates/users/performance-review", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 6
            },
            "end": {
              "line": 16,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/performance-review.hbs"
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
          dom.setAttribute(el1, "class", "padtb5");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "mr10");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
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
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          morphs[2] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "user.selected", ["loc", [null, [13, 61], [13, 74]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [13, 29], [13, 76]]], 0, 0], ["content", "user.firstname", ["loc", [null, [14, 10], [14, 29]]], 0, 0, 0, 0], ["content", "user.lastname", ["loc", [null, [14, 30], [14, 47]]], 0, 0, 0, 0]],
        locals: ["user"],
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
              "line": 20,
              "column": 6
            },
            "end": {
              "line": 22,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/performance-review.hbs"
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
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 6
            },
            "end": {
              "line": 24,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/performance-review.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          Assign\n");
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
            "line": 26,
            "column": 6
          }
        },
        "moduleName": "kalebr-frontend/templates/users/performance-review.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "user-performance-review pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "");
        var el3 = dom.createTextNode("\n        Reviewee : ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "padtb1rem");
        var el3 = dom.createTextNode("\n        Select Reviewers\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "padtb1rem");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element1, [7]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element2, 0, 0);
        morphs[1] = dom.createMorphAt(element2, 2, 2);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[3] = dom.createElementMorph(element3);
        morphs[4] = dom.createMorphAt(element3, 1, 1);
        return morphs;
      },
      statements: [["content", "model.reviewee.firstname", ["loc", [null, [3, 25], [3, 54]]], 0, 0, 0, 0], ["content", "model.reviewee.lastname", ["loc", [null, [3, 55], [3, 82]]], 0, 0, 0, 0], ["block", "each", [["get", "users", ["loc", [null, [11, 14], [11, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [16, 15]]]], ["element", "action", ["createPerformanceReview"], [], ["loc", [null, [19, 35], [19, 71]]], 0, 0], ["block", "if", [["get", "model.id", ["loc", [null, [20, 12], [20, 20]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [20, 6], [24, 13]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("kalebr-frontend/templates/users/review-comment", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
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
                "line": 14,
                "column": 12
              }
            },
            "moduleName": "kalebr-frontend/templates/users/review-comment.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "single-option");
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "option.selected", ["loc", [null, [11, 50], [11, 65]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", true], ["loc", [null, [11, 18], [11, 81]]], 0, 0], ["content", "option.statement", ["loc", [null, [12, 18], [12, 38]]], 0, 0, 0, 0]],
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
              "line": 3,
              "column": 6
            },
            "end": {
              "line": 17,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/review-comment.hbs"
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
          dom.setAttribute(el1, "class", "flex padtb1rem");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width5pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(".");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width65pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flex padtb1rem");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "thick-border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["content", "question.id", ["loc", [null, [5, 36], [5, 51]]], 0, 0, 0, 0], ["content", "question.statement", ["loc", [null, [6, 37], [6, 59]]], 0, 0, 0, 0], ["block", "each", [["get", "question.options", ["loc", [null, [9, 20], [9, 36]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 12], [14, 21]]]]],
        locals: ["question"],
        templates: [child0]
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
              "column": 4
            },
            "end": {
              "line": 22,
              "column": 4
            }
          },
          "moduleName": "kalebr-frontend/templates/users/review-comment.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Your Comment");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.feedback", ["loc", [null, [21, 11], [21, 29]]], 0, 0, 0, 0]],
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
              "line": 22,
              "column": 4
            },
            "end": {
              "line": 30,
              "column": 4
            }
          },
          "moduleName": "kalebr-frontend/templates/users/review-comment.hbs"
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
          dom.setAttribute(el1, "class", "input-wrapper");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "input-label");
          var el3 = dom.createTextNode(" Comment ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "button width15rem");
          var el2 = dom.createTextNode("\n            Submit Comment\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          morphs[1] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "comment", ["loc", [null, [25, 27], [25, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", "6"], ["loc", [null, [25, 10], [25, 45]]], 0, 0], ["element", "action", ["submitComment"], [], ["loc", [null, [27, 39], [27, 65]]], 0, 0]],
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
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/users/review-comment.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "review questions pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "questions-list users-list");
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
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element3, 3, 3);
        return morphs;
      },
      statements: [["block", "each", [["get", "questions", ["loc", [null, [3, 14], [3, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 6], [17, 15]]]], ["block", "if", [["get", "model.feedback", ["loc", [null, [19, 10], [19, 24]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [19, 4], [30, 11]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("kalebr-frontend/templates/users/review", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 10
                },
                "end": {
                  "line": 9,
                  "column": 10
                }
              },
              "moduleName": "kalebr-frontend/templates/users/review.hbs"
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
              var el2 = dom.createTextNode("\n              * Not Attempted\n            ");
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
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 10,
                "column": 8
              }
            },
            "moduleName": "kalebr-frontend/templates/users/review.hbs"
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
          statements: [["block", "unless", [["get", "question.attempted", ["loc", [null, [5, 20], [5, 38]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 10], [9, 21]]]]],
          locals: [],
          templates: [child0]
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
                  "line": 19,
                  "column": 20
                },
                "end": {
                  "line": 21,
                  "column": 20
                }
              },
              "moduleName": "kalebr-frontend/templates/users/review.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                      ");
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
            statements: [["inline", "input", [], ["type", "checkbox", "checked", "checked"], ["loc", [null, [20, 22], [20, 65]]], 0, 0]],
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
                  "line": 21,
                  "column": 20
                },
                "end": {
                  "line": 23,
                  "column": 20
                }
              },
              "moduleName": "kalebr-frontend/templates/users/review.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                      ");
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
            statements: [["inline", "input", [], ["type", "checkbox"], ["loc", [null, [22, 22], [22, 47]]], 0, 0]],
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
                "line": 16,
                "column": 12
              },
              "end": {
                "line": 27,
                "column": 12
              }
            },
            "moduleName": "kalebr-frontend/templates/users/review.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "single-option");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createElementMorph(element1);
            morphs[1] = dom.createMorphAt(element1, 1, 1);
            morphs[2] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["element", "action", ["selectOption", ["get", "question", ["loc", [null, [18, 50], [18, 58]]], 0, 0, 0, 0], ["get", "option", ["loc", [null, [18, 59], [18, 65]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 26], [18, 67]]], 0, 0], ["block", "if", [["get", "option.selected", ["loc", [null, [19, 26], [19, 41]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [19, 20], [23, 27]]]], ["content", "option.statement", ["loc", [null, [25, 18], [25, 38]]], 0, 0, 0, 0]],
          locals: ["option"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 6
            },
            "end": {
              "line": 30,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/review.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flex padtb1rem");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width5pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(".");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width65pc");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "flex padtb1rem");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "thick-border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [2]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "showErrors", ["loc", [null, [4, 14], [4, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 8], [10, 15]]]], ["content", "question.id", ["loc", [null, [12, 36], [12, 51]]], 0, 0, 0, 0], ["content", "question.statement", ["loc", [null, [13, 37], [13, 59]]], 0, 0, 0, 0], ["block", "each", [["get", "question.options", ["loc", [null, [16, 20], [16, 36]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [16, 12], [27, 21]]]]],
        locals: ["question"],
        templates: [child0, child1]
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
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/users/review.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "review questions pad1rem");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "questions-list users-list");
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
        dom.setAttribute(el2, "class", "button width15rem");
        var el3 = dom.createTextNode("\n        Submit Review\n    ");
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
        var element4 = dom.childAt(element3, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[1] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [["block", "each", [["get", "questions", ["loc", [null, [3, 14], [3, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 6], [30, 15]]]], ["element", "action", ["submitReview"], [], ["loc", [null, [32, 35], [32, 60]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("kalebr-frontend/templates/users/reviews", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 10
              },
              "end": {
                "line": 8,
                "column": 10
              }
            },
            "moduleName": "kalebr-frontend/templates/users/reviews.hbs"
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
            dom.setAttribute(el1, "class", "button");
            var el2 = dom.createTextNode("\n                  Assign / Change Reviewers\n              ");
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
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 8
            }
          },
          "moduleName": "kalebr-frontend/templates/users/reviews.hbs"
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
        statements: [["block", "link-to", ["users/performanceReview", ["get", "reviewee.id", ["loc", [null, [4, 47], [4, 58]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 10], [8, 22]]]]],
        locals: [],
        templates: [child0]
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
                "line": 17,
                "column": 16
              },
              "end": {
                "line": 17,
                "column": 95
              }
            },
            "moduleName": "kalebr-frontend/templates/users/reviews.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("View Reviews");
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
              "line": 12,
              "column": 6
            },
            "end": {
              "line": 21,
              "column": 6
            }
          },
          "moduleName": "kalebr-frontend/templates/users/reviews.hbs"
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
          dom.setAttribute(el1, "class", "flex");
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
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "width20pc");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "thick-border");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "review.id", ["loc", [null, [14, 37], [14, 50]]], 0, 0, 0, 0], ["content", "review.reviewer.fullname", ["loc", [null, [15, 37], [15, 65]]], 0, 0, 0, 0], ["block", "link-to", ["users/reviewComment", ["get", "session.currentUser.id", ["loc", [null, [17, 49], [17, 71]]], 0, 0, 0, 0], ["get", "review.id", ["loc", [null, [17, 72], [17, 81]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [17, 16], [17, 107]]]]],
        locals: ["review"],
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
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "kalebr-frontend/templates/users/reviews.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "reviews pad1rem");
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
        dom.setAttribute(el2, "class", "questions-list users-list");
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
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.currentUser.admin", ["loc", [null, [3, 14], [3, 39]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [9, 15]]]], ["block", "each", [["get", "model", ["loc", [null, [12, 14], [12, 19]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [12, 6], [21, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('kalebr-frontend/utils/constants', ['exports'], function (exports) {
  var constants;

  constants = {
    HOST: 'https://kaleber-app.herokuapp.com',
    NAMESPACE: '/api/v1'
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
