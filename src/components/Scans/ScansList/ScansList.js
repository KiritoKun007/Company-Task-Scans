import React from 'react'
import styles from './ScansList.module.scss'
import ScanItem from '../ScanItem/ScanItem'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import ScanCriteria from '../../../containers/ScanCriteria/ScanCriteria'

const ScansList = ({ scans }) => {

    let scanItems = scans.map(scan => (
        <ScanItem 
            key={scan.id} 
            name={scan.name} 
            tag={scan.tag}
            color={scan.color}
            id={scan.id} />
    ))

    return (
        <div className='PhoneSection'>
            <ul>
                {scanItems}
            </ul>
        </div>
    )
}

const Scans = ({ scans }) => {
    let { path } = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path}>
                <ScansList scans={scans} />
            </Route>
            <Route path={`${path}/:scanId`}>
                <ScanCriteria />
            </Route>
        </Switch>
    )
}

export default Scans
