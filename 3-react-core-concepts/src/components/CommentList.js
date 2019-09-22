
import React, { Component } from 'react';

// import store from '../store'

import { connect } from '../react-store'

class CommentList extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         comments: store.getState().comments['java']
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         let comments = store.getState().comments['java'];
    //         this.setState({ comments })
    //     })
    // }
    // componentWillUnmount() {
    //     //...
    // }
    // commonLogic() {
    //     //..
    // }
    renderComments() {
        // let { comments } = this.state;
        let { comments } = this.props;
        return comments.map((comment, idx) => {
            return (
                <li className="list-group-item bg-warning" key={idx}>{comment}</li>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">Comment List</div>
                <div className="card-body">
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}

// export default CommentList;

function mapStateToProps(state) {
    return {
        comments: state.comments['java']
    }
}

export default connect(mapStateToProps, CommentList);