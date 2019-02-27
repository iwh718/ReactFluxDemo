"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = require("../dispatcher/AppDispatcher");

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Store,存放todo数据
 * @type {{} & EventEmitter & {todos: *[], getAll(): *, addTodo(*=): void, deleteTodo(*): void, emitChange(): void, addChangeListener(*=): void, removeChangeListener(*=): void}}
 */
//添加订阅事件
var TodoStores = Object.assign({}, _events2.default.prototype, {
    todos: [{
        id: 1,
        content: "这是一个flux架构的todoDemo。",
        time: '2019/02/28'
    }, {
        id: 2,
        content: "最简化使用flux。",
        time: '2019/02/28'
    }],

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
    },

    //发布change事件
    emitChange: function emitChange() {
        this.emit('change');
    },

    //添加change监听器
    addChangeListener: function addChangeListener(callback) {
        this.on('change', callback);
    },

    //移除change监听器
    removeChangeListener: function removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
});
//注册分发事件
//按照分类执行TodoStore事件
_AppDispatcher2.default.register(function (action) {
    switch (action.actionType) {
        case 'CREATE_TODO':
            console.log('到store了！');
            TodoStores.addTodo(action.todo);
            TodoStores.emitChange();
            break;
        case 'DELETE_TODO':
            TodoStores.deleteTodo(action.id);
            TodoStores.emitChange();
            break;
        default:
            break;
    }
});
exports.default = TodoStores;