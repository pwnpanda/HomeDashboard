import React from "react";
import AllApps from "./AllApps";
import Header from "./Header";

class Page extends React.Component {
    state = {
        apps: [
            {
                id: 0,
                name: "App1",
                state: "stop",
                error: ""
            },
            {
                id: 1,
                name: "App2",
                state: "pause",
                error: ""
            },
            {
                id: 2,
                name: "App3",
                state: "run",
                error: ""
            }
        ]
    }

    findApp(id) {
        return this.state.apps.filter( cur_id => cur_id === id)    
    }

    findIndex(app) {
        return this.state.apps.indexOf(app)
    }

    // https://sebhastian.com/this-setstate-is-not-a-function/
    changeStateProcess = (state, id) => {
        // Find the correct item
        // Change the state
        // let curApp = this.findApp(id)
        console.log(state, id);

        // Only update relevant app
        this.setState(prevState => ({
            apps: prevState.apps.map(app => {
                if (app.id === id)   return {...app, status: state}
                return app;
            })
        }));
    }

    render() {
        return(
            <div className="allContent">
                <Header />
                <AllApps apps={this.state.apps} changeState={this.changeStateProcess} />
            </div>
        )
    }
}

export default Page