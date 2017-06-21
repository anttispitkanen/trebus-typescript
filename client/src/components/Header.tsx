import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <h1>TreBus.ts</h1>
        <h4>The fastest typed bus app in Tampere</h4>
        <Link to={'/info'}>
            <i className="fa fa-info-circle info-toggle"></i>
        </Link>
    </div>
)

export default Header;