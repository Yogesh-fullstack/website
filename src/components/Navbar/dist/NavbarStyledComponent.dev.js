"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileNavLogo = exports.MobileLink = exports.MobileMenuButton = exports.MobileMenuLink = exports.MobileMenuItems = exports.MobileMenu = exports.MobileIcon = exports.ButtonContainer = exports.GitHubButton = exports.NavLink = exports.NavItems = exports.Span = exports.NavLogo = exports.NavbarContainer = exports.Nav = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default2 = _interopRequireDefault(require("../../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  padding: 0 6px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  text-decoration: none;\n  @media (max-width: 640px) {\n    padding: 0 0px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  :hover {\n    color: ", ";\n  }\n\n  &.active {\n    border-bottom: 2px solid ", ";\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  border: 1.8px solid ", ";\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  height: 70%;\n  border-radius: 20px;\n  color: ", ";\n  cursor: pointer;\n  padding: 0 20px;\n  font-weight: 500;\n  text-decoration: none;\n  font-size: 16px;\n  transition: all 0.6s ease-in-out;\n\n  :hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  :hover {\n    color: ", ";\n  }\n\n  &.active {\n    border-bottom: 2px solid ", ";\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 16px;\n    position: absolute;\n    top: 80px;\n    right: 0;\n    width: 100%;\n    padding: 12px 40px 24px 40px;\n    background: ", ";\n    transition: all 0.6s ease-in-out;\n    transform: ", ";\n    border-radius: 0 0 20px 20px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n    opacity: ", ";\n    z-index: ", ";\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.5rem;\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;  \n  height: 100%;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  padding: 0 6px;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: 1.8px solid ", ";\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  height: 70%;\n  border-radius: 20px;\n  color: ", ";\n  cursor: pointer;\n  padding: 0 20px;\n  font-weight: 500;\n  text-decoration: none;\n  font-size: 16px;\n  transition: all 0.6s ease-in-out;\n    :hover {\n      background: ", ";\n      color: ", ";     \n    }\n    @media screen and (max-width: 768px) { \n    font-size: 14px;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n    :hover {\n      color: ", ";\n    }\n\n    &.active {\n      border-bottom: 2px solid ", ";\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n    gap: 32px;\n    padding: 0 6px;\n    list-style: none;\n\n    @media screen and (max-width: 768px) {\n      display: none;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 4px;\n    font-weight: bold;\n    font-size: 18px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;    \n    padding: 0 6px;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    text-decoration: none;\n    @media (max-width: 640px) {\n      padding: 0 0px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  z-index: 1;\n  width: 100%;\n  padding: 0 24px;\n  max-width: 1200px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    @media (max-width: 960px) {\n        trastion: 0.8s all ease;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.card_light;
});

exports.Nav = Nav;

var NavbarContainer = _styledComponents["default"].div(_templateObject2());

exports.NavbarContainer = NavbarContainer;
var NavLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.NavLogo = NavLogo;

var Span = _styledComponents["default"].div(_templateObject4());

exports.Span = Span;

var NavItems = _styledComponents["default"].ul(_templateObject5());

exports.NavItems = NavItems;

var NavLink = _styledComponents["default"].a(_templateObject6(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.text_primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary;
});

exports.NavLink = NavLink;

var GitHubButton = _styledComponents["default"].a(_templateObject7(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.primary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.white;
});

exports.GitHubButton = GitHubButton;

var ButtonContainer = _styledComponents["default"].div(_templateObject8());

exports.ButtonContainer = ButtonContainer;

var MobileIcon = _styledComponents["default"].div(_templateObject9(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.text_primary;
});

exports.MobileIcon = MobileIcon;

var MobileMenu = _styledComponents["default"].div(_templateObject10(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.card_light + 99;
}, function (_ref11) {
  var isOpen = _ref11.isOpen;
  return isOpen ? 'translateY(0)' : 'translateY(-100%)';
}, function (_ref12) {
  var isOpen = _ref12.isOpen;
  return isOpen ? '100%' : '0';
}, function (_ref13) {
  var isOpen = _ref13.isOpen;
  return isOpen ? '1000' : '-1000';
});

exports.MobileMenu = MobileMenu;

var MobileMenuItems = _styledComponents["default"].ul(_templateObject11());

exports.MobileMenuItems = MobileMenuItems;
var MobileMenuLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject12(), function (_ref14) {
  var theme = _ref14.theme;
  return theme.text_primary;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.primary;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.primary;
});
exports.MobileMenuLink = MobileMenuLink;

var MobileMenuButton = _styledComponents["default"].a(_templateObject13(), function (_ref17) {
  var theme = _ref17.theme;
  return theme.primary;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.primary;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.primary;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.white;
});

exports.MobileMenuButton = MobileMenuButton;

var MobileLink = _styledComponents["default"].a(_templateObject14(), function (_ref21) {
  var theme = _ref21.theme;
  return theme.text_primary;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.primary;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.primary;
});

exports.MobileLink = MobileLink;
var MobileNavLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject15());
exports.MobileNavLogo = MobileNavLogo;
//# sourceMappingURL=NavbarStyledComponent.dev.js.map
