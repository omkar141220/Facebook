import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications }from '@mui/icons-material'
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo"><img src='src\assets\Person\7.png' alt=''></img></span></div>
        <div className="topbarCenter">
          <div className="searchbar"><Search className='searchIcon'/>
        
          <input type="text" className="searchInput"  placeholder='Search for your friends, post or video'/>
          </div>
        </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLinks">HomePage</span>
              <span className="topbarLinks">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">3</span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">3</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">3</span>
              </div>
            </div>
            <img src="src/assets/Person/3.webp" alt='proflie'
            className='topbarImg'/>
          </div>
        </div>
  )
}

export default Topbar