import React from 'react'

const StateContext = React.createContext({
    githubProfileName: '',
    hasFetchedProfile: false,
    numberOfRepositories: 0,
    testData: 'YINX'
})


export default StateContext;