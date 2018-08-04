import React from 'react';

import classes from './Content.css';

const content = () => (
    <div className={classes.Content}>
        <div className={classes.LeftSidebar}></div>
        <div className={classes.ServiceDirectory}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>

        </div>
        <div className={classes.RightSidebar}></div>
    </div>
);

export default content;