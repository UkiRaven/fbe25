import React from 'react';
import Clock from "./Clock.jsx"
import {Link} from 'react-router';
const styles = {
    container: {
        position: "relative",
        margin: "0",
        height: "500px",
        backgroundImage: "url(images/61693047_p0.png)",
        backgroundPosition: "50% 65%",
    },
    clock: {
        color: "rgba(255,255,255,0.85)",
        position: "absolute",
        top: "10px",
        right: "15px"
    },
    linkBox: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        marginTop: "450px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
    },
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                <Clock style = {styles.clock}/>
                <div className="link-header" style={styles.linkBox}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/editor">Editor</Link>
                </div>
            </div>
        )
    }
}