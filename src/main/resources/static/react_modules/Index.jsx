import React from "react";
import Clock from "./Clock.jsx";
import {Link} from "react-router";
import Login from "./Login.jsx"
import ArticleEditor from "./ArticleEditor.jsx"
import Header from "./Header.jsx";

const styles = {
    container: {
        padding: "25px",
    }
};

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>

                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}