

import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log("Greeting :: constructor()");
    }
    render() {
        console.log("Greeting :: render()");
        let { message } = this.props;
        return (
            <div>
                <div className="alert alert-danger">
                    <p>{message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greeting :: componentDidMount()");
        this.inteval = setInterval(() => {
            this.forceUpdate();
        }, 1000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate()");
        return this.props.message !== nextProps.message;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting :: componentDidUpdate()")
    }
    componentWillUnmount() {
        console.log("Greeting :: componentWillUnmount()")
        clearInterval(this.inteval);
    }
}

export default Greeting;