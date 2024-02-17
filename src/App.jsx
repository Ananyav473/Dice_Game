import React, { useState } from 'react'
import Firstpg from './components/Firstpg'
import Secondpg from './components/Secondpg';


const App = () => {
  const [isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted(!isGameStarted);
  };

  return (
    <div>
     {
      isGameStarted?<Secondpg/>:<Firstpg anna={toggleGamePlay}/>
     }
    </div>
  )
}

export default App

