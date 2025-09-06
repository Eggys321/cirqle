import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Link to="/auth/sign-in" className='text-red-400 '> sign in </Link>
    <Link to="/auth/sign-up" className='text-red-400 '> sign up </Link>
    </>
  )
}

export default Home