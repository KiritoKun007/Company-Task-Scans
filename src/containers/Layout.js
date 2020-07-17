import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Scans from './Scans/Scans'

const Layout = () => {
    return (
        <Fragment>
            <Switch>
                <Route path='/scans'>
                    <Scans />
                </Route>
            </Switch>
            <Redirect from='/' to='/scans' />
        </Fragment>
    )
}

export default Layout
