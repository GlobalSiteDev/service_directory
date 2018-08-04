import React from 'react';

import classes from './Header.css';
import Wrapper from '../../hoc/Wrapper';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import NotificationItem from '../NotificationItems/NotificationItems';
import Profile from '../Profile/Profile';

const header = () => (

    <header className={classes.Header}>
        <Wrapper>
            <Logo/>
            <SearchBar/>
            <NotificationItem notificationType="Chat"/>
            <NotificationItem notificationType="Notification"/>
            <Profile>Maximillian Beekeeper</Profile>
        </Wrapper>
    </header>

);

export default header;