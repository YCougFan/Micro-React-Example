import React from 'react';
import { Route }  from 'react-router-dom'
import Senators from '../senate/Senators'

export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/dems" component={Dems} />
        <Route path="/repubs" component={Repubs} />
        <Route path="/indies" component={Indies} />
        <Route path="/males" component={Males} />
        <Route path="/females" component={Females} />
    </div>
)

const Home = () => (
    <div>
        <h1>Welcome to the Senate!</h1>
        <h3>I am the SENATE!</h3>
    </div>
)

const Dems = () => (
    <div>
        <Senators match="dems"/>
    </div>
)

const Repubs = () => (
    <div>
        <Senators match="repubs"/>
    </div>
)

const Indies = () => (
    <div>
        <Senators match="indies"/>
    </div>
)

const Males = () => (
    <div>
        <Senators match="males"/>
    </div>
)

const Females = () => (
    <div>
        <Senators match="females"/>
    </div>
)