//selected campus

import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'

export const getCampuses = function (campuses) {
  return { type: GET_CAMPUSES, campuses }
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

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES: return action.campuses;
    default: return state;
  }
}
