"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = require("../dispatcher/AppDispatcher");

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _Todo = require("../components/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoStores = {
    todos: [{
        id: 1,
        content: "第1个todo"
    }, {
        id: 2,
        content: "第2个todo"
    }],
    //弹出提示
    showAlert: function showAlert() {
        this.alertFlag = true;
    },

    //关闭提示
    hideAlert: function hideAlert() {
        this.alertFlag = false;
    },

    alertFlag: false,
    getAll: function getAll() {
        return this.todos;
    },
    addTodo: function addTodo(todo) {
        this.todos.push(todo);
    },
    deleteTodo: function deleteTodo(id) {
        this.todos = this.todos.filter(function (item) {
            return item.id !== id;
        });
    }
};
_AppDispatcher2.default.register(function (action) {
    switch (action.actionType) {
        case 'CREATE_TODO':
            TodoStores.addTodo(action.todo);
            break;
        case 'DELETE_TODO':
            TodoStores.deleteTodo(action.id);
            break;
        case "SHOW_ALERT":
            TodoStores.showAlert();
            break;
        case "HIDE_ALERT":
            TodoStores.hideAlert();
            break;
        default:
            break;
    }
});
exports.default = TodoStores;