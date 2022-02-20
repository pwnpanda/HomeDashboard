import React from "react";
import AppBox from "./AppBox";

class AllApps extends React.Component {
    render() {
        return (
            <div className="allApps">
                {this.props.apps.map (iotApp => (
                    <AppBox key={iotApp.id} app={iotApp} changeState={this.props.changeState} />
                    ))}
            </div>
        )
    }
}

export default AllApps