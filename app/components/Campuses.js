import React from 'react';
import CreateCampus from './CreateCampus'
import {connect} from 'react-redux'
import Campus from './Campus'
import { Link } from 'react-router-dom'


function Campuses(props) {
  const campuses = props.campuses
  return (
    <div>
      <ul> 
        {campuses.map((campus)=>{
          return <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
        })}
      </ul>
       <h1>Add A New Campus</h1>
      <CreateCampus />
    </div>
  )
}

const mapStateToProps=(state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}



export default connect(mapStateToProps)(Campuses)