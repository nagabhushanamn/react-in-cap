import React, { Component } from 'react'
import Item from './components/Item';
import Navbar from './components/Navbar';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';

class App extends Component {

  state = {
    isCartOpen: false,
    cart: {},
    items: [
      {
        id: 1,
        name: 'veg',
        price: 100.00,
        canBuy: true,
        description: 'veg is yummy & healthy'
      },
      {
        id: 2,
        name: 'non-veg',
        price: 200.00,
        canBuy: true,
        description: 'non-veg is yummy & not always healthy'
      }
    ],
  }
  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item) {
    let { cart } = this.state;
    let { id } = item;
    let cartLine = cart[id] || null;
    if (!cartLine) {
      cartLine = { item, qty: 1 }
    } else {
      cartLine = { ...cartLine, qty: cartLine.qty + 1 }
    }
    cart = { ...cart, [id]: cartLine }
    this.setState({ cart })
  }

  renderItems() {
    let { items, isCartOpen } = this.state;
    if (!isCartOpen)
      return items.map((item) => {
        return (
          <Item value={item} key={item.id} onBuy={e => this.addToCart(e)} />
        )
      })
  }

  renderCart() {
    let { cart, isCartOpen } = this.state;
    if (isCartOpen)
      return <CartView value={cart} />
  }

  render() {
    let { cart, isCartOpen } = this.state
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a onClick={e => this.toggleCart(e)} class="nav-link" href="/">{isCartOpen ? 'items' : 'cart'}</a>
          </li>
        </ul>
        <hr />
        <div className="container">
          {this.renderItems()}
          {this.renderCart()}
        </div>
      </div>
    )
  }
}


export default App;