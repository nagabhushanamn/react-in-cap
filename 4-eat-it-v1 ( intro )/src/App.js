import React, { Component } from 'react'
import classNames from 'classnames'

class App extends Component {

  state = {
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
    currentTab: 1
  }

  changeTab(e, tabIndex) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }

  renderBuyBtn(item) {
    if (item.canBuy)
      return <button className="btn btn-sm btn-dark">buy</button>
  }

  rendeTabPanel(item) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1: return (
        <div>{item.description}</div>
      )
      case 2: return (
        <div>Not Yet</div>
      )
      case 3: return (
        <div>None Yet</div>
      )
      default: return null
    }
  }

  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <h5>{item.name}</h5>
          <h6>&#8377;{item.price}</h6>
          {this.renderBuyBtn(item)}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a onClick={e => this.changeTab(e, 1)} className={`nav-link ${currentTab === 1 ? 'active' : ''}`} href="/">Description</a>
            </li>
            <li className="nav-item">
              <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Ingre..</a>
            </li>
            <li className="nav-item">
              <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
            </li>
          </ul>
          {this.rendeTabPanel(item)}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
        <hr />
        <hr />
        <div className="container">
          {this.renderItems()}
        </div>

      </div>
    )
  }
}


export default App;