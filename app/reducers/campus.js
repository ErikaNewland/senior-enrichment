//selected campus

import axios from 'axios'
import history from '../history'

const GET_CAMPUSES = 'GET_CAMPUSES'
const NEW_CAMPUS = 'NEW_CAMPUS'

const getCampuses = function (campuses) {
  return { type: GET_CAMPUSES, campuses }
}

const newCampus = function(campus) {
  console.log('campus in action creator', campus)
  return {type: NEW_CAMPUS, campus}
}

export const fetchCampuses = () => {
  return function thunk (dispatch, state) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
        history.push('/root')
      })
      .catch(console.log)
  }
}

export const addCampus = (name, image)=>{
  console.log('campus in addCampus', name, image)
  return function thunk (dispatch) {
    axios.post('/api/campuses', {name, image})
      .then(res=>res.data)
      .then(campus=>{
        console.log('campus returning from axios', campus)
        dispatch(newCampus(campus)
      )})
      .catch(console.log)
  }
}

export default function reducer(state = [], action) {
  console.log('campus in reducer', action.campus)
  switch (action.type) {
    case GET_CAMPUSES: return action.campuses;
    case NEW_CAMPUS: {
      return [...state, action.campus]
    }
    default: return state;
  }
}
