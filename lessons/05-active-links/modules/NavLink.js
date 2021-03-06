import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => {
    return (
        <Link {...props} activeClassName="active"></Link>
    );
};

export default NavLink;