import React, { Component } from 'react'

class App extends Component {
  state = {
    item: {
      id: 1,
      name: 'veg',
      price: 100.00,
      description: 'veg is yummy & healthy'
    }
  }
  constructor(props) {
    super();
    console.log("App :: constructor()");
  }
  render() {
    console.log("App :: render()");
    let { item } = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
        <hr />
        <hr />
        <div className="container">
          <div>
            <h5>{item.name}</h5>
            <h6>&#8377;{item.price}</h6>
            <div>{item.description}</div>
            <button className="btn btn-sm btn-dark">buy</button>
          </div>
        </div>

      </div>
    )
  }
}


export default App;