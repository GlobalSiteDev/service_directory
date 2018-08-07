import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} >
      <span style={{ 
        backgroundImage: 'url(' + props.navIcon + ')', 
        width: props.width, 
        height: props.height,
        marginLeft: props.leftMargin
        }}>
      </span>
      {props.children}
    </a>
  </li>  
  );

export default navigationItem;