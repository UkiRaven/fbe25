import React from 'react'
import {Link} from "react-router";

const styles = {
    container: {
        margin: "25px auto",
        width: "85%",
        color: "rgba(0,0,0,0.8)",
    },
    article_container: {
        position: "relative",
        boxShadow: "0 0 20px 0 rgba(51,51,51,0.12)",
        padding: "20px 30px 20px 30px ",
        overflowX: "hidden"
    },
    title: {
        textAlign: "center",
    },
    comments: {
        padding: "30px",
        marginTop: "10px",
        boxShadow: "0 0 20px 0 rgba(51,51,51,0.12)"
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

    getArticles() {
        fetch('/article/' + this.props.params.id)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    article: result
                })
            })
    }
    componentDidMount() {
        this.getArticles();
    }

    handleArticleDelete() {
        fetch("/article/" + this.props.params.id,
            {
                method: "DELETE",
            }
        ).then(response => console.log(response))
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