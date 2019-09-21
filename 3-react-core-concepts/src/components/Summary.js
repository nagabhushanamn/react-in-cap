import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let {value}=this.props;
        return (
            <div className="alert alert-danger">
                    Total Actions : <span className="badge badge-primary">{value}</span>
            </div>
        );
    }
}

export default Summary;