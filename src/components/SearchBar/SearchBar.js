import React from 'react';

import classes from './SearchBar.css';

const searchBar = (props) => (
    <form>
        <input className={classes.SearchBar} type="text" placeholder="Company Name" />
    </form>
);

export default searchBar;