import React from 'react'

const UserProfile = (props) => {
  return (
    <>
      <img src={props.imgsrc} />
      <h2>Display Name - {props.profileName}</h2>
    </>
  )
}

export default UserProfile
