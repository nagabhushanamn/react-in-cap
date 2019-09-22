import React, { Component } from 'react'

export function withCard(styles, InputComponent) {
    class Container extends Component {
        render() {
            return (
                <div className="card">
                    <div className="card-header">{styles.header}</div>
                    <div className="card-body">
                        <InputComponent {...this.props} />
                    </div>
                </div>
            )
        }
    }
    Container.displayName = `<Connect<${InputComponent.name}>`
    return Container;
}