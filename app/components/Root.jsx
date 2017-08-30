import React, {Component} from 'react'

import Campus from './Campus'
import {fetchStudents, fetchCampuses} from '../reducers'
import {connect} from 'react-redux'

class Root extends Component {
  

  componentDidMount(){
    console.log('props', this.props)
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  render() {
    console.log(this.props.students, this.props.students)
    return (
      <div>Hello World</div>/*temporary*/
    )
  }

}


const mapStateToProps = state =>{
  return {
    students: state.students,
    campuses: state.campuses
  }
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