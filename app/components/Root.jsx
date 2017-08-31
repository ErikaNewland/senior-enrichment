import React, {Component} from 'react'
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from '../history';

import Students from './Students'
import Campuses from './Campuses'
import {fetchStudents, fetchCampuses} from '../reducers'
import {connect} from 'react-redux'

class Root extends Component {
  

  componentDidMount(){
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  render() {
    return (
      <Router history = {history}>
        <div>Hello World
          <Campuses/>
          <Students/>
        </div>
      </Router>

    )
  }

}


const mapStateToProps = state =>{
  return {}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchCampuses: function(){
      dispatch(fetchCampuses());
    },
    fetchStudents: function(){
      dispatch(fetchStudents())
    }

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Root)