import React from 'react';


import { connect } from 'react-redux';
import { buy } from '../actions/cart';

function renderCartItems(cart, buy) {
    let keys = Object.keys(cart);
    return keys.map((key) => {
        let cartLine = cart[key];
        let { item, qty } = cartLine
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td><i onClick={e => buy(item, 1)} className="fa fa-plus"></i></td>
                <td>{qty}</td>
                <td><i onClick={e => buy(item, -1)} className="fa fa-minus"></i></td>
                <td>&#8377;{item.price * qty}</td>
            </tr>
        )
    })
}

const CartView = ({ cart, buy }) => {
    let isEmpty = Object.keys(cart).length === 0 ? true : false
    return (
        <div className="container">
            <div className="card card-body">
                {isEmpty ? <div>No item(s) in cart</div> : null}
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderCartItems(cart, buy)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
const matDispathToProps = { buy }
export default connect(mapStateToProps, matDispathToProps)(CartView);