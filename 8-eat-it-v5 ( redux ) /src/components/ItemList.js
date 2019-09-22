

import React, { Component } from 'react';
import Item from './Item';

import { loadItems } from '../actions/item'
import { connect } from 'react-redux'


class ItemList extends Component {
    componentDidMount() {
        this.props.loadItems('food', 100);
    }
    renderItems() {
        let { items } = this.props;
        return items.map((item) => {
            return (
                <Item value={item} key={item.id} />
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


function mapStateToProps(state) {
    return {
        items: state.items
    }
}
const mapDisptachToProps = { loadItems }


export default connect(mapStateToProps, mapDisptachToProps)(ItemList);