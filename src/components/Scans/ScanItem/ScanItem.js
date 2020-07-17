import React from 'react'
import { withRouter, Link, useRouteMatch } from 'react-router-dom'
import styles from './ScanItem.module.scss'

const ScanItem = (props) => {

    let { url } = useRouteMatch()
    
    let tagClassName = [styles.Tag]

    if(props.color === 'green') {
        tagClassName.push(styles.Green)
    } else {
        tagClassName.push(styles.Red)
    }

    return (
        <li className={styles.SingleScan}>
            <Link to={`${url}/${props.id}`}>
                <div>{props.name}</div>
                <div className={tagClassName.join(' ')} >{props.tag}</div>
            </Link>
        </li>
    )
}

export default withRouter(ScanItem)
