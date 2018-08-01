import React from 'react';

import classes from './Header.css';
import Wrapper from '../../hoc/Wrapper';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import NotificationItem from '../NotificationItems/NotificationItems';

const header = (props) => (

    <header className={classes.Header}>
        <Wrapper className={classes.Containers}>
            <Logo/>
            <SearchBar/>
            <NotificationItem notificationType="Chat"/>
            <NotificationItem notificationType="Notification"/>
        </Wrapper>
    </header>

);

export default header;