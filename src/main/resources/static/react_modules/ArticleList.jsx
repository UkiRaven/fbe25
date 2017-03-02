import React from "react";

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.getArticles();
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

    render() {
        return (
            <div>
                {this.Articles}
            </div>
        )
    }
}