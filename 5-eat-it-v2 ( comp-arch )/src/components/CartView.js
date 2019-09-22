import React from 'react';

function renderCartItems(cart) {
    let keys = Object.keys(cart);
    return keys.map((key) => {
        let cartLine = cart[key];
        let { item, qty } = cartLine
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{qty}</td>
                <td>&#8377;{item.price * qty}</td>
            </tr>
        )
    })
}

const CartView = ({ value }) => {
    let cart = value;
    let isEmpty = Object.keys(cart).length == 0 ? true : false
    return (
        <div className="container">
            <div className="card card-body">
                {isEmpty ? <div>No item(s) in cart</div> : null}
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartView;