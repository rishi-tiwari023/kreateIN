import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='pt-24'>
      <h1>Layout</h1>
      <Outlet />
    </div>
  )
}

export default Layout
