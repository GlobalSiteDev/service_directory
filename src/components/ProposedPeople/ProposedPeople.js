import React from 'react';

import classes from './ProposedPeople.css';
import Person from './ProposedPerson/ProposedPerson';
import PersonImage1 from '../../assets/images/Person1.png';
import PersonImage2 from '../../assets/images/Person2.png';
import PersonImage3 from '../../assets/images/Person3.png';

const proposedPeople = (props) => (
  <div className={classes.ProposedPeopleContainer}>
    <div id={classes.title}>
      <p>People you may know</p>
      <a href={props.link}>See All</a>
    </div>
    <Person personImage={PersonImage1} personName="Dennis Adams" personPosition="Dentist (Practice Owner)" personLocation="London, England" link="/"></Person>
    <Person personImage={PersonImage2} personName="Mary Carpenter" personPosition="Dentist (Practice Owner)" personLocation="Belgrade, Serbia" link="/" marginLeft="1px" marginBottom="17px"></Person>
    <Person personImage={PersonImage3} personName="Danielle Salazar" personPosition="Dentist (Practice Owner)" personLocation="Paris, France" link="/" marginTop="6px"></Person>
  </div>
);

export default proposedPeople;