import React from 'react'

import PageInfo from '../PageInfo/PageInfo'

import './About.scss'

const About = ({ marginTop }) => {
  return (
    <div style={{marginTop: marginTop}}>
      <div className='about-page-info'>
        <h1>About Our Agency</h1>
        <p>We are a new design studio based in USA. 
          We have over 20 years of combined experience, 
          and know a thing or two about designing websites and mobile apps. 
          Clever use of technology and lean processes enable us to work faster and smarter.</p>
        <img 
          src='https://i.ibb.co/vk6kYML/about-me-signature.png'
          alt='signature'  
        />
      </div>
      <PageInfo />
    </div>
  )
}

export default About
