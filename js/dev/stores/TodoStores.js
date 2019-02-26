import AppDispatcher from "../dispatcher/AppDispatcher";
import EventEmitter from 'events'


const TodoStores = Object.assign({},EventEmitter.prototype,{
    todos: [{
        id: 1,
        content: "第1个todo"
    },
        {
            id: 2,
            content: "第2个todo"
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
    change(){
        this.emit('change');
    }
});
AppDispatcher.register((action) => {
    switch (action.actionType) {
        case 'CREATE_TODO':
            TodoStores.addTodo(action.todo);
            break;
        case 'DELETE_TODO':
            TodoStores.deleteTodo(action.id);
            break;
        default:break;
    }
});
export default TodoStores;