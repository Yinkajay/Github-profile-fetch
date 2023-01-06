import React, { useContext } from 'react'
import { useState } from 'react'
import StateContext from '../store/state-context'
import styles from './Home.module.css'
import NotFound from './UI/NotFound'
import UserProfile from './UserProfile'

const Home = () => {
    const [profileName, setProfileName] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [ghProfileDetails, setGhProfileDetails] = useState([])
    // const [hasFetchedData, setHasFetchedData] = useState(false)
    const [error, setError] = useState(null)

    const ctx = useContext(StateContext)

    let inputStyle
    if (profileName === '') {
        inputStyle = 'invalid-input'
    } else {
        inputStyle = 'input'
    }

    // const changeInputHandler = (event) => {
    //     setProfileName(event.target.value)
    // }

    const getUserInfo = () => {
        event.preventDefault()
        console.log(ctx.githubName);
        if (ctx.githubName.trim() === '') {
            return
        }
        try {
            fetch(`https://api.github.com/users/${ctx.githubName}`)
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
                            followers: repo.followers,
                            following: repo.following,
                            bio: repo.bio
                        }
                    })
                    setGhProfileDetails(transformedDetails)
                    setIsLoading(false)
                    ctx.fetchProfileHandler()
                    console.log(transformedDetails);
                    console.log(ctx.hasFetchedProfile);
                })
        } catch (error) {
            setError(error.message)
        }
    }





    return (
        <>
            <div className={styles['text-area']}>
                <h1>Hi Dev.</h1>
                {!ctx.hasFetchedData && <h3>Check your Github stats.</h3>}
                <h1>Your name is {ctx.githubName}</h1>
            </div>

            {/* <NotFound /> */}
            {!ctx.hasFetchedProfile &&
                <div className={styles['input-area']}>
                    <form onSubmit={getUserInfo}>
                        <div className={styles['input-div']}>
                            {/* <input name='profilename' type="text" placeholder="What's your profile name" /> */}
                            <input onChange={ctx.profileInputHandler} name='profilename' placeholder="What's your profile name" type="text" />
                            <label className={styles['input-label']} htmlFor="profilename">
                                Github Profile Name
                            </label>
                        </div>
                        <button>Get Details</button>
                    </form>
                </div>
            }


            {isLoading &&
                <div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
            }

            {ctx.hasFetchedProfile && ghProfileDetails.map(profile => (
                <UserProfile
                    key={Math.random}
                    imgsrc={profile.imgsrc}
                    profileName={profile.profileDisplayName}
                    devName={profile.devName}
                    followers={profile.followers}
                    following={profile.following}
                    bio={profile.bio}
                />
            ))
            }


        </>
    )
}

export default Home
