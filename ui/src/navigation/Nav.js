import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/dems">Democrats</Link>
        </li>
        <li>
            <Link to="/repubs">Republicans</Link>
        </li>
        <li>
            <Link to="/indies">Independents</Link>
        </li>
        <li>
            <Link to="/males">Males</Link>
        </li>
        <li>
            <Link to="/females">Females</Link>
        </li>
    </ul>
)