import React from 'react';

const styles ={
    container: {
        width: "85%",
        margin: "0 auto",
        padding: "30px"
    }
};

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={styles.container}>
                <h2>Some info</h2>
                <p>
                    This project is supposed to be some wordpress like thing.
                    I really wanna finish it or just make it work.
                </p>
            </div>
        )
    }
}