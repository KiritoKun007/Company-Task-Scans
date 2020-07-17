import * as actionTypes from '../actions/actionTypes'

const initialState = {
    scans: null
}

export const scansReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_SCANS:
            return {
                ...state,
                scans: action.scans
            }
    
        default:
            return state;
    }
}