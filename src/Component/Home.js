import React from 'react'
import { Helmet } from 'react-helmet';
const Home = () => {
    let headingStyle ={
        "margin-top":"20%",
    }
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <center> <h1 style={headingStyle}>This is a Home page </h1></center>
  </>
  )
}

export default Home
