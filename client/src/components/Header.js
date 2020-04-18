import React from 'react';
import Navigation from './Navigation'

function Header(props) {
    return(
        <header >
            <Navigation className={props.className} />
        </header>
    );
}



export default Header;