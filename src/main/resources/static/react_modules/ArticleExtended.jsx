import React from 'react'
import {Link, hashHistory} from "react-router";

const styles = {
    container: {
        margin: "0 auto",
        width: "85%",
    },
    article_container: {
        border: "1px solid rgba(128,128,128,0.25)",
        backgroundColor: "white",
        position: "relative",
        boxShadow: "0 0 10px 0 rgba(51,51,51,0.12)",
        padding: "20px 30px 20px 30px ",
        overflowX: "hidden"
    },
    title: {
        textAlign: "center",
    },
    comments: {
        border: "1px solid rgba(128,128,128,0.25)",

        backgroundColor: "white",
        padding: "30px",
        marginTop: "10px",
        boxShadow: "0 0 10px 0 rgba(51,51,51,0.12)"
    },
    link: {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        position: "absolute",
        bottom: "15px",
        right: "25px",
        display: "block",
        textAlign: "center",
        lineHeight: "30px",
        border: "1px solid rgba(0,0,0,0.2)"
    },
    link2: {
        cursor: "pointer",
        width: "60px",
        height: "30px",
        position: "absolute",
        bottom: "15px",
        right: "100px",
        display: "block",
        textAlign: "center",
        lineHeight: "30px",
        border: "1px solid rgba(0,0,0,0.2)"
    }
};
//TODO Handle unexisting articles
export default class ArticleExtended extends React.Component {
    constructor(props) {
        super(props);
        this.handleArticleDelete = this.handleArticleDelete.bind(this);
        this.state = {article: {}};
    }

    goHome() {
        hashHistory.push("/");
    }

    getArticle() {
        fetch('/api/articles/' + this.props.params.id)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    article: result
                })
            })
    }
    componentDidMount() {
        this.getArticle();
    }

    handleArticleDelete() {
        fetch("api/articles/" + this.props.params.id,
            {
                method: "DELETE",
            }
        ).then(response => console.log(response));
        this.goHome();
    }

    render() {
        let content = {__html: this.state.article.content};
        return (
            <div style={styles.container}>
                <div style={styles.article_container}>
                    <div style={styles.title}>
                        <h1>{this.state.article.title}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={content}>

                    </div>
                    <div><span>{new Date(this.state.article.creationDate).toLocaleTimeString()
                    + " " + new Date(this.state.article.creationDate).toLocaleDateString()
                    }</span></div>
                    <div style={styles.link}>Edit</div>
                    <div style={styles.link2} onClick={this.handleArticleDelete}>Delete</div>
                </div>
                    <div style={styles.comments}>
                        Comments
                    </div>
            </div>
        )
    }
}