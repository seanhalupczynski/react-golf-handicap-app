import React from 'react';

export default function NavBar(){
    
    return(
        <nav className='uk-navbar'>
            <div className='uk-navbar-left'>
                <h3>MyGolfBuddy</h3>
            </div>
            <div className='uk-navbar-right'>
                <a href="" uk-icon='icon: menu'></a>
            </div>
        </nav>
    )
}