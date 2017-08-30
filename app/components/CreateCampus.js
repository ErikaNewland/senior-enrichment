
import React, {Component} from 'react';

class CreateCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusNameInput = "",
      campusImageIn = ""
    }
  }
  
  handleChange(event){
    this.setState([event.name]=event.target.value)
  }
  
  render () {
    return (
    <form>
      <label>
        Campus Name
         <input type="text" name="campusName" value = {this.state.campusNameInput} onChange = {this.handleChange}/>
      </label>
      <label>
        Campus Image URL
       <input type="text" name="campusName" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )}
}