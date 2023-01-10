import React from 'react'
import { FaGitAlt } from 'react-icons/fa'

const RepoCard = (props) => {
    return (
        <div className='card' style={{ width: '18rem' }}>
            <FaGitAlt />
            <p>Name - {props.repoName}</p>
        </div>
    )
}

export default RepoCard
{/* <div className='card' style={{ width: '18rem' }}>
<p>Hi</p>
<a className='btn btn-danger'>Go</a>
</div> */}