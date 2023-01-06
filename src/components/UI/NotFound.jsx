import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles['nf-card']}>
            <div className={styles['nf-text-area']}>
                <h1>Sorry!</h1>
                <h2>Profile not found</h2>
            </div>
        </div>
    )
}

export default NotFound
