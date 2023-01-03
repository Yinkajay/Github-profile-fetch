import React from 'react'

const StateContext = React.createContext({
    githubProfileName: '',
    hasFetchedProfile: false
})


export default StateContext;