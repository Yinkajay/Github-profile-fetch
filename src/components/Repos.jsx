import React, { useContext, useEffect, useState } from 'react'
import StateContext from '../store/state-context'

const Repos = () => {
    const [error, setError] = useState(null)
    const ctx = useContext(StateContext)

    async function getRepos() {
        try {
            fetch(`https://api.github.com/users/${ctx.githubName}/repos`)
                .then(response => response.json())
                .then(data => {
                    let repoArray = []
                    repoArray.push(data)
                    console.log(repoArray);
                    console.log('hi');
                    console.log(`${ctx.githubName}`);
                }
                )
        } catch (error) {
            console.log('hey');
            setError(error.message)
            console.log(error.message);
            console.log(`${ctx.githubName}`);
        }
    }


    useEffect(() => {
        getRepos()
        if (ctx.hasFetchedProfile) {
        }
    }, [])

    return (
        <div>
            <button className='btn btn-primary' onClick={getRepos}> Get Repos </button>
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
