import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to={'/about'} >About</Link>
        <div>
            <a href="/about">A tag About</a>
        </div>
        <div>
            <a href="https://www.google.com/" target={'blank'}>Google</a>
        </div>
        <div>
            <Link to={'https://www.google.com/'} >LINK Google</Link>
        </div>
    </div>
  )
}

export default Home