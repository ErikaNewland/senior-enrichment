import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addStudent } from '../reducers'


class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      emailInput: "",
      campusInput: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    switch (event.target.name) {
      case "name": {
        return this.setState({ nameInput: event.target.value });
      }
      case "email": {
        return this.setState({ emailInput: event.target.value });
      }
      case "campus": {
        return this.setState({ campusInput: event.target.value });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const student = {
      name: this.state.nameInput,
      email: this.state.emailInput,
      campusName: this.state.campusInput
    }
    this.props.addNewStudent(student);
    this.setState({ nameInput: "", emailInput: "", campusInput: "" })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} value={this.state.nameInput} />
        </label>
        <label>
          Email:
           <input type="text" name="email" onChange={this.handleChange} value={this.state.emailInput} />
        </label>
        <label>
          Campus Name:
           <input type="text" name="campus" onChange={this.handleChange} value={this.state.campusInput} />
          <input type="submit" value="Submit" />
        </label>

      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewStudent: function (student) { dispatch(addStudent(student)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent)