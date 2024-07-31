import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const currentUser = useSelector((state) => state.user.userData);
    return (
        <div className="header-container">
            <Link to="/">
                <div className="logo">
                    <img src="/icons/home.png" alt="home" />
                    <span>Xodus</span>
                </div>
            </Link>
            <Link to="/settings">
                <div className="user-details">
                    <span>{currentUser?.username} </span>

                    <img src="/icons/settings.png" alt="settings" />
                </div>
            </Link>
        </div>
    );
};

export default Header;
