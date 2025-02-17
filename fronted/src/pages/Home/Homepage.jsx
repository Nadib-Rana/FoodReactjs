import React from 'react';
import classes from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={classes.homepage}>
      <h1>Welcome to Our Restaurant</h1>
      <p>Discover our delicious menu and enjoy a great dining experience.</p>
      <img src="/img/banner.png" alt="Restaurant Banner" className={classes.banner} />
    </div>
  );
}