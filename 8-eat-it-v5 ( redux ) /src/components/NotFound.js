import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">404, NotFound</h1>
                <hr className="my-4" />
                <a className="btn btn-primary btn-lg" href="/" role="button">go home</a>
            </div>
        </div>
    );
};

export default NotFound;