import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/partials/dashboard/sidenav";


const App=()=>{
  const [users, setUsers] = useState([]);
  useEffect(
    ()=>{
      fetch('/users/').then(async response => {
        try {
         const data = await response.json()
         console.log(data)
       } catch(error) {
         console.log('Error happened here!')
        
       }
      })
    }, []
);

  return (
    <div className="container">
  
    </div>
  )
}

export default App