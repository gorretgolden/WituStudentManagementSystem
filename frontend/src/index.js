import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoginPage from './components/auth/login';
import SignUpPage from './components/auth/signup';
import HomePage from './components/home/home';
import Navbar from './components/navbar';




const App=()=>{

    
  return (
      <Router>
      <div className="">
          <Navbar/>
          <Routes>
        
              <Route path="/login" element={<LoginPage/>}/>
             
              <Route path="/signup" element={<SignUpPage/>}/>
                     
              <Route path="/" element={ <HomePage/>}/>
        


          </Routes>
      </div>
      </Router>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))