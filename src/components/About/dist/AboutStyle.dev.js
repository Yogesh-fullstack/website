"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialMediaIcon = exports.SocialMediaIcons = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default2 = _interopRequireDefault(require("../../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0 1rem;\n  font-size: 1.5rem;\n  color: ", ";\n  transition: color 0.2s ease-in-out;\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SocialMediaIcons = _styledComponents["default"].div(_templateObject());

exports.SocialMediaIcons = SocialMediaIcons;

var SocialMediaIcon = _styledComponents["default"].a(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.text_primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
});

exports.SocialMediaIcon = SocialMediaIcon;
//# sourceMappingURL=AboutStyle.dev.js.map
