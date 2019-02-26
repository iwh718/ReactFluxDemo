'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 动作 接收view来的事件，通过dispatcher分发事件
 * @type {{create(*): void, delete(*): void}}
 */
var TodoAction = {
    create: function create(todo) {
        _AppDispatcher2.default.dispatch({
            actionType: 'CREATE_TODO',
            todo: todo
        });
    },
    delete: function _delete(id) {
        _AppDispatcher2.default.dispatch({
            actionType: "DELETE_TODO",
            id: id

        });
    },
    showAlert: function showAlert() {
        _AppDispatcher2.default.dispatch({
            actionType: "SHOW_ALERT"
        });
    },
    hideAlert: function hideAlert() {
        _AppDispatcher2.default.dispatch({
            actionType: "HIDE_ALERT"
        });
    }
};
exports.default = TodoAction;