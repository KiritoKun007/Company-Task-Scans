import * as actionTypes from '../actions/actionTypes'

const initialState = {
    scans: null,
    scan: null
}

export const scansReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_SCANS:
            return {
                ...state,
                scans: action.scans
            }

        case actionTypes.GET_SCAN_CRITERIA: 
            let scan = state.scans.filter(scan => scan.id === +action.scanId)

            return {
                ...state,
                scan: scan[0]
            }

        case actionTypes.CLEAN_SCAN: 
            return {
                ...state,
                scan: null
            }
    
        default:
            return state;
    }
}