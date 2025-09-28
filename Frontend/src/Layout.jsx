import React from 'react'
import {Navbar, Footer} from './components/index.js'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
