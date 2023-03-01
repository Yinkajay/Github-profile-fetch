import React, { useContext } from 'react'
import { FaGitAlt } from 'react-icons/fa'
import StateContext from '../store/state-context'
import styles from './RepoCard.module.css'

const RepoCard = (props) => {

    const ctx  = useContext(StateContext)
    return (
        <div className={styles.card}>
            <a href={`https://github.com/${ctx.githubName}/${props.repoName}`}>
                <FaGitAlt />
                <h4>Name -<span className={styles.repoName}>{props.repoName}</span> </h4>
            </a>
        </div>
    )
}

export default RepoCard
{/* <div className='card' style={{ width: '18rem' }}>
<p>Hi</p>
<a className='btn btn-danger'>Go</a>
</div> */}