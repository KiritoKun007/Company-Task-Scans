import axios from "axios"
import * as actionTypes from './actionTypes'

export const getAllScans = () => {
    return dispatch => {
        axios.get(`/data`)
            .then(response => {
                dispatch({
                    type: actionTypes.GET_ALL_SCANS,
                    scans: response.data
                })
            })
            .catch(error => console.log(error))
    }
}