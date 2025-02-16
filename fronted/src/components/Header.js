import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const user = {
    name: 'jhon',
  };

  const cart = {
    totalcound: 10,
  };

  const logout = () => {
    // Add your logout logic here
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>Food Mine!</Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to='/profile'>{user.name}</Link>
                <div className={classes.menu}>
                  <Link to='/profile'>Profile</Link>
                  <Link to='/orders'>Orders</Link>
                  <button onClick={logout} className={classes.logoutButton}>Logout</button>
                </div>
              </li>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
            <li>
              <Link to='/cart'>
                Cart
                {cart.totalcound > 0 && <span className={classes.cart_count}>{cart.totalcound}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}