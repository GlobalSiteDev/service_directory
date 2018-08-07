import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Navigation.css';

const navigation = () => (
    <nav>
        <NavigationItems className={classes.Navigation} />
    </nav>
);

export default navigation;