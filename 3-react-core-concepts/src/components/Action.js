import React, { Component } from 'react';

import './Action.css'

class Action extends Component {
    state = {
        count: 0
    }
    handleAction(e) {
        let { count } = this.state;
        this.setState({ count: ++count })
        let { onAction, value } = this.props;
        if (onAction) {
            onAction({ v: count * value });
        }
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value < 0 ? 'btn-warning' : 'btn-info'}`
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.handleAction(e)} className={className}>{value}</button>
                    <hr />
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;