import React from "react";
import { FaPause } from "react-icons/fa"
import { GoStop } from "react-icons/go"
import { FcProcess } from "react-icons/fc"

class AppBox extends React.Component {

    callActualFunction(state, id) {
        let {changeState, error} = this.props
        changeState(state, id);
        // Do actual functionality here
        // Set error based on result for nw call
        return 1;
    }
    
    

    render(){

        const errorStyle = { color: "red" }
        const off = { display: "none" }

        // Can now access this.props.changeState() and call with parameter of new state and ID here!
        // Use onChange to activate
        const {id, name, state, error} = this.props.app
        return (
        <div className="singleApp">
            <p className="appName">{name}</p>
            <FcProcess className="singleAppIcon singleAppIconGreen" size="25px" style={state!=="run" ?  off: null}/>
            <FaPause className="singleAppIcon" color="orange" size="20px" style={state!=="pause" ?  off: null}/>
            <GoStop className="singleAppIcon" color="red" size="25px" style={state==="stop" ?  null : off }/>
            {// todo insert icon for running (two arrows in circle), paused ( equal mark rotated 90 degrees) and stopped (red X or stop-mark)
            }
            <hr/>
            <button onClick={() => 
                this.callActualFunction("run", id)
            }>Run</button>
            <button onClick={() => 
                this.callActualFunction("pause", id)
            }>Pause</button>
            <button onClick={() => 
                this.callActualFunction("stop", id)
            }>Stop</button>
            <hr className="invisible"/>
            <p style={error!=="" ? errorStyle: off}>{error}</p>
        </div>
        )
    }
}

export default AppBox


/*
function AppBox(props) {
    return <li>{props.app.name}</li>
}
*/