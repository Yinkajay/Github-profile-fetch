import React from 'react'
import styles from './UserProfile.module.css'


const UserProfile = (props) => {
  return (
    <div className={styles['profile-card']}>
      <h3>{props.profileName} Profile</h3>
      <div className={styles['image-area']} >
        <img src={props.imgsrc} />
      </div>
      <div>
        <h2>Name - {props.profileName}</h2>
      </div>
    </div>
  )
}

export default UserProfile
