import React from "react";

export default class Article extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <p>{this.props.content}</p>
                </div>
                <div>
                    <span>{this.props.creationDate}</span>
                </div>
            </div>
        )
    }
}