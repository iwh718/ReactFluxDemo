"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TodoStores = require("../stores/TodoStores");

var _TodoStores2 = _interopRequireDefault(_TodoStores);

var _TodoActions = require("../actions/TodoActions");

var _TodoActions2 = _interopRequireDefault(_TodoActions);

var _Todo = require("./Todo");

var _Todo2 = _interopRequireDefault(_Todo);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$Component) {
    _inherits(Alert, _React$Component);

    function Alert(props) {
        _classCallCheck(this, Alert);

        return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));
    }

    _createClass(Alert, [{
        key: "__hide",
        value: function __hide() {
            _TodoStores2.default.alertFlag = false;
        }
    }, {
        key: "__add",
        value: function __add() {
            _TodoStores2.default.alertFlag = true;
            var nowNewId = _TodoStores2.default.todos.length;
            _TodoActions2.default.create({
                id: nowNewId,
                content: "\u7B2C" + nowNewId + "\u4E2Atodo"
            });
            this.__hide();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "alert alert-warn" },
                _react2.default.createElement(
                    "button",
                    { className: "btn btn-success", onClick: this.__add() },
                    "\u786E\u8BA4"
                ),
                _react2.default.createElement(
                    "button",
                    { className: "btn btn-anger", onClick: this.__hide },
                    "\u53D6\u6D88"
                )
            );
        }
    }]);

    return Alert;
}(_react2.default.Component);

exports.default = Alert;