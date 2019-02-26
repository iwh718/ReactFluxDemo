/**
 * 这里是Todo
 */


import * as React from "react";
import TodoActions from '../actions/TodoActions';
import CreateButton from "./CreateButton";
import List from "./List";

/**
 * Flux架构demo
 * @author IWH
 * @description Flux练习demo
 */
class Todo extends React.Component{

    constructor(props){
        super(props);
        //绑定对象
        this.__createTodo = this.__createTodo.bind(this);
        this.__deleteTodo = this.__deleteTodo.bind(this);

    }

    /**
     * 生成新的清单
     * @private
     */
    __createTodo(){
        TodoActions.create();

    }

    /**
     * 删除清单
     * @private
     * @param id
     */
    __deleteTodo(id){
    TodoActions.delete(id);
    }
    render(){
        return(
            <div>
            <List/>
            <CreateButton/>
            </div>
        )
    }

}

export default Todo