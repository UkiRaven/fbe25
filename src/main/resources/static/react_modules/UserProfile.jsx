import React from 'react';
import {Link} from 'react-router';

const defaultUserPic = "http://www.matchmyemail.com/wp-content/themes/nrg/images/userpic.png";

const styles = {
    container: {
        margin: "0 auto",
        width: "75%",
    },
    userpic: {
        border: "1px solid rgba(128,128,128,0.5)",
        float: "left",
        marginRight: "50px",
        width: "250px",
        height: "250px",
        boxSizing: "initial",
    },
    nickname: {
        minWidth: "250px",
        textAlign: "center",
    },
    rating: {
        // float: "left"
    },
    articles: {
        minWidth: "250px",
        padding: "0 25px 25px 25px",
    },
    link: {
        display: "block",
    },
    about: {
        minWidth: "250px",
        padding: "25px 25px 25px 25px",
    },
    miscContainer: {
        width: "70%",
        float: "left",
    },
    follow: {
        font: "Lato",
        fontSize: "1.2em",
        textAlign: "center",
        padding: "15px",
        marginTop: "10px"
    }
};

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: "", userArticles:[]};
    }

    componentDidMount() {
        this.getUser();
        this.getUserArticles();
    }

    getUser() {
        fetch('/api/accounts/' + this.props.params.id)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    user: result
                })
            });
    }

    getUserArticles() {
        // if (this.state.user == "") return;
        fetch("/api/accounts/" + this.props.params.id + "/articles")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    userArticles: result._embedded.articles
                })
            })
    }

    render() {
        let articles = this.state.userArticles.length == 0 ? "No articles found" : this.state.userArticles.map(
            (article) => <Link to={"/article/" + article._links.self.href.slice(article._links.self.href.lastIndexOf('/')+1)}
                               style={styles.link}>
                           {article.title}
                        </Link>
        );
        let userpic = !this.state.user.userpic ? defaultUserPic : this.state.user.userpic;
        return(
            <div style={styles.container}>
                <div className="block" style={styles.userpic}>
                    <img src={userpic} width="250" height="250" />
                    <div className="block" style={styles.follow}>Follow</div>
                </div>
                <div style={styles.miscContainer}>
                    <div className="block" style={styles.nickname}>
                        <h2>{this.state.user.nickname}</h2>
                    </div>
                    <div className="block" style={styles.about}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>placeholder</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>placeholder</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>placeholder</td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>placeholder</td>
                                </tr>
                                <tr>
                                    <td>Birth Day</td>
                                    <td>placeholder</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="block" style={styles.articles}>
                        <center><h3>User's articles</h3></center>
                        {articles}
                    </div>
                </div>
            </div>
        )
    }
}