import React from "react";
import Clock from "./Clock.jsx";
import {Link} from "react-router";
import Login from "./Login.jsx"
const styles = {
    linkBox: {
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
    }
};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Clock/>
                <Login/>
                <div className="link-header" style={styles.linkBox}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}