import React, { Component } from 'react'
import Item from './components/Item';
import Navbar from './components/Navbar';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NotFound from './components/NotFound';

class App extends Component {

  state = {
    cart: {},
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        description: 'veg is yummy & healthy'
      },
      {
        id: 2,
        name: 'Non-Veg',
        price: 200.00,
        canBuy: true,
        description: 'non-veg is yummy & not always healthy'
      }
    ],
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
    let { items } = this.state;
    return items.map((item) => {
      return (
        <Item value={item} key={item.id} onBuy={e => this.addToCart(e)} />
      )
    })
  }

  renderCart() {
    let { cart } = this.state;
    return <CartView value={cart} />
  }

  render() {
    let { cart } = this.state
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="/">home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">login</Link>
              </li>
            </ul>
            <hr />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/items" render={props => this.renderItems()} />
                <Route path="/cart" render={props => this.renderCart()} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}


export default App;