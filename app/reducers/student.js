//selected campus

import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const NEW_STUDENT = 'NEW_STUDENT'

const getStudents = function(students) {
  return {type: GET_STUDENTS, students}
}

const newStudent = function(student) {
  return {type: NEW_STUDENT, student}
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

export const addStudent=(student)=>{
  console.log('in add student')
  return function thunk (dispatch){
    console.log('in thunk')
    axios.post('/api/students', student)
      .then(res=>{
        console.log("response", res.data)
        res.data
      })
      .then(student=>{
        console.log('student', student)
        dispatch(newStudent(student))
      })
      .catch(console.log)
  }
}

export default function reducer(state = [], action) {
  switch(action.type) {
    case GET_STUDENTS:  {
      return action.students
    };
    case NEW_STUDENT: {
      return [...state, action.student]
    }
    default: return state;
  }
}