import React from "react";
import {Link} from "react-router";

const styles = {
    container: {
        border: "1px solid rgba(128,128,128,0.25)",
        backgroundColor: "white",
        position: "relative",
        padding: "20px 30px 20px 30px",
        marginBottom: "30px",
        boxShadow: "0 0 10px 0 rgba(51,51,51,0.12)"
    },
    title: {
        textAlign: "center",
    },
    content: {
        margin: "10px 0 15px 0",
        minHeight: '100px',
        maxHeight: "400px",
        overflow: "hidden"
    },
    link: {
        width: "60px",
        height: "30px",
        position: "absolute",
        bottom: "15px",
        right: "25px",
        display: "block",
        textAlign: "center",
        lineHeight: "30px",
        border: "1px solid rgba(0,0,0,0.2)"
    },
    fadeBlock: {
        width: "100%",
        height: "50px",
        position: "absolute",
        bottom: "-25px",
    },
    footer: {
        color: "rgba(51,51,51,0.6)",
    }
};

export default class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { //TODO set a limit to article preview content
        let content = {__html: this.props.content};
        return (
            <div style={styles.container}>
                <div style={styles.title}>
                    <Link  className={"title-link"} to={"/article/" + this.props.id}><h1>{this.props.title}</h1></Link>
                </div>
                <div dangerouslySetInnerHTML={content} style={styles.content}>

                </div>
                <div style={styles.footer}>
                    <span>Created at {new Date(this.props.creationDate).toLocaleTimeString().substring(0, -3)
                    + " " + new Date(this.props.creationDate).toLocaleDateString()
                    }</span>
                    <span>
                         {" by me"}
                    </span>
                </div>
                <Link style={styles.link} to={"/article/" + this.props.id}>More</Link>
            </div>
        )
    }
}