import React, { Component } from 'react'

import Card from '../components/Card'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import moviePosters from '../images/movies.jpg'

const data = [
    {
        id: 1,
        title: "The Batman",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 2,
        title: "Top Gun",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 3,
        title: "Lightyear",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 4,
        title: "Grease",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className='container'>
            <img src={moviePosters} alt="movie posters" style={{minWidth: '100%', height: '20rem'}} />
            <p className='post-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem iure obcaecati assumenda aut, atque quod excepturi magni nisi explicabo.
            </p>
            {data.map(movie => <Card key={movie.id} title={movie.title} text={movie.post} />)}
        </main>
        <Footer copy="React Demo"/>
      </div>
    )
  }
}
