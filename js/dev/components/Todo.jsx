

import * as React from "react";
import TodoActions from '../actions/TodoActions';
import CreateButton from "./CreateButton";
import List from "./List";
import Toolbar from './Toolbar'
import TodoStores from "../stores/TodoStores";


/**
 * Flux架构demo
 * @author IWH
 * @description Flux练习demo
 */
class Todo extends React.Component {

    constructor(props) {
        super(props);
        //初始化数据从Store获取，Store对于view来说是只读，只能通过action更改，通过store方法获取
        this.state = {
            todos: TodoStores.getAll()
        };
        //绑定对象
        this.__createTodo = this.__createTodo.bind(this);
        this.__deleteTodo = this.__deleteTodo.bind(this);
        this.__onChange = this.__onChange.bind(this);
    }
    /**
     * 生成新的清单action
     * @private
     */
    __createTodo() {
        TodoActions.create();

    }

    /**
     * 接收Store发来的事件，刷新数据
     * @private
     */
    __onChange() {
        this.setState({
            todos: TodoStores.getAll()
        })
    }

    /**
     * 删除清单action
     * @private
     * @param id
     */
    __deleteTodo(id) {
        TodoActions.delete(id);
    }

    /**
     * 在挂在组件时候，添加Store的事件监听器，并注册回调，这里是onchange
     */
    componentDidMount() {
        TodoStores.addChangeListener(this.__onChange);
    }

    /**
     * 卸载组件时候，取消监听器
     */
    componentWillUnmount() {
        TodoStores.removeChangeListener(this.__onChange);
    }

    render() {
        return (
            <div>
                <Toolbar/>
                <List/>
                <CreateButton/>
            </div>
        )
    }

}

export default Todo