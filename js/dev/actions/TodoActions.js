import AppDispatcher from '../dispatcher/AppDispatcher';

/**
 * 动作 接收view来的事件，通过dispatcher分发事件
 * @type {{create(*): void, delete(*): void}}
 */
const TodoAction = {
    create(todo){
        AppDispatcher.dispatch({
            actionType:'CREATE_TODO',
            todo
        })
    },
    delete(id){
        AppDispatcher.dispatch({
            actionType: "DELETE_TODO",
            id

        })
    },


};
export default TodoAction;