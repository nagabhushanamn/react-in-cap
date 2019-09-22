import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review'

class Item extends Component {
    state = {
        currentTab: 1,
        reviews: [
            { author: 'who1', stars: 5, body: 'sample-review-1' },
            { author: 'who2', stars: 3, body: 'sample-review-2' }
        ]
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    handleBuy(e) {
        let { onBuy, value } = this.props;
        if (onBuy) {
            onBuy(value);
        }
    }
    renderBuyBtn(item) {
        if (item.canBuy)
            return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-dark">buy</button>
    }
    renderReviews() {
        let { reviews } = this.state;
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
        return (
            <div>
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
            </div>
        );
    }
}

export default Item;