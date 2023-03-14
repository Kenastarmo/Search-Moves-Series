import React from 'react'
import Navbar from "../components/navbar.jsx"
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Home