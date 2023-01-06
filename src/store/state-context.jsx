import React, { useState } from 'react'

const StateContext = React.createContext({
    githubName: '',
    hasFetchedProfile: false,
    numberOfRepositories: 0,
    profileInputHandler: () => { },
    fetchProfileHandler: () => { },
    testData: 'YINX'
});

export const StateContextProvider = (props) => {
    const [githubProfileName, setGithubProfileName] = useState('')
    const [hasFetchedProfile, setHasFetchedProfile] = useState(false)

    const profileInputHandler = (event) => {
        setGithubProfileName(event.target.value)
        console.log(githubProfileName);
    }

    const fetchProfileHandler = () => {
        setHasFetchedProfile(true)
        console.log(hasFetchedProfile);
    }


    return (
        <StateContext.Provider value={{
            githubName: githubProfileName,
            hasFetchedProfile: hasFetchedProfile,
            numberOfRepositories: 0,
            profileInputHandler,
            fetchProfileHandler,
            testData: 'YINX'
        }}>
            {props.children}
        </StateContext.Provider>
    )
}






export default StateContext;