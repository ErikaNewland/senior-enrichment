//selected campus

import axios from 'axios'
import history from '../history'
import {getStudents} from './student'

const GET_CAMPUSES = 'GET_CAMPUSES'
const NEW_CAMPUS = 'NEW_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

const getCampuses = function (campuses) {
  return { type: GET_CAMPUSES, campuses }
}

const newCampus = function(campus) {
  console.log('campus in action creator', campus)
  return {type: NEW_CAMPUS, campus}
}

const updateCampus = function(campus) {
  return {type: UPDATE_CAMPUS, campus}
}

export const fetchCampuses = () => {
  return function thunk (dispatch, state) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
      })
      .catch(console.log)
  }
}

export const addCampus = (name, image)=>{
  return function thunk (dispatch) {
    axios.post('/api/campuses', {name, image})
      .then(res=>res.data)
      .then(campus=>{
        dispatch(newCampus(campus)
      )})
      .catch(console.log)
  }
}

export const changeCampus = (campus) =>{
  return function thunk (dispatch) {
    axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res=>res.data)
      .then(campus=>{
        dispatch(updateCampus(campus))
      })
      .catch(console.log)
  }
}

export const removeCampus = (campusId) => {
  return function thunk (dispatch) {
    axios.delete(`/api/campuses/${campusId}`)
    .then((arrOfStudentsandCampuses)=>{
      console.log('coming from backend', arrOfStudentsandCampuses)
      const students = arrOfStudentsandCampuses.data[0]
      console.log('students', students)
      const campuses = arrOfStudentsandCampuses.data[1]
      console.log('campuses', campuses)
      dispatch(getStudents(students))
      dispatch(getCampuses(campuses))
    })
    .catch(console.log)
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES: return action.campuses;
    case NEW_CAMPUS: {
      return [...state, action.campus]
    }
    case UPDATE_CAMPUS: {
      const campusIndex = state.findIndex(campus=>{
        return campus.id === action.campus.id
      })
      let newState = [...state];
      newState[campusIndex] = action.campus
      return newState
    }
    default: return state;
  }
}
