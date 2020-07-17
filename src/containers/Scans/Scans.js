import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionCreator from '../../store/actions/index'
import ScansList from '../../components/Scans/ScansList/ScansList'

class Scans extends Component {

    componentDidMount() {
        if(!this.props.scans) {
            this.props.getAllScans()
        }
    }

    render() {
        let scans = null 
        if(this.props.scans) {
            scans = <ScansList scans={this.props.scans} />
        }
        return scans
    }
}

const mapStateToProps = state => {
    return {
        scans: state.scans.scans
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllScans: () => dispatch(actionCreator.getAllScans()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scans)
