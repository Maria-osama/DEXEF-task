import React from 'react';
import menu from '../../icons/menu.png';
import addFriend from '../../icons/addFriend.png';
import questionMark from '../../icons/question-mark.jpg';
import locked from '../../icons/locked.jpg';
import stars from '../../icons/stars.jpg';
import bag from '../../icons/bag.jpg';

const LeftNavbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <img src={menu} />
                    </li>
                    <li className="nav-item">
                        <img src={addFriend} />
                    </li>
                    <li className="nav-item active">
                        <img src={bag} />
                    </li>
                    <li className="nav-item">
                        <img src={stars} />
                    </li>
                    <li className="nav-item">
                        <img src={locked} />
                    </li>
                    <li className="nav-item">
                    <img src={addFriend} />
                    </li>
                    <li className="nav-item">
                    <img src={questionMark} />
                    </li>

                </ul>
            </nav>

        
    )
}

export default LeftNavbar;