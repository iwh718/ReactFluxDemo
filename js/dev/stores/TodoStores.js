import AppDispatcher from "../dispatcher/AppDispatcher";
import EventEmitter from 'events'
/**
 * Store,存放todo数据
 * @type {{} & EventEmitter & {todos: *[], getAll(): *, addTodo(*=): void, deleteTodo(*): void, emitChange(): void, addChangeListener(*=): void, removeChangeListener(*=): void}}
 */
//添加订阅事件
const TodoStores = Object.assign({},EventEmitter.prototype,{
    todos: [{
        id: 1,
        content: "这是一个flux架构的todoDemo。",
        time:'2019/02/28'
    },

        {
            id: 2,
            content: "最简化使用flux。",
            time:'2019/02/28'
        }],

    getAll() {
        return this.todos;
    },
    addTodo(todo) {
        this.todos.push(todo);

    },
    deleteTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id);

    },
    //发布change事件
    emitChange(){
        this.emit('change');
    },
    //添加change监听器
    addChangeListener(callback){
        this.on('change',callback)
    },
    //移除change监听器
    removeChangeListener(callback){
        this.removeListener('change',callback);
    }
});
//注册分发事件
//按照分类执行TodoStore事件
AppDispatcher.register((action) => {
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
        default:break;
    }
});
export default TodoStores;