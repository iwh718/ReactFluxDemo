import TodoStores from "../stores/TodoStores";
import React from "react";

/**
 * 列表组件
 */
class List extends React.Component{
    constructor(props){
        super(props);

    }

    /**
     * 删除该条todo
     * @param idx
     * @private
     */
    __deleteTodo(idx){
        console.log(idx);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {TodoStores.todos.map((row,idx)=>{
                        return (
                            <li onClick={()=>this.__deleteTodo(idx) } key={idx} className="list-group-item">{row['content']}</li>
                        )
                    },this)}
                </ul>
            </div>
        );
    }
}
export default List;