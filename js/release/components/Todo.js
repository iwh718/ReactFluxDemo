"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _TodoActions = require("../actions/TodoActions");

var _TodoActions2 = _interopRequireDefault(_TodoActions);

var _CreateButton = require("./CreateButton");

var _CreateButton2 = _interopRequireDefault(_CreateButton);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _Toolbar = require("./Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _TodoStores = require("../stores/TodoStores");

var _TodoStores2 = _interopRequireDefault(_TodoStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Flux架构demo
 * @author IWH
 * @description Flux练习demo
 */
var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo(props) {
        _classCallCheck(this, Todo);

        //初始化数据从Store获取，Store对于view来说是只读，只能通过action更改，通过store方法获取
        var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

        _this.state = {
            todos: _TodoStores2.default.getAll()
        };
        //绑定对象
        _this.__createTodo = _this.__createTodo.bind(_this);
        _this.__deleteTodo = _this.__deleteTodo.bind(_this);
        _this.__onChange = _this.__onChange.bind(_this);
        return _this;
    }
    /**
     * 生成新的清单action
     * @private
     */


    _createClass(Todo, [{
        key: "__createTodo",
        value: function __createTodo() {
            _TodoActions2.default.create();
        }

        /**
         * 接收Store发来的事件，刷新数据
         * @private
         */

    }, {
        key: "__onChange",
        value: function __onChange() {
            this.setState({
                todos: _TodoStores2.default.getAll()
            });
        }

        /**
         * 删除清单action
         * @private
         * @param id
         */

    }, {
        key: "__deleteTodo",
        value: function __deleteTodo(id) {
            _TodoActions2.default.delete(id);
        }

        /**
         * 在挂在组件时候，添加Store的事件监听器，并注册回调，这里是onchange
         */

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            _TodoStores2.default.addChangeListener(this.__onChange);
        }

        /**
         * 卸载组件时候，取消监听器
         */

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _TodoStores2.default.removeChangeListener(this.__onChange);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(_Toolbar2.default, null),
                React.createElement(_List2.default, null),
                React.createElement(_CreateButton2.default, null)
            );
        }
    }]);

    return Todo;
}(React.Component);

exports.default = Todo;