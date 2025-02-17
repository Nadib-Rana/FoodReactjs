import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>Restaurant Name</Link>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <nav className={`${classes.nav} ${isMenuOpen ? classes.show : ''}`}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to="/" className={classes.navLink}>Home</Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/menu" className={classes.navLink}>Menu</Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/orders" className={classes.navLink}>Orders</Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/cart" className={classes.navLink}>Cart</Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/profile" className={classes.navLink}>Profile</Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/login" className={classes.navLink}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;