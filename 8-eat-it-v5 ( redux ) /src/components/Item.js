import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review'

import { loadReviews } from '../actions/review'
import { buy } from '../actions/cart'

import { connect } from 'react-redux'

class Item extends Component {
    state = {
        currentTab: 1,
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { id } = this.props.value;
                this.props.loadReviews(id);
            }
        })
    }
    handleBuy(e) {
        let { value } = this.props;
        this.props.buy(value);
    }
    renderBuyBtn(item) {
        if (item.canBuy)
            return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-dark">buy</button>
    }
    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
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
                <div>{this.renderReviews()}</div>
            )
            default: return null
        }
    }
    render() {
        let { value: item } = this.props;
        let { currentTab } = this.state;
        let cartLine = this.props.cart[item.id] || {};
        let qty = cartLine.qty || 0
        return (
            <div>
                <div key={item.id} className="list-group-item">
                    <h5>{item.name}</h5>
                    <h6>&#8377;{item.price}</h6>
                    {this.renderBuyBtn(item)}
                    &nbsp; <span className="badge badge-danger">{qty}</span>
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
            </div>
        );
    }
}



function mapStateToProps(state, props) {
    let { id } = props.value
    return {
        reviews: state.reviews[id] || [],
        cart: state.cart
    }
}
const mapDisptachToProps = { loadReviews, buy }


export default connect(mapStateToProps, mapDisptachToProps)(Item);