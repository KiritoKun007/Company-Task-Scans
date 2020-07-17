import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './ScanCriteriaDetail.module.scss'

const ScanCriteriaDetail = (props) => {
    
    const { scan, history } = props

    console.log(scan)

    let tagClassName = [styles.Tag]

    if(scan.color === 'green') {
        tagClassName.push(styles.Green)
    } else {
        tagClassName.push(styles.Red)
    }

    return (
        <div className="PhoneSection">
            <button 
                onClick={() => history.goBack() } 
                className={styles.BackButton} >BACK</button>

            <header className={styles.ScanDetailHeader}>
                <div>{scan.name}</div>
                <div className={tagClassName.join(' ')} >{scan.tag}</div>
            </header>
        </div>
    )
}

export default withRouter(ScanCriteriaDetail)
