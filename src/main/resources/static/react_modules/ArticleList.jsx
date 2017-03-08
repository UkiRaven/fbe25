import React from "react";
import Article from "./Article.jsx";

const styles = {
    container: {
        width: "85%",
        margin: "0 auto"
    }
};

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: []};
    }

    getArticles() {
        fetch('/article')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    articles: result
                })
            })
    }

    componentDidMount() {
        this.getArticles();
    }

    render() {
        // console.log(this.state.articles);
        let elements = this.state.articles.map((article) =>
            <Article title = {article.title}
                     content = {article.content}
                     creationDate = {article.creationDate}
                     key = {article.id}
            />
        );
        return (
            <div style={styles.container}>
                {elements}
            </div>
        )
    }
}