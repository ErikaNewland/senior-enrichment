import React from 'react'
import CreateStudent from './CreateStudent'
import {connect} from 'react-redux'
import Student from './Student'
import { Link } from 'react-router-dom'


function Students(props) {
  const students = props.students
  return (
    <div>
      <ul>
      {students.map((student)=>{
        return <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
      })}
      </ul>
        <h1>Add A New Student</h1>
      <CreateStudent/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(Students)