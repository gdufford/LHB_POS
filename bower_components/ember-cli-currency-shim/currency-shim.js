(function() {
/* globals define, currency */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('currency', { 'default': currency});
})();
