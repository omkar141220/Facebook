import React from 'react'
import Topbar from '../../Components/topbar/Topbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'
import './home.css'

const Home= () => {
  return (
    <div>
       <Topbar/>
       <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
       </div>
    </div>
  )
}

export default Home