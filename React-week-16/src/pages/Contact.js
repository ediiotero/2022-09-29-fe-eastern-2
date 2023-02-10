import React from 'react'
import Image from 'react-bootstrap/Image'
import moviePoster from '../images/movies.jpg'

const Contact = () => {
  return (
    <div>
        <Image fluid roundedCircle src={moviePoster}/>
    </div>
  )
}

export default Contact