import React, { useState } from 'react'

const StateContext = React.createContext({
    githubName: '',
    hasFetchedProfile: false,
    numberOfRepositories: 0,
    profileInputHandler: () => { },
    fetchProfileHandler: () => { },
    testData: 'YINX',
    repositories: [],
    fetchReposHandler: () => {},
    repoNumber: 0
});

export const StateContextProvider = (props) => {
    const [githubProfileName, setGithubProfileName] = useState('')
    const [hasFetchedProfile, setHasFetchedProfile] = useState(false)
    const [reposArray, setReposArray] = useState(null)
    const [numberOfRepositories, setNumberOfRepositories] = useState(0)

    const profileInputHandler = (event) => {
        setGithubProfileName(event.target.value)
        console.log(githubProfileName);
    }

    const fetchProfileHandler = () => {
        setHasFetchedProfile(true)
        console.log(hasFetchedProfile);
    }

    const fetchReposHandler = (array) => {
        setReposArray(array)
        console.log(array);
        setNumberOfRepositories(array.length)
    }


    return (
        <StateContext.Provider value={{
            githubName: githubProfileName,
            hasFetchedProfile: hasFetchedProfile,
            numberOfRepositories: 0,
            profileInputHandler,
            fetchProfileHandler,
            testData: 'YINX',
            repositories: reposArray,
            fetchReposHandler,
            repoNumber: numberOfRepositories
        }}>
            {props.children}
        </StateContext.Provider>
    )
}






export default StateContext;