import React from "react";
import TodoAction from "../actions/TodoActions";
import TodoStores from "../stores/TodoStores";

class CreateButton extends React.Component {
    constructor(props) {
        super(props)
    }

    __add() {
        TodoAction.create({id: TodoStores.todos.length + 1, content: `第${TodoStores.todos.length}个todo！`});
        console.log('add!');
    }

    render() {
        return (
            <div className="pull-right">
                <button className="btn btn-fab" onClick={() => this.__add()}>new</button>
            </div>

        )
    }
}

export default CreateButton;