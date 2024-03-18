"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResumeButton = exports.SubTitle = exports.Span = exports.TextLoop = exports.Title = exports.Img = exports.HeroRightContainer = exports.HeroLeftContainer = exports.HeroInnerContainer = exports.HeroBg = exports.HeroContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default2 = _interopRequireDefault(require("../../themes/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    -webkit-appearance: button;\n    -moz-appearance: button;\n    appearance: button;\n    text-decoration: none;\n    width: 95%;\n    max-width: 300px;\n    text-align: center;\n    padding: 16px 0;\n    color:", ";\n    border-radius: 20px;\n    cursor: pointer;\n    font-size: 20px;\n    font-weight: 600;\n    transition: all 0.2s ease-in-out !important;\n    background: hsla(271, 100%, 50%, 1);\n    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);\n    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);\n    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);\n    box-shadow:  20px 20px 60px #1F2634,\n    -20px -20px 60px #1F2634;\n    &:hover {\n        transform: scale(1.05);\n    transition: all 0.4s ease-in-out;\n    box-shadow:  20px 20px 60px #1F2634,\n    filter: brightness(1);\n    }    \n    \n    \n    @media (max-width: 640px) {\n        padding: 12px 0;\n        font-size: 18px;\n    } \n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 32px;\n  margin-bottom: 42px;\n  color: ", ";\n\n  @media (max-width: 960px) {\n    text-align: center;\n  }\n\n  @media (max-width: 640px) {\n    font-size: 16px;\n    line-height: 32px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 32px;\n  display: flex;\n  gap: 12px;\n  color: ", ";\n  line-height: 68px;\n  @media (max-width: 960px) {\n    text-align: center;\n  }\n  @media (max-width: 640px) {\n    font-size: 22px;\n    line-height: 48px;\n    margin-bottom: 16px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 50px;\n  color: ", ";\n  line-height: 68px;\n  @media (max-width: 960px) {\n    text-align: center;\n  }\n\n  @media (max-width: 640px) {\n    font-size: 40px;\n    line-height: 48px;\n    margin-bottom: 8px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  max-width: 400px;\n  max-height: 400px;\n  border-radius: 50%;\n  border: 2px solid ", ";\n\n  @media (max-width: 768px) {\n    max-width: 400px;\n    max-height: 400px;\n  }\n\n  @media (max-width: 640px) {\n    max-width: 280px;\n    max-height: 280px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  order: 2;\n  justify-content: end;\n  gap: 12px;\n  @media (max-width: 960px) {\n    order: 1;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 80px;\n  }\n\n  @media (max-width: 640px) {\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  order: 1;\n  @media (max-width: 960px) {\n    order: 2;\n    margin-bottom: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  @media (max-width: 640px) {\n    order: 2;\n    margin-bottom: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 1100px;\n\n  @media (max-width: 960px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  justify-content: end;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 1360px;\n  overflow: hidden;\n  padding: 0 30px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n\n  @media (max-width: 960px) {\n    justify-content: center;\n    padding: 0 0px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  justify-content: center;\n  position: relative;\n  padding: 80px 30px;\n  @media (max-width: 960px) {\n    padding: 66px 16px;\n  }\n  @media (max-width: 640) {\n    padding: 32px 16px;\n  }\n  z-index: 1;\n\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.card_light;
});

exports.HeroContainer = HeroContainer;

var HeroBg = _styledComponents["default"].div(_templateObject2());

exports.HeroBg = HeroBg;

var HeroInnerContainer = _styledComponents["default"].div(_templateObject3());

exports.HeroInnerContainer = HeroInnerContainer;

var HeroLeftContainer = _styledComponents["default"].div(_templateObject4());

exports.HeroLeftContainer = HeroLeftContainer;

var HeroRightContainer = _styledComponents["default"].div(_templateObject5());

exports.HeroRightContainer = HeroRightContainer;

var Img = _styledComponents["default"].img(_templateObject6(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
});

exports.Img = Img;

var Title = _styledComponents["default"].div(_templateObject7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.text_primary;
});

exports.Title = Title;

var TextLoop = _styledComponents["default"].div(_templateObject8(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.text_primary;
});

exports.TextLoop = TextLoop;

var Span = _styledComponents["default"].span(_templateObject9(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
});

exports.Span = Span;

var SubTitle = _styledComponents["default"].div(_templateObject10(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.text_primary + 95;
});

exports.SubTitle = SubTitle;

var ResumeButton = _styledComponents["default"].a(_templateObject11(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.white;
});

exports.ResumeButton = ResumeButton;
//# sourceMappingURL=HeroStyle.dev.js.map
