import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label>
                    <br/>
                    <label>
                        Password
                        <input type="password" name="password"/>
                    </label>
                </form>
            </div>
        )
    }
}