import React from 'react'
import Numbers from '../Components/Numbers'
import PartenersTechnoriat from '../Components/PartenersTechnoriat'
import JournalT from '../Components/JournalT'
import HomeOne from '../Components/HomeOne'
import Process from '../Components/Process'
import About from '../Components/About'


const Home = () => {
  return (
    <div>
        <HomeOne/>
        <About/>
        <Process/>
        <Numbers/>
    <JournalT/>
    <PartenersTechnoriat/>
    
    </div>
  )
}

export default Home