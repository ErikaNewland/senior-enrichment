import React, {Component} from 'react'

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
      <div>Hello World
        <Campuses/>
      </div>/*temporary*/

    )
  }

}


const mapStateToProps = state =>{
  return null
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