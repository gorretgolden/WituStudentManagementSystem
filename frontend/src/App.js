import { useState, useEffect, useMemo } from "react";


const App=()=>{
  const [users, setUsers] = useState([]);
  useEffect(
    ()=>{
      fetch('/users/').then(async response => {
        try {
         const data = await response.json()
         console.log('response data?', data)
       } catch(error) {
         console.log('Error happened here!')
        
       }
      })
    }, []
);

  return (
    <div>
      <h1>Front</h1>
    </div>
  )
}

export default App