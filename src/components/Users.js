import React from 'react'
import { Outlet , Link , useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams , setsearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') == 'active'
  return (
    <div>
        {/* <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2> */}
        <Link to = '1'>User 1</Link>
        <Link to = '2'>User 2</Link>
        <Link to = '3'>User 3</Link>
        <Outlet/>
        <div>
            <button onClick = {() => setsearchParams({filter : "active"})}>Active Users</button>
            <button onClick = {() => setsearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>
        }
    </div>
  )
}
