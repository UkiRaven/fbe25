import React from "react";
import Clock from "./Clock.jsx";
import {Link} from "react-router";
import Login from "./Login.jsx"
import ArticleEditor from "./ArticleEditor.jsx"
import Header from "./Header.jsx";

const styles = {

};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}