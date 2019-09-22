import React, { Component } from 'react'
import Navbar from './components/Navbar';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NotFound from './components/NotFound';
import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge />
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
                <Route path="/items" component={ItemList} />
                <Route path="/cart" component={CartView} />
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