//selected campus

import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const NEW_STUDENT = 'NEW_STUDENT'
// const DELETE_STUDENT = 'DELETE_STUDENT'  //may not need- just use getStudents
const UPDATE_STUDENT = 'UPDATE_STUDENT'

export const getStudents = function(students) {
  return {type: GET_STUDENTS, students}
}

const newStudent = function(student) {
  return {type: NEW_STUDENT, student}
}

// const deleteStudent = function(student) {   //may not need- maybe just use get Students
//   return {type: DELETE_STUDENT, student}
// }

const updateStudent = function(student) {
  return {type: UPDATE_STUDENT, student}
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
  return function thunk (dispatch){
    axios.post('/api/students', student)
      .then(res=>{
        res.data
      })
      .then(student=>{
        dispatch(newStudent(student))
      })
      .catch(console.log)
  }
}

export const removeStudent = (student) => {
  console.log('student.id', student)
  return function thunk (dispatch) {
    axios.delete(`/api/students/${student}`)
      .then(res=>{
        console.log('res', res)
        return res.data})
      .then(students=>{
        console.log(students, "students")
        dispatch(getStudents(students))})
      .catch(console.log)
  }
}

export const changeStudent = (student) => {
  return function thunk(dispatch) {
    axios.put(`/api/students/${student.id}`, student)
      .then(res=>res.data)
      .then(student=>{
        dispatch(updateStudent(student))
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
    case UPDATE_STUDENT: {
      const studentIndex = state.findIndex(student=>{
        return student.id === action.student.id
      })
      let newState = [...state];
      if(studentIndex!==-1){
        newState[studentIndex] = action.student
      } else {
        newState.push(action.student)
      }
      return newState
    }
    default: return state;
  }
}