import React from 'react';

import classes from './Ad.css';


const ad = (props) => (

  <div className={classes.Ad} style={{ borderBottom: props.borderBottom }}>
    <p style={{ marginLeft: props.marginLeftUpper }}>Advertisement</p>
    <div style={{ backgroundImage: 'url(' + props.adImage + ')', marginLeft: props.marginLeftImg, border: props.border }}>
    </div>
    <p style={{ marginLeft: props.marginLeftLower }}>Ads By Denteez.com</p>
  </div>
  );

export default ad;