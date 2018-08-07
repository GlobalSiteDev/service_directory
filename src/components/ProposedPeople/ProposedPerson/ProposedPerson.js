import React from 'react';

import classes from './ProposedPerson.css';

const proposedPerson = (props) => (
  <div>
    <p style={{ marginLeft: props.marginLeft}}>{props.personName}</p>
    <div className={classes.ProposedPersonContainer} style={{ marginBottom: props.marginBottom, marginTop: props.marginTop }}>
      <div className={classes.ProposedPersonImage} style={{ backgroundImage: 'url(' + props.personImage+ ')' }}></div>
      <div className={classes.ProposedPersonInfo}>
        <p>{props.personPosition}</p>
        <p>{props.personLocation}</p>
        <a href={props.link}>Add Friend</a>
      </div>
    </div>
  </div>
);

export default proposedPerson;