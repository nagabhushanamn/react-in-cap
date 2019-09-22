import React from 'react';

const CartBadge = ({ value }) => {
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            &nbsp;<span className="badge badge-warning">{value}</span>
            item(s) in cart
        </div>
    );
};

export default CartBadge;