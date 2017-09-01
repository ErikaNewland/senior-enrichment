import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {changeStudent, removeStudent} from '../reducers'


class  Student extends Component  {
    constructor(props) {
        super(props)
        this.state={
            showForm: false,
            nameInput: this.props.student.name,
            emailInput: this.props.student.email,
            campusInput: this.props.campuses
        }
        this.handleEditClick= this.handleEditClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleEditClick(event) {
        this.setState({showForm: true})
    }

    handleDeleteClick(event) {
        event.preventDefault()
        this.props.removeStudent(this.props.student.id)
    }

    handleChange(event){
        switch(event.target.name) {
            case "name": return this.setState({nameInput: event.target.value})
            case "email": return this.setState({emailInput: event.target.value})
            case "campus": return this.setState({campusInput: event.target.value })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const student = {
            id: this.props.student.id,
            name: this.state.nameInput,
            email: this.state.emailInput,
            campusId: Number(this.state.campusInput)  
        }
        this.props.updateStudent(student)

    }
    
    render(){
    const student = this.props.student
    const campuses = this.props.campuses
    const campus = student.campus ? `This student is studying at ${student.campus.name}` : "";
    return (
    <div>
    <div hidden = {this.state.showForm}>
        <h1>Student Name</h1>
        <h2>{student.name}</h2>
        <h1>Student Email</h1>
        <h2>{student.email}</h2>
        <p>{campus}</p>
        <button onClick = {this.handleEditClick}>Edit</button>
        <button onClick = {this.handleDeleteClick}>Delete Student</button>
    </div>
    <form hidden  = {!this.state.showForm} onSubmit = {this.handleSubmit}>
        <label>
        Student Name:
            <input type="text" name="name" value = {this.state.nameInput} onChange = {this.handleChange}/>
        </label>
        <label>
        Student Email:
            <input type="text" name="email" value = {this.state.emailInput} onChange = {this.handleChange} />
        </label>
        <label>
        Campus
            <select onChange= {this.handleChange} name="campus">
                {campuses.map(campus=>{
                    return <option key = {campus.id} value={campus.id}>{campus.name}</option>
                })}
            </select>    
        </label>
    <input type="submit" value="Submit" />
    </form>
    </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStudent: function(student) {
            dispatch(changeStudent(student))
        },
        removeStudent: function(student) {
            dispatch(removeStudent(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)
