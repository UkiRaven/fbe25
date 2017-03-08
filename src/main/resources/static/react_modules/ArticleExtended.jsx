import React from 'react'

const styles = {
    container: {
        margin: "25px auto",
        width: "85%",
        color: "rgba(0,0,0,0.8)",
    },
    article_container: {
        boxShadow: "0 0 20px 0 rgba(51,51,51,0.12)",
        padding:"30px",
        overflowX: "hidden"
    },
    title: {
        textAlign: "center",
    },
    comments: {
        padding: "30px",
        marginTop: "10px",
        boxShadow: "0 0 20px 0 rgba(51,51,51,0.12)"
    }
};

export default class ArticleExtended extends React.Component {
    constructor(props) {
        super(props);
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
                </div>
                    <div style={styles.comments}>
                        Comments
                    </div>
            </div>
        )
    }
}