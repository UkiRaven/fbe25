import React from "react";
import Article from "./Article.jsx";

const styles = {
    container: {
        maxWidth: "800px",
        minWidth: "400px",
        // margin: "0 auto"
    }

};

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        // console.log(this.state.articles);
        let elements = this.props.articles.map((article) =>
            <Article title = {article.title}
                     content = {article.content}
                     creationDate = {article.creationDate}
                     key = {article._links.self.href}
                     href = {article._links.self.href}
                     id = {article._links.self.href.slice(article._links.self.href.lastIndexOf('/')+1)}
            />
        );
        return (
            <div style={styles.container}>
                {elements}
            </div>
        )
    }
}