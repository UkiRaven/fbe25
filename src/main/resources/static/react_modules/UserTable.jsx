import React from 'react';
import {Link} from "react-router";

const styles = {
    table: {
        backgroundColor: "white",
        width: "85%",
        margin: "0 auto",
        border: "1px solid rgba(0,0,0,0.2)",
        padding: "10px 25px 10px 25px",
        textAlign: "center",
        boxShadow: "0 0 10px 0 rgba(51,51,51,0.12)"
    }
};

export default class UserTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userNames = this.props.users.map(
            (user) => <tr key={user._links.self.href}>
                        <td>
                            <Link to={"/user/" + user._links.self.href.slice(user._links.self.href.lastIndexOf('/')+1)}>
                                {user.nickname}
                            </Link>
                        </td>
                        <td>
                            {user.email}
                        </td>
                     </tr>
        );
        return(
            <table style={styles.table}>
                <tbody>
                    <tr>
                        <th>Nickname</th>
                        <th>Email</th>
                        <th>Articles count</th>
                        <th>Rating</th>
                    </tr>
                        {userNames}
                </tbody>
            </table>
        )
    }
}