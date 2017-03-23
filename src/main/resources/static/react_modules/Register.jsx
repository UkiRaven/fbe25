import React from "react";

const styles = {
    container: {
        margin: "0 auto",
        width: "75%",
        minWidth: "320px",
        maxWidth: "600px",
        padding: "0 25px 25px 25px"
    },
    form: {
        width: "85%",
        margin: "0 auto",
        textAlign: "center",
    },
    formField: {
        boxSizing: "border-box",
        height: "50px",
        width: "75%",
    },
    submit: {
        marginTop: "10px",
    }
};

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    handleSubmit() {
        if (this.state.username && this.state.password && this.state.email) this.signUp();

    };

    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    signUp() {
        fetch("api/accounts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    nickname: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                }
            )
        }).
            then(this.props.login(this.state.username, this.state.password));
    }

    render() {
        return (
            <div className="block" style={styles.container}>
                <center><h2>Sign up</h2></center>
                <form style={styles.form}>
                    <input onChange={this.handleUsernameChange} value={this.state.username} style={styles.formField} className="input-field" placeholder="Username" type="text" name="name"/><br/>
                    <input onChange={this.handlePasswordChange} value={this.state.password} style={styles.formField} className="input-field" placeholder="Password" type="password" name="password"/><br/>
                    <input onChange={this.handleEmailChange} value={this.state.email} style={styles.formField} className="input-field" placeholder="email" type="email" name="email"/><br/>
                    <input onClick={this.handleSubmit} style={styles.submit} className="submit" type="button" value="Submit" name="submit"/>
                </form>
            </div>
        )
    }
}