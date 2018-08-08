import React from 'react';

import classes from './ServiceCategory.css';

const serviceCategory = (props) => (
  
  <div className={classes.ServiceCategoryContainer}>
    <a href={props.link}>
      <div className={classes.CategoryImageContainer}>
        <img className={classes.CategoryImage} src={props.categoryIcon} alt="category icon" style={{width: "120px", height: "120px"}}/>
      </div>
      <div className={classes.CategoryName}>
        <p>{props.title}</p>
      </div>
    </a>
  </div>
);

export default serviceCategory;