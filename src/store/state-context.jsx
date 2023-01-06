import React, { useState } from 'react'

const StateContext = React.createContext({
    githubName: '',
    hasFetchedProfile: false,
    numberOfRepositories: 0,
    profileInputHandler: () => { },
    testData: 'YINX'
});

export const StateContextProvider = (props) => {
    const [githubProfileName, setGithubProfileName] = useState('')

    const profileInputHandler = (event) => {
        setGithubProfileName(event.target.value)
        console.log(githubProfileName);
    }


    return (
        <StateContext.Provider value={{
            githubName: githubProfileName,
            hasFetchedProfile: false,
            numberOfRepositories: 0,
            profileInputHandler,
            testData: 'YINX'
        }}>
            {props.children}
        </StateContext.Provider>
    )
}






export default StateContext;