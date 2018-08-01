import React from 'react';

import Logo from '../../assets/images/Logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <img className={classes.Logo} src={Logo} alt='Denteez' />
);

export default logo;