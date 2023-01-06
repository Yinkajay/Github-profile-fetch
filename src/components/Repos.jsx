import React, { useContext, useEffect, useState } from 'react'
import StateContext from '../store/state-context'

const Repos = () => {
    const [error, setError] = useState(null)
    const ctx = useContext(StateContext)

    async function getRepos() {
        try {
            const response = await fetch(`https://api.github.com/users/${ctx.githubName}/repos`)
            const data = response.json()
            if (!response.ok) {
                throw new Error('Error occurred')
            }
            let repoArray
            repoArray.push(data)
            console.log(repoArray);

            // const transformedRepos = da
        } catch (error) {
            setError(error.message)
        }
    }

    if (ctx.hasFetchedProfile) {

    }
    useEffect(() => {
        if (ctx.hasFetchedProfile) {
            getRepos()
        }
    }, [])

    return (
        <div>
            <h1>You have ... Repositories</h1>
            <div>
                <div className='card' style={{ width: '18rem' }}>
                    <p>Hi</p>
                    <a className='btn btn-danger'>Go</a>
                </div>
            </div>
        </div>
    )
}

export default Repos
