import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

import Feed from '../../../assets/images/Feed.png';
import Ask from '../../../assets/images/Ask.png';
import Companies from '../../../assets/images/Companies.png';
import Services from '../../../assets/images/Services.png';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" width="24px" height="23px"  
        navIcon={Feed}>Feed</NavigationItem>
        <NavigationItem link="/" width="24px" height="24px"  
        navIcon={Ask} leftMargin="1px">Ask a Colleague</NavigationItem>
        <NavigationItem link="/" width="21px" height="24px"  
        navIcon={Companies} leftMargin="3px">Companies</NavigationItem>
        <NavigationItem link="/" width="19px" height="24px"  
        navIcon={Services} leftMargin="4px">Service Directory</NavigationItem>
    </ul>
);

export default navigationItems;