import React from 'react'
import { useParams } from 'react-router'

const ScanCriteria = () => {

    let { scanId } = useParams()

    return (
        <div>
            {scanId}
        </div>
    )
}

export default ScanCriteria
