import React from "react";
import Clock from "./Clock.jsx";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Look at this clock, this clock is amazing</h1>
                <Clock/>
            </div>
        )
    }
}