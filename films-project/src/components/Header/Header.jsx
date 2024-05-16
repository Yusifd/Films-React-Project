import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header">
            <Link to="/">
            <h1 className="header__title">
                FilmTime
            </h1>
            </Link>
        </header>
    );
}

export default Header;