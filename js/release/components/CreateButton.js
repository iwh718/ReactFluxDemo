"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TodoActions = require("../actions/TodoActions");

var _TodoActions2 = _interopRequireDefault(_TodoActions);

var _TodoStores = require("../stores/TodoStores");

var _TodoStores2 = _interopRequireDefault(_TodoStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateButton = function (_React$Component) {
    _inherits(CreateButton, _React$Component);

    function CreateButton(props) {
        _classCallCheck(this, CreateButton);

        return _possibleConstructorReturn(this, (CreateButton.__proto__ || Object.getPrototypeOf(CreateButton)).call(this, props));
    }

    _createClass(CreateButton, [{
        key: "__add",
        value: function __add() {
            _TodoActions2.default.create({ id: _TodoStores2.default.todos.length + 1, content: "\u7B2C" + _TodoStores2.default.todos.length + "\u4E2Atodo\uFF01" });
            console.log('add!');
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "pull-right" },
                _react2.default.createElement(
                    "button",
                    { className: "btn btn-fab", onClick: function onClick() {
                            return _this2.__add();
                        } },
                    "new"
                )
            );
        }
    }]);

    return CreateButton;
}(_react2.default.Component);

exports.default = CreateButton;