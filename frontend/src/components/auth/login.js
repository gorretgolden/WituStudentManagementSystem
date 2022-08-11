import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { login } from '../../components/auth/auth'
import {useNavigate} from 'react-router-dom';


const LoginPage=()=>{
    
    const {register,handleSubmit,reset,formState:{errors}}=useForm()

    const navigate=useNavigate()
    


    const loginUser=(data)=>{
       console.log(data)

       const requestOptions={
           method:"POST",
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       }
        
       fetch('/users/login',requestOptions)
       .then(res=>res.json())
       .then(data=>{
           console.log(data.access_token)
           
           if (data){
            login(data.access_token)
            alert('You logged into your account')

            navigate('/')
           }
           else{
               alert('Invalid email or password')
           }


       })



       reset()
    }

    return(
        <div className="container">
         
         <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-4 mt-5">
            <div className="form">
            <h3>Login </h3>
            <form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Your email"
                       
                    />
                </Form.Group>
                {errors.email && <p style={{color:'red'}}><small>email is required</small></p>}
             
                <br></br>
               
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Your password"
                        {...register('password',{required:true,minLength:8})}
                    />
                </Form.Group>
                {errors.password && <p style={{color:'red'}}><small>Password is required</small></p>}
                {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                    <small>Password should be more than 8 characters</small>
                    </p>}
                <br></br>
                <Form.Group>
                    <Button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>Login</Button>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <small>Do not have an account? <Link to='/signup'>Create One</Link></small>
                </Form.Group>
                
            </form>
        </div>
            </div>
            <div className="col-lg-4">

</div>
         </div>
    </div>
    )
}

export default LoginPage