import React from 'react';

import { connect } from 'react-redux';

const CartBadge = ({ cart }) => {
    let value = Object.keys(cart).length;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            &nbsp;<span className="badge badge-warning">{value}</span>
            item(s) in cart
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(CartBadge);