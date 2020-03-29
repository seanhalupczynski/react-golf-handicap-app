import React from 'react';
import './style.css';

export default function NavBar(){
    
    return(
        <nav className='uk-navbar'>
            <div className='uk-navbar-left'>
                <h3>MyGolfBuddy</h3>
            </div>
            <div className='uk-navbar-right'>
                {/* <button className='uk-button uk-button-text'uk-toggle='target: .menu-offcanvas-flip'> */}
                    <button className='uk-button uk-button-text'>
                        <span uk-icon='menu'></span>
                    </button>
                    {/* <div className='menu-offcanvas-filp' uk-offcanvas='flip: true, overlay: true'>
                        <h1>HELOO!!!!!</h1>
                        <button className='uk-offcanvas-close' type='button' uk-close></button>
                        <h2>Menu</h2>
                        <ul className='uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical'>
                            <li><a href="#"><span className="uk-margin-small-right user-sign-in" uk-icon="icon: sign-in"></span>Sign In</a></li>
                            <li><a href="#"><span className="uk-margin-small-right menu-user-account-settings" uk-icon="icon: settings"></span>Account Settings</a></li>
                            <li><a href="#"><span className="uk-margin-small-right menu-user-profile" uk-icon="icon: user"></span>My Profile</a></li>
                            <li><a href="#"><span className="uk-margin-small-right menu-post-score" uk-icon="icon: plus-circle"></span>Post Score</a></li>
                            <li><a href="#"><span className="uk-margin-small-right menu-golf-course-search" uk-icon="icon: world"></span>Golf Courses</a></li>
                            <li><a href="#"><span className="uk-margin-small-right user-sign-out" uk-icon="icon: sign-out"></span>Sign Out</a></li>
                        </ul>
                    </div> */}
                {/* </button> */}
            </div>
        </nav>
    )
}