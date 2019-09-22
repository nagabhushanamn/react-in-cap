
import React from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'
import ActionBox from './components/ActionBox'
import A from './components/A'
import Box from './components/Box';
import NonVeg from './components/NonVeg';
import Veg from './components/Veg';
import TopicList from './components/TopicList';
import CommentList from './components/CommentList';

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

        <div className="row">
          <div className="col-sm-6 col-md-6">
            <TopicList />
          </div>
          <div className="col-sm-6 col-md-6">
            <CommentList />
          </div>
        </div>

        {/* 
        <Box>
          <Veg />
          <Veg />
          <h1>&#8377;200.00</h1>
        </Box>

        <Box>
          <NonVeg />
          <NonVeg />
          <NonVeg />
          <h1>&#8377;300.00</h1>
        </Box> 
        */}

        {/* 
        <A color="red" />
        <A color="green" />
        <A color="blue" /> 
        */}

        {/* <ActionBox /> */}

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