import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>By Language</NavigationItem>
        <NavigationItem link="/by_name">By First Name!</NavigationItem>
    </ul>
);

export default navigationItems;