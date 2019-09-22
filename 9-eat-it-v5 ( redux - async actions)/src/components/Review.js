import React from 'react';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++)
        arr.push(<i style={{ color: 'orange' }} className="fa fa-star" key={i}></i>)
    return arr;
}

const Review = (props) => {
    let { value: review } = props;
    return (
        <div className="row">
            <div className="col-sm-10 col-md-10">
                <div className="alert alert-danger">
                    {renderStars(review.stars)} &mdash; <span>{review.author}</span>
                    <hr />
                    <div>{review.body}</div>
                </div>
            </div>
        </div>
    )
}
export default Review;