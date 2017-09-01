import React, { Component } from 'react'
import { Router as Router, Route, Switch, Link } from 'react-router-dom'
import history from '../history';

import Students from './Students'
import Student from './Student'
import Campuses from './Campuses'
import Campus from './Campus'
import { fetchStudents, fetchCampuses } from '../reducers'
import { connect } from 'react-redux'
import NavBar from './NavBar'

class Root extends Component {


  componentDidMount() {
    this.props.fetchStudents();
    this.props.fetchCampuses();
  }

  render() {
    return (
      <div>
        <div>Hello World
          <Router history={history}>
            <div>
              <NavBar />
              <Switch>
                <Route exact path='/students' component={Students} />
                {this.props.students.map(student => {
                  return <Route path='/students/:studentId' render={
                    (props) => {
                      return <Student student = {student} id={props.match.param} />
                    }
                  }
                  />
                })}
                <Route exact path='/campuses' component={Campuses} />
                {this.props.campuses.map(campus => {
                  return <Route path='/campuses/:CampusId' render={
                    (props) => {
                      return <Campus campus = {campus} id={props.match.param} />
                    }
                  }
                  />
                })}
              </Switch>
            </div>
          </Router>
        </div>
      </div>

    )
  }

}


const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: function () {
      dispatch(fetchCampuses());
    },
    fetchStudents: function () {
      dispatch(fetchStudents())
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root)