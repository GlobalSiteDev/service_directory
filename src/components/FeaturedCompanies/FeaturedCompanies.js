import React from 'react';

import classes from './FeaturedCompanies.css';

import Company from './FeaturedCompany/FeaturedCompany';
import CompanyImage1 from '../../assets/images/CompanyImage1.png';
import CompanyImage2 from '../../assets/images/CompanyImage2.png';
import CompanyImage3 from '../../assets/images/CompanyImage3.png';

const featuredCompanies = (props) => (
  <div className={classes.FeaturedCompaniesContainer}>
    <div id={classes.title}>
      <p>Featured Companies</p>
      <a href={props.link}>See All</a>
    </div>
    <Company companyImage={CompanyImage1} companyName="Company Name" companyServiceType="Manufacturer" companyLocation="Belgrade, Serbia" link="/"></Company>
    <Company companyImage={CompanyImage2} companyName="Company Name" companyServiceType="Service Provider" companyLocation="New York, USA" link="/"></Company>
    <Company companyImage={CompanyImage3} companyName="Company Name" companyServiceType="Supplier" companyLocation="London, England" link="/"></Company>
  </div>
);

export default featuredCompanies;