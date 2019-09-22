
import React, { Component } from 'react';

// import store from '../store'

import { connect } from '../react-store';
import { withCard } from '../react-style';

class TopicList extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         let topics = store.getState().topics;
    //         this.setState({ topics })
    //     })
    // }
    // componentWillUnmount(){
    //     //...
    // }
    // commonLogic(){
    //     //..
    // }
    renderTopics() {
        // let { topics } = this.state;
        let { topics } = this.props;
        return topics.map((topic, idx) => {
            return (
                <li className="list-group-item" key={idx}>{topic}</li>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderTopics()}
            </div>
        );
    }
}

// export default TopicList;

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

export default withCard({ header: 'TopicList' }, connect(mapStateToProps, TopicList))
