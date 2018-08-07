import React from 'react';

import classes from './Content.css';
import ThreeStars from '../../assets/images/ThreeStars.png';
import CoolHR from '../../assets/images/CoolHR.png';

import Navigation from '../Navigation/Navigation';
import Ad from '../Ad/Ad';
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies';
import Footer from '../Footer/Footer';
import ProposedPeople from '../ProposedPeople/ProposedPeople';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';


const content = () => (
    <div className={classes.Content}>
        <div className={classes.LeftSidebar}>
            <Navigation />
            <Ad adImage={ThreeStars} borderBottom="1px solid #e0e2e6" marginLeftUpper="3px" marginLeftImg="2px" marginLeftLower="1px"></Ad>
            <FeaturedCompanies link="/"></FeaturedCompanies>
            <Footer />
        </div>
        <div className={classes.ServiceDirectory}>
            <div className={classes.ServiceDirectory__item}></div>
            <div className={classes.ServiceDirectory__item}></div>
            <div className={classes.ServiceDirectory__item}></div>
            <div className={classes.ServiceDirectory__item}></div>
            <div className={classes.ServiceDirectory__item}></div>
            <div className={classes.ServiceDirectory__item}></div>
        </div>
        <div className={classes.RightSidebar}>
          <ProposedPeople link="/"></ProposedPeople>
          <FeaturedProducts link="/"></FeaturedProducts>
          <Ad adImage={CoolHR} border="1px solid #dddddd" marginLeftUpper="2px" marginLeftImg="1px" marginLeftLower="2px"></Ad>
        </div>
    </div>
);

export default content;