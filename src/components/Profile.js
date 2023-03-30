import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <>
    <div>Welcome {auth.user}</div>
    <button onClick = {handleLogout}>Logout</button>
    </>
  )
}
