import React from 'react';

import classes from './NotificationItems.css';

const notificationItem = (props) => (
    <div className={classes[props.notificationType]}></div>
);

export default notificationItem;