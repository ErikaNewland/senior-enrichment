import { combineReducers } from 'redux'
import campuses from './campus'
import students from './student'


//state: selectedCampus = {}
//       students = [{},{}]
//       campuses = [{},{}]
//       selectedStudent = [{},{}]

const rootReducer = combineReducers({
    campuses,
    students
})

export default rootReducer
export * from './campus'
export * from './student'
