import React from "react";
import Index from "./Index.jsx";
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
        padding: "10px",
        margin: "10px auto 0 auto",
    }
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit() {
        this.props.login(this.state.username, this.state.password);
        //Index.loginTry(this.state.username, this.state.password);
        // this.login();
    };

    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }



    render() {
        //TODO fix
        if (this.props.user.authenticated) return (<div className="block" style={styles.container}>You're already logged in</div>);
        else {
            return (
                <div className="block" style={styles.container}>
                    <center><h2>Login</h2></center>
                    <form style={styles.form}>
                        <input onChange={this.handleUsernameChange} value={this.state.username} style={styles.formField}
                               className="input-field" placeholder="Username" type="text" name="name"/><br/>
                        <input onChange={this.handlePasswordChange} value={this.state.password} style={styles.formField}
                               className="input-field" placeholder="Password" type="password" name="password"/><br/>
                        <input onClick={this.handleSubmit} style={styles.submit} className="button" type="button"
                               value="Submit" name="submit"/>
                    </form>
                </div>
            )
        }
    }
}

