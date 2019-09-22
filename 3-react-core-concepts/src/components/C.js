import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    C Component :
                    <ColorContext.Consumer>
                        {value => value}
                    </ColorContext.Consumer>
                </pre>
            </div>
        );
    }
}

export default C;