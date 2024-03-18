"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardContainer = exports.Divider = exports.ToggleButton = exports.ToggleButtonGroup = exports.Desc = exports.Title = exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default2 = _interopRequireDefault(require("../../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 28px;\n    flex-wrap: wrap;\n    // display: grid;\n    // grid-template-columns: repeat(3, 1fr);\n    // grid-gap: 32px;\n    // grid-auto-rows: minmax(100px, auto);\n    // @media (max-width: 960px) {\n    //     grid-template-columns: repeat(2, 1fr);\n    // }\n    // @media (max-width: 640px) {\n    //     grid-template-columns: repeat(1, 1fr);\n    // }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 1.5px;\n    background: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    padding: 8px 18px;\n    border-radius: 6px;\n    cursor: pointer;\n    ", "\n    &:hover {\n        background: ", ";\n    }\n    @media (max-width: 768px) {\n        padding: 6px 8px;\n        border-radius: 4px;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    border: 1.5px solid ", ";\n    color: ", ";\n    font-size: 16px;\n    border-radius: 12px;\n    font-weight: 500;\n    margin: 22px 0px;\n    @media (max-width: 768px) {\n        font-size: 12px;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 18px;\n    text-align: center;\n    max-width: 600px;\n    color: ", ";\n    @media (max-width: 768px) {\n        margin-top: 12px;\n        font-size: 16px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-size: 42px;\ntext-align: center;\nfont-weight: 600;\nmargin-top: 20px;\n  color: ", ";\n  @media (max-width: 768px) {\n      margin-top: 12px;\n      font-size: 32px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    max-width: 1350px;\n    padding: 10px 0px 100px 0;\n    gap: 12px;\n    @media (max-width: 960px) {\n        flex-direction: column;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    z-index: 1;\n    align-items: center;\n    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Wrapper = _styledComponents["default"].div(_templateObject2());

exports.Wrapper = Wrapper;

var Title = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.text_primary;
});

exports.Title = Title;

var Desc = _styledComponents["default"].div(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.text_secondary;
});

exports.Desc = Desc;

var ToggleButtonGroup = _styledComponents["default"].div(_templateObject5(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary;
});

exports.ToggleButtonGroup = ToggleButtonGroup;

var ToggleButton = _styledComponents["default"].div(_templateObject6(), function (_ref5) {
  var active = _ref5.active,
      theme = _ref5.theme;
  return active && "\n    background: ".concat(theme.primary + 20, ";\n    ");
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.primary + 8;
});

exports.ToggleButton = ToggleButton;

var Divider = _styledComponents["default"].div(_templateObject7(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.primary;
});

exports.Divider = Divider;

var CardContainer = _styledComponents["default"].div(_templateObject8());

exports.CardContainer = CardContainer;
//# sourceMappingURL=ProjectStyle.dev.js.map
