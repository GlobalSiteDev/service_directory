import React, { Component } from 'react';
import axios from 'axios';

import classes from './ServiceDirectory.css';
import Category from '../../components/ServiceCategory/ServiceCategory';

class ServiceDirectory extends Component {
  state = {
    categories: []
  };

  componentDidMount () {
    let config = {'Authorization': '5dedb7c6d25c7df324865527f598603c14d7697a'};

    axios.get('http://504080.com/api/v1/services/categories', {headers: config})
        .then( response => {
            this.setState({categories: response.data.data})
            console.log(response);
        } );
  }

  render() {
    const categories = this.state.categories.map(category => {
      return <Category link="/" title={category.title} categoryIcon={category.icon} />
    });
    console.log(categories);
    return (
      <div className={classes.ServiceDirectoryContainer}>
        <div className={classes.Clearfix}>
          <h1>Service Directory</h1>
          <button>Add New Service</button>
        </div>  
        <div className={classes.ServiceCategoriesContainer}>
          {categories}
        </div>
      </div>
    );
  }
}

export default ServiceDirectory;