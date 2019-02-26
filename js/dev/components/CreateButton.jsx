import React from "react";
import TodoAction from "../actions/TodoActions";
class CreateButton extends React.Component{
    constructor(props){
        super(props)
    }
    __add(){
        TodoAction.create({id:3,content:"第三个！"});
    }
    render(){
        return (
            <button className="btn btn-primary" onClick = {this.__add()}>new</button>
        )
    }
}
export default  CreateButton;