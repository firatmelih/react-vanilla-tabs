"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabProvider = TabProvider;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function TabSwitch(_ref) {
  var childCount = _ref.childCount,
    setVisible = _ref.setVisible,
    titles = _ref.titles,
    visibleId = _ref.visibleId,
    namelessSwitch = _ref.namelessSwitch;
  var element = [];
  var handleClick = function handleClick(event) {
    setVisible(event.target.id);
  };
  for (var i = 0; i < childCount; i++) {
    var _createElement;
    element.push( /*#__PURE__*/(0, _react.createElement)('div', (_createElement = {
      key: i.toString(),
      id: i.toString(),
      className: "TabSwitch"
    }, _defineProperty(_createElement, 'data-variant', visibleId.toString() === i.toString() ? 'selected' : undefined), _defineProperty(_createElement, "onClick", handleClick), _createElement), titles[i] ? titles[i] : namelessSwitch ? '' : 'unnamed tab'));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "TabSwitchProvider"
  }, element.map(function (e) {
    return e;
  }));
}
function TabProvider(_ref2) {
  var children = _ref2.children,
    tabSwitchTitles = _ref2.tabSwitchTitles,
    namelessSwitch = _ref2.namelessSwitch;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    childCount = _useState2[0],
    setChildCount = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tabs = _useState4[0],
    setTabs = _useState4[1];
  var _useState5 = (0, _react.useState)('0'),
    _useState6 = _slicedToArray(_useState5, 2),
    visibleTab = _useState6[0],
    setVisibleTab = _useState6[1];
  (0, _react.useEffect)(function () {
    var count = 0;
    var elements = [];
    if (children.length > 1) {
      children.map(function (child, key) {
        var _child$type;
        if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name) === 'Tab') {
          count++;
          elements.push( /*#__PURE__*/(0, _react.createElement)('div', {
            key: key,
            id: key.toString()
          }, child.props.children));
        }
      });
      setChildCount(count);
      setTabs(elements);
    } else {
      console.info('TabProvider Should have minimum two tab element');
    }
  }, [children]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "TabProvider"
  }, /*#__PURE__*/_react["default"].createElement(TabSwitch, {
    namelessSwitch: namelessSwitch,
    titles: tabSwitchTitles,
    childCount: childCount,
    setVisible: setVisibleTab,
    visibleId: visibleTab
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'SelectedTab'
  }, tabs.filter(function (tab) {
    return tab.props.id === visibleTab;
  })));
}