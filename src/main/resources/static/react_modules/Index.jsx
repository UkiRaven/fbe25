import React from "react";
import {Link, hashHistory} from "react-router";
import Header from "./Header.jsx";

const styles = {
    container: {
        padding: "25px",
    }
};



export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {authenticated: false},
        };
        this.loginTry = this.loginTry.bind(this);
        this.logout = this.logout.bind(this);
    }

    initUser() {
        let token = localStorage.getItem("auth-token");
        if (token) {
            this.getUser(token);
        }
    }

    getUser(token) {
        fetch("api/session", {
            headers: {
                "x-auth-token": token
            }
        }).
            then(response => {
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json().then(result => {
                        this.setState({user: result});
                    })
                }
            })
    }

    logout() {
        console.log("logging out");
        fetch("api/session", {
            method: "DELETE",
            headers: {
                "x-auth-token": this.state.user.token
            }
        });
        this.state.user = {};
        hashHistory.push("login");
    }

    loginTry(username, password) {
        fetch("api/session", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password,
                }
            )}).
            then(response => {
                localStorage.setItem('auth-token', response.headers.get("x-auth-token"));
                return response.json();
            }
            ).
            then(result => {
                this.setState({user: result});
                hashHistory.push("/");
            });

    }
    componentDidMount() {
        this.initUser();
    }

    render() {
        return (
            <div>
                <Header user={this.state.user} logout={this.logout}/>

                <div style={styles.container}>
                    {React.cloneElement(this.props.children, {login: this.loginTry, user: this.state.user})}
                </div>
            </div>
        )
    }
}