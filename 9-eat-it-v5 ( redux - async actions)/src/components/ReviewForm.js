import React, { Component } from 'react';

class ReviewForm extends Component {
    state = {
        isOpen: false
    }
    toggleForm() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleForm(e) {
        e.preventDefault();
        let formData = {
            author: this.refs.author.value,
            stars: this.refs.stars.value,
            body: this.refs.body.value,
        }
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ review: formData });
            this.toggleForm()
        }
    }
    renderForm() {
        const { isOpen } = this.state;
        if (!isOpen)
            return <button onClick={e => this.toggleForm()} className="btn btn-sm btn-dark"><i className="fa fa-plus"></i></button>
        else return (
            <div className="card">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" ref="author" />
                        </div>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" ref="stars">
                                {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" ref="body"></textarea>
                        </div>
                        <button className="btn btn-sm btn-dark">submit</button>
                        &nbsp;<button onClick={e => this.toggleForm()} type="button" className="btn btn-sm btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-8 col-sm-8 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;