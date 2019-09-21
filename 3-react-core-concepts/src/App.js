
import React from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'
import ActionBox from './components/ActionBox'

class App extends React.Component {

  state = {
    message: 'greetings'
  }

  constructor(props) {
    super();
    // console.log(props);
    console.log("App :: constructor()");
  }
  changeMessage(message) {
    this.setState({ message: message }); // trigger diffing algm in v-doms
  }
  render() {
    console.log("App :: render()");
    let { title, speaker } = this.props;
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title} <small>by {speaker} </small></h1>
        <hr />
      
        <ActionBox />
        
        {/* 
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-dark">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-dark">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-dark">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null} 
        */}


      </div>
    )
  }
  componentDidMount() {
    console.log("App :: componentDidMount()");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App :: componentDidUpdate()")
  }
}

App.defaultProps = {
  // title: 'Unknown',
  speaker: 'Anonymous'
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  speaker: PropTypes.string
}

export default App;