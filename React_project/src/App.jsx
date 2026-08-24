import { useState } from 'react'
 
import './App.css'
import Calculater from './Component/Calculater'
import DigitalClock from './Component/DigitalClock'
import Counter from './Component/Counter'
import MovieWatchList from './Component/MovieWatchList'
import UseEffectDemo from './Component/UserEffectDemo'
import College from "./component/College"
import Home from "./component/Home"
 
import profile from "./assets/profile.jpg";
import { createContext } from 'react'
import Faculty from "./component/Faculty"


//export const UserContext = createContext();
//export const FacultyContext = createContext();

function App() {
 
 
  //    const UserInfo = {
    //   "name":"vishva",
    //   "email":"vishva@gmail.com",
    //   "class":"MCA"
    //  }  
  
   return(
      <>
      {/* <Counter/> */}
      {/* <Calculater/>  */}
     {/* <UseEffectDemo/> */}
      {/* <DigitalClock/> */}
      {/* <MovieWatchList/> */}
  {/* 
      <div>
       <UserContext.Provider value={UserInfo}>
        <Home/>
       </UserContext.Provider>
      </div> */}
  
      {/* <FacultyContext.Provider value={facultyInfo}>
      <College/>
      </FacultyContext.Provider> */}
  
      
  
  
      </>
  )
}

export default App
