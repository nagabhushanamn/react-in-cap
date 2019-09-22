import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext'

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    A Component : {this.props.color}
                    <ColorContext.Provider value={this.props.color}>
                        <B />
                    </ColorContext.Provider>
                </pre>
            </div>
        );
    }
}

export default A;