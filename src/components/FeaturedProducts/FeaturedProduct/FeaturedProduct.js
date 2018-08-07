import React from 'react';

import classes from './FeaturedProduct.css';

const featuredProduct = (props) => (
  <div>
    <p style={{ marginLeft: props.marginLeft }}>{props.productName}</p>
    <div className={classes.FeaturedProductContainer}>
      <div className={classes.FeaturedProductImage} style={{ backgroundImage: 'url(' + props.productImage+ ')' }}></div>
      <div className={classes.FeaturedProductInfo}>
        <p>Product Short Description.<br/>{props.productDescription}</p>
      </div>
    </div>
  </div>
);

export default featuredProduct;