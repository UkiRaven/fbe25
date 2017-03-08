import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return(
            <div style={this.props.style}>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}