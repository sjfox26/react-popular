import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/*<DrawerToggle clicked={props.drawerToggleClicked}/>*/}
        <div>
            Most Popular
        </div>
        <nav className={classes.DesktopOnly}>
            {/*<NavigationItems />*/}
            Navigation Items
        </nav>
    </header>
);


export default toolbar;