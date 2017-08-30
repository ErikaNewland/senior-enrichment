const SELECTED_CAMPUS = 'SELECTED_CAMPUS'

export function selectCampus(campus) {
    return {type: SELECTED_CAMPUS, campus}
}

export default function selectedCampus(state={}, action) {
    switch(action.type) {
        case SELECTED_CAMPUS: {
            return action.campus;
        }
        default: return state;
    }
}