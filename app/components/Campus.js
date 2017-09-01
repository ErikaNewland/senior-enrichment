//I know this should be two different elements joined by a third element rendering one or the other

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changeCampus, removeStudent, changeStudent, removeCampus } from '../reducers'


class Campus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bool: false,
            campusNameInput: props.campus.name,
            hideUpdated: true,
            selectedStudent: this.props.students[0].id
        }
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFormClick = this.handleFormClick.bind(this)
    }

    handleEditClick(event) {
        event.preventDefault();
        if(!this.state.bool) this.setState({ bool: true })
        else this.setState({bool: false})
    }

    handleDeleteClick(event) {
        event.preventDefault()
        console.log(this.props.campus.id)
        this.props.removeCampus(this.props.campus.id)
    }

    handleFormClick(event) {
        event.preventDefault()
        switch(event.target.name) {
            case "campusNameClick": {
                this.props.campus.name = this.state.campusNameInput
                this.state.hideUpdated=false
                return this.props.updateCampus(this.props.campus)
            }
            case "deleteStudent": {
                return this.props.removeStudent(event.target.id)
            }
            case "addStudentButton": {
                const studentIndex = this.props.students.findIndex(student=>{
                    return student.id===Number(this.state.selectedStudent)
                })
                const student = this.props.students[studentIndex]
                return this.props.updateStudent({
                    id: student.id,
                    name: student.name,
                    email: student.email,
                    campusId: this.props.campus.id
                })
            }
            default: {
                console.log('oops')
            }
        }
    }

    handleChange(event) {
        console.log(this.state)
        console.log('event.target.value', event.target.value)
        switch(event.target.name) {
            case "campusName": return this.setState({campusNameInput: event.target.value})
            case "addStudent": return this.setState({selectedStudent: event.target.value})
        }
    }


    render() {
        const campus = this.props.campus
        const students = this.props.students
        const studentsAtCampus = students.filter((student) => {
            return student.campusId === campus.id
        })
        return (
            <div>
                <div className="info" hidden={this.state.bool}>
                    <button onClick={this.handleEditClick}>Edit</button>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                    <h1>{campus.name}</h1>
                 <img className="image" src={campus.image} />
                 <h2>Students At This Campus</h2>
                <ul>
                    {studentsAtCampus.map(student => {
                        return <li key={student.id}>{student.name}</li>
                    })}
                </ul>
            </div>
            <div className="editForm" hidden={!this.state.bool}>
                <form>
                    <label>
                        Campus Name:
                        <input type="text" name="campusName" onChange= {this.handleChange} value={this.state.campusNameInput} />
                        <span hidden={this.state.hideUpdated}>Campus Name Updated</span>
                    </label>
                    <button type="submit" name="campusNameClick" onClick={this.handleFormClick} >Update</button>
                </form>
                <h3>Students At This Campus</h3>
                <ul>
                    {studentsAtCampus.map(student => {
                        return <li key={student.id}>
                            <form>
                                <label>
                                    {student.name}
                                </label>
                                <button type="submit" onClick = {this.handleFormClick} name="deleteStudent" id = {student.id}>REMOVE- PLEASE REASSIGN STUDENT TO A CAMPUS AFTER DELETING</button>
                            </form>
                        </li>
                    })}
                </ul>
                Add Student:
                <form>
                    <select value = {this.state.selectedStudent} name = "addStudent" onChange = {this.handleChange} >
                        {this.props.students.map(student=>{
                            return <option value = {student.id} key = {student.id} >{student.name}</option>
                        })}
                    </select>
                    <button type="submit" value="Submit" name="addStudentButton" onClick = {this.handleFormClick}>Add</button>
                </form>
                <button onClick={this.handleClick}>Done Editing</button>
            </div>
        </div>
        )
    }
}


const mapStateToProps = function (state, ownProps) {
    return {
        students: state.students
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
      updateCampus: function(campus){
        dispatch(changeCampus(campus))
      },
      removeStudent: function(student) {
          dispatch(removeStudent(student))
      },
      updateStudent: function(student) {
          dispatch(changeStudent(student))
      },
      removeCampus: function(campusId) {
          dispatch(removeCampus(campusId))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus) 