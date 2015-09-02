'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = render;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _vm = require('vm');

var _vm2 = _interopRequireDefault(_vm);

function render() {
  var context = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var locals = arguments.length <= 1 || arguments[1] === undefined ? Object.create(null) : arguments[1];

  return _vm2['default'].runInNewContext('`' + context + '`', locals);
}

;
module.exports = exports['default'];