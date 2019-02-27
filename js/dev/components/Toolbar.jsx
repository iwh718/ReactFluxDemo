import * as React from "react";
import InitStore from "../stores/InitDataStore";
/**
 * 工具栏
 */
class Toolbar extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="toolbar">

                <div className="col-xs-12"><h3>{InitStore.getData().title}</h3></div>
                <div className="col-xs-4"><h4>{InitStore.getData().author}</h4></div>
                <div className="col-xs-4"><h4>{InitStore.getData().version}</h4></div>
                <div className="col-xs-4"><h4>{InitStore.getData().time}</h4></div>


            </div>
        )
    }
}
export default Toolbar;