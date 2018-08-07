import React from 'react';

import classes from './FeaturedCompany.css';

const featuredCompany = (props) => (
  <div className={classes.FeaturedCompanyContainer}>
    <div className={classes.FeaturedCompanyImage} style={{ backgroundImage: 'url(' + props.companyImage+ ')' }}></div>
    <div className={classes.FeaturedCompanyInfo}>
      <p>{props.companyName}</p>
      <p>{props.companyServiceType}</p>
      <p>{props.companyLocation}</p>
      <a href={props.link}>Follow Now</a>
    </div>
  </div>
);

export default featuredCompany;