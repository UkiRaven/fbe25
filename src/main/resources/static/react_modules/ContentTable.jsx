import React from 'react';
import {Link} from "react-router";

const styles = {
    container: {
        border: "1px solid rgba(128,128,128,0.25)",

        overflow: "hidden",
        backgroundColor: "white",
        position: "relative",
        margin: "0 -25px 0 25px",
        padding: "0 25px 25px 25px",
        minWidth: "225px",
        width: "300px",
        maxHeight: "400px",
        boxShadow: "0 0 10px 0 rgba(51,51,51,0.12)",
    },
    link: {
        margin: "6px",
        display: "block",
    }
};

export default class ContentTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let headers = this.props.articles.map((article) =>
            <Link style={styles.link}
                  key={article._links.self.href}
                  to={"/article/" + article._links.self.href.slice(article._links.self.href.lastIndexOf('/')+1)}
            >
                {article.title} ({new Date(article.creationDate).toLocaleDateString()})
            </Link>
        );
        return(
            <div className="content-table" style={styles.container}>
                <h2>Recent articles</h2>
                <hr style={{marginBottom: "10px"}}/>
                {headers}
            </div>
        )
    }
}