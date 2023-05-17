import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Factors Supervisor</title>
        <meta property="og:title" content="Forward Factors Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
