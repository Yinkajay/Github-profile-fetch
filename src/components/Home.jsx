import React from 'react'
import { useState } from 'react'
import styles from './Home.module.css'

const Home = () => {
    const [profileName, setProfileName] = useState(null)

    let inputStyle
    if (profileName === '') {
        inputStyle = 'invalid-input'
    } else {
        inputStyle = 'input'
    }

    return (
        <>
            <div className={styles['text-area']}>
                <h1>Hi Dev.</h1>
                <h2>Check your Github stats</h2>
            </div>
            <div className={styles['input-area']}>
                <div className={styles['input-div']}>
                    {/* <input name='profilename' type="text" placeholder="What's your profile name" /> */}
                    <input name='profilename' type="text" />
                    <label className={styles['input-label']} htmlFor="profilename">
                        Github Profile Name
                    </label>
                </div>
                <button>Get Details</button>
                <button className='btn btn-primary'>Bootstrap test</button>
            </div>
        </>
    )
}

export default Home
