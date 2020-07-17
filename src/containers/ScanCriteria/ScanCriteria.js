import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/index'
import ScanCriteriaDetail from '../../components/Scans/ScanCriteriaDetail/ScanCriteriaDetail'

const ScanCriteria = () => {

    let { scanId } = useParams()

    const scan = useSelector(state => state.scans.scan)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreator.getScanCriteria(scanId))
        return () => {
            dispatch(actionCreator.cleanScanDetail())
        } 
    }, [scanId, dispatch])

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    let scanDetail = null 
    if(scan) {
        scanDetail = <ScanCriteriaDetail scan={scan} />
    }

    return scanDetail
}

export default ScanCriteria
