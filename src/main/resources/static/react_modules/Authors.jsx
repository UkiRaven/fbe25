import React from 'react'
import UserTable from './UserTable.jsx'

export default class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        fetch('/api/accounts')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    users: result._embedded.accounts.reverse()
                })
            })
    }

    render() {
        return(
            <div>
                <center><h2>List of registered users</h2></center>
                <UserTable users={this.state.users}/>
            </div>
        )
    }
}