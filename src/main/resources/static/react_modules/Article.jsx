import React from "react";

const styles = {
    container: {
        backgroundColor: "lightgray",
        padding: "15px",
        marginBottom: "15px",
    },
    title: {
        textAlign: "center",
    }
};

export default class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.title}>
                    <h1>{this.props.title}</h1>
                </div>
                <div>
                    <p>{this.props.content}</p>
                </div>
                <div>
                    <span>{new Date(this.props.creationDate).toLocaleTimeString()
                    + " " + new Date(this.props.creationDate).toLocaleDateString()
                    }</span>
                </div>
            </div>
        )
    }
}