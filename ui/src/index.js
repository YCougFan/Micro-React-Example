import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './navigation/Nav'
import Routes from './navigation/Routes'

const App = () => (
    <Router>
        <div>
            <Nav/>
            <hr/>
            <Routes/>
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
