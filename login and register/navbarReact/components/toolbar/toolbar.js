import React from 'react';
import './toolbar.css';

const toolbar = (props) =>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <button className="togglebutton" onClick={props.clickdrawerHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <div className="toolbar_logo"><a href="/">DSC Bvp</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Achivements</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;