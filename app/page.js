"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GroupCompanies from './components/GroupCompanies'
import Industries from './components/Industries'
import Capabilities from './components/Capabilities'
import GlobalPresence from './components/GlobalPresence'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <GroupCompanies/>
       <Industries/>
       <Capabilities/>
       <GlobalPresence/>
       <Testimonials/>
       <Blogs/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home
