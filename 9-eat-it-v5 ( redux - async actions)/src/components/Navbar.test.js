


import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
    it("should render title", () => {
        const component = <Navbar title={"eat-IT"} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(component, container);
        expect(document.body.textContent).toMatch('eat-IT');
    })
})