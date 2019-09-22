
import React from 'react';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-info">
                <a className="navbar-brand" href="/">{title}</a>
            </nav>
        </div>
    );
};

export default Navbar;