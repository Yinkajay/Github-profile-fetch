import React from 'react'
import { useState } from 'react'
import styles from './Home.module.css'

const Home = () => {
    const[pprofileName, setProfileName] = useState(null)


    return (
        <>
            <div>
                <h1>Hi Dev.</h1>
                <h2>Check your Github stats</h2>
            </div>
            <div className={styles['input-area']}>
                <input type="text" placeholder="What's your profile name" />
                <button>Get Details</button>
            </div>
        </>
    )
}

export default Home
