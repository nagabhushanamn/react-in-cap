

import React, { Component } from 'react';
import Item from './Item';
import ItemApi from '../api/Item'

class ItemList extends Component {

    state = {
        items: [],
    }

    componentDidMount() {
        ItemApi.get()
            .then(response => response.data)
            .then(items => {
                this.setState({ items })
            })
    }

    renderItems() {
        let { items } = this.state;
        return items.map((item) => {
            return (
                <Item value={item} key={item.id} onBuy={e => this.props.onBuy(e)} />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;