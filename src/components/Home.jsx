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

    const changeInputHandler = (event) => {
        // console.log(event)
        setProfileName(event.target.value)
        // console.log(profileName)
    }

    const getUserInfo = () => {
        event.preventDefault()
        console.log(profileName);
        fetch(`https://api.github.com/users/${profileName}`)
        .then (response => response.json())
        .then (data => console.log(data))
    }




    return (
        <>
            <div className={styles['text-area']}>
                <h1>Hi Dev.</h1>
                <h2>Check your Github stats</h2>
            </div>

            <div className={styles['input-area']}>
                <form onSubmit={getUserInfo}>
                    <div className={styles['input-div']}>
                        {/* <input name='profilename' type="text" placeholder="What's your profile name" /> */}
                        <input onChange={changeInputHandler} name='profilename' placeholder="What's your profile name" type="text" />
                        <label className={styles['input-label']} htmlFor="profilename">
                            Github Profile Name
                        </label>
                    </div>
                    <button>Get Details</button>
                </form>
            </div>
        </>
    )
}

export default Home
