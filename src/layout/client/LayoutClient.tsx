import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutClient = (props: Props) => {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default LayoutClient