import React, { useContext, useEffect, useState } from 'react'
import StateContext from '../store/state-context'
import RepoCard from './RepoCard'

const Repos = () => {
    const [error, setError] = useState(null)
    const ctx = useContext(StateContext)
    const [repos, setRepos] = useState([])

    async function getRepos() {
        try {
            fetch(`https://api.github.com/users/${ctx.githubName}/repos`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // let repoArray = []
                    // repoArray.push(data)
                    // console.log(repoArray);
                    let transformedRepos = data.map(repo => {
                        return {
                            Key: repo.id,
                            Name: repo.name,
                            Desc: repo.description,
                            Link: '',
                        }
                    })
                    setRepos(transformedRepos)
                    console.log(repos);
                    ctx.fetchReposHandler(data)
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
        if (ctx.hasFetchedProfile) {
            getRepos()
        }
    }, [])

    return (
        <div>
            <h1>You have {ctx.repoNumber} Repositories</h1>
            <div>
                { ctx.hasFetchedProfile && repos.map(repo => (
                    <RepoCard
                    key={repo.Key}
                    repoName={repo.Name}
                    />
                ))}

            </div>
        </div>
    )
}

export default Repos
