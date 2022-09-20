import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import menu from '../images/menu.svg';
import exit from '../images/exit.svg';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../database/firebase';

function Header() {
    const [isNavigationActive, setIsNavigationActive] = useState(false);
    const menuClick = () => setIsNavigationActive(true);
    const exitClick = () => setIsNavigationActive(false);

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        auth.signOut();
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon"
                />
            </Link>

            <div className="header_search">
                <input className="header_searchInput"
                    type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_menu">
                <img id="mobile-menu" src={menu} alt="menu" onClick={menuClick} />
            </div>

            <nav className={`header_nav navigation_${isNavigationActive ? "active" : "not_active"}`}>
                <div className="header_exit">
                    <img id="mobile-exit" src={exit} alt="exit" onClick={exitClick} />
                </div>

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLine1">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header_optionLine2">
                            {user ? 'Sign-out' : 'Sign-in'}
                        </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLine1">
                        returns
                    </span>
                    <span className="header_optionLine2">
                        &amp; Orders
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLine1">
                        Your
                    </span>
                    <span className="header_optionLine2">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket" onClick={exitClick}>
                        <ShoppingBasketIcon />
                        <span className="header_optionLine2 header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </nav>
        </div >
    )
}

export default Header