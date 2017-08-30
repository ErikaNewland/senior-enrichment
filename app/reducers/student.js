//selected campus

import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'

export const getStudents = function(students) {
  return {type: GET_STUDENTS, students}
}

export const fetchStudents=() =>{
  return (dispatch, state)=>{
    axios.get('/api/students')
      .then((res)=>{
        return res.data
      })
      .then(students=>{
        dispatch(getStudents(students));
      })
      .catch(console.log)
  }
}



export default function reducer(state = [], action) {
  console.log('action', action)
  switch(action.type) {
    case GET_STUDENTS:  {
      return action.students
    };
    default: return state;
  }
}