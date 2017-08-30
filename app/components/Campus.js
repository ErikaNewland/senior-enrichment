import React, {Component} from 'react'
import {connect} from 'react-redux' 


function Campus(props) {
    const studentsAtCampus = props.students.filter((student)=>{
        student.campusID===props.campus.id})

    console.log(studentsAtCampus)

    return (
        <div>
            <h1>{props.selectedCampus.name}</h1>
            <h2>Students At This Campus</h2>
            <ul>
                {studentsAtCampus.map(student=>{
                    <li>student.name</li>
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = function(state) {
    return {
        students: state.students,
        selectedCampus: state.selectedCampus 
    }
}

export default connect(mapStateToProps)(Campus) 