import React, { Component } from 'react'

import store from '../store'

export function connect(callback, InputComponent) {

    class Container extends Component {
        constructor(props) {
            super();
            let state = callback(store.getState())
            this.state = { ...state }
        }
        componentDidMount() {
            store.subscribe(() => {
                let state = callback(store.getState())
                this.setState({ ...state })
            })
        }
        componentWillUnmount() {
            //...
        }
        commonLogic() {
            //..
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.state} />
                </div>
            )
        }
    }
    Container.displayName = `<Connect<${InputComponent.name}>`
    return Container;
}