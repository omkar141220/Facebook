import React from "react"
import Home from './page/home/Home'
import Profile from "./page/Profile/Profile"
import Login from "./page/login/Login"
import Register from "./page/register/Register"




const App = () => {
  return(
    <div>
   {/* <Home/>*/} 
   {<Profile/>}
   {<Login/>}
   <Register/>
      
    </div>
  )
}

export default App