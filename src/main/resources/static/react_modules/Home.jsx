import React from 'react';
import ArticleList from './ArticleList.jsx'
import ContentTable from './ContentTable.jsx'

const styles = {
    container: {
        width: "75%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
    }
};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: []};
    }

    getArticles() {
        fetch('/api/articles')
            .then(response => response.json())
            .then(result => {
                // console.log("getting data");
                this.setState({
                    articles: result._embedded.articles.reverse()
                })
            })
    }
    componentDidMount() {
        this.getArticles();
    }

    render() {
        return (
            <div style={styles.container}>
                <ArticleList articles = {this.state.articles}/>
                <ContentTable articles = {this.state.articles}/>
            </div>
        )
    }
}