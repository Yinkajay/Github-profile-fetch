import React from 'react'
import { useState } from 'react'
import styles from './Home.module.css'
import UserProfile from './UserProfile'

const Home = () => {
    const [profileName, setProfileName] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [ghProfileDetails, setGhProfileDetails] = useState([])
    const [hasFetchedData, setHasFetchedData] = useState(false)

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
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const repoDetails = []
                repoDetails.push(data)
                let transformedDetails = repoDetails.map(repo => {
                    return {
                        profileDisplayName: repo.login,
                        imgsrc: repo.avatar_url,
                        devName: repo.name,
                        devCompany: repo.company,
                        devFollowers: repo.followers,
                        devFollowing: repo.following,
                    }
                })
                setGhProfileDetails(transformedDetails)
                setIsLoading(false)
                setHasFetchedData(true)
            })
    }




    return (
        <>
            <div className={styles['text-area']}>
                <h1>Hi Dev.</h1>
                <h2>Check your Github stats</h2>
            </div>


            {!hasFetchedData &&
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
            }

            {isLoading && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}

            {/* <div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div> */}

            {hasFetchedData && ghProfileDetails.map(profile => (
                <UserProfile
                    key={Math.random}
                    imgsrc={profile.imgsrc}
                    profileName={profile.profileDisplayName}
                    devName={profile.devName}
                    followers={profile.followers}
                    following={profile.following}
                />
            ))
            }


        </>
    )
}

export default Home
