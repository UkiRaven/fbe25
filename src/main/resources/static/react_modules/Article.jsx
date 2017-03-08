import React from "react";
import {Link} from "react-router";

const styles = {
    container: {
        color: "rgba(0,0,0,0.8)",
        padding: "30px",
        marginBottom: "20px",
        boxShadow: "0 0 20px 0 rgba(51,51,51,0.12)"
    },
    title: {
        textAlign: "center",
    },
    content: {
        margin: "10px 0 15px 0",
        minHeight: '100px',
        maxHeight: "200px",
        overflow: "hidden"
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
                    <h1>{this.props.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={content} style={styles.content}>
                </div>
                <div>
                    <span>{new Date(this.props.creationDate).toLocaleTimeString()
                    + " " + new Date(this.props.creationDate).toLocaleDateString()
                    }</span>
                </div>
                <Link to={"/article/" + this.props.id}>More</Link>
            </div>
        )
    }
}