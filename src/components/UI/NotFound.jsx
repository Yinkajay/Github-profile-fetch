import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles['nf-card']}>
            <div className={styles['nf-text-area']}>
                <h1 className={styles['nf-heading']}>Sorry!</h1>
                <h2 className={styles['nf-heading']}>Profile not found</h2>
            </div>
        </div>
    )
}

export default NotFound
