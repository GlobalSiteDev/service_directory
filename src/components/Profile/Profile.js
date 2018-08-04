import React from 'react';

import classes from './Profile.css';

const profile = (props) => (
    <div className={classes.Profile}>
        <span></span>
        <p className={classes.ProfileName}>{props.children}</p>
    </div>
);

export default profile;