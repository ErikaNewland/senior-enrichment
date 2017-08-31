
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCampus} from '../reducers'

 class CreateCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusNameInput: "",
      campusImageInput: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleNameChange(event){
    this.setState({campusNameInput: event.target.value});
  }

  handleImageChange(event){
    this.setState({campusImageInput: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addNewCampus(this.state.campusNameInput, this.state.campusImageInput);
    this.setState({
      campusNameInput: "", 
      campusImageInput: ""
    })
  }
  
  
  render () {
    return (
    <form onSubmit = {this.handleSubmit}>
      <label>
        Campus Name
         <input type="text" name="campusNameInput" value = {this.state.campusNameInput} onChange = {this.handleNameChange} />
      </label>
      <label>
        Campus Image URL
       <input type="text" name="campusImageInput" value = {this.state.campusImageInput} onChange = {this.handleImageChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )}
}

const mapStateToProps= state=>{
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    addNewCampus: function(name, image) {
      dispatch(addCampus(name, image))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampus)