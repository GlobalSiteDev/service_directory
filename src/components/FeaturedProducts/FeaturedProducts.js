import React from 'react';

import classes from './FeaturedProducts.css';
import Product from './FeaturedProduct/FeaturedProduct';
import ProductImage1 from '../../assets/images/Product1.png';
import ProductImage2 from '../../assets/images/Product2.png';

const featuredProducts = (props) => (
  <div className={classes.FeaturedProductsContainer}>
    <div id={classes.title}>
      <p>Featured Products</p>
      <a href={props.link}>See All</a>
    </div>
    <Product productImage={ProductImage1} productName="Product Name" productDescription="The quick brown fox jumps over the lazy dog." link="/" marginLeft="1px"></Product>
    <Product productImage={ProductImage2} productName="Product Name" productDescription="The quick brown fox jumps over the lazy dog." link="/"></Product>
  </div>
);

export default featuredProducts;
