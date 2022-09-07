import React, { useState } from 'react'
import Header from './Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Signimg from './Signimg'
const Signup = () => {

  const [inputval,setInputval]=useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:"" 
  }

  )
  const [data,setData] = useState([]);
  console.log(inputval)


  const getdata=(e) =>{
    const {value,name}=e.target;

    setInputval(() => {
      return {
          ...inputval,
          [name]: value
      }
  })
    
  }
  const addData=(e)=>{
    e.preventDefault();
    const { name, email, password, confirmpassword } = inputval;
     
    if(name===""){
      alert("name field is required")
    }else if(email===""){
      alert("email field is req")
    }else if(!email.includes("@")){
      alert("please enter valid email address")
    }else if(password===""){
      alert("please enter the password")
    }else if(password.length<5){
      alert("password length must be greater than 5")
    }else if (confirmpassword===""){
      alert("please enter the field confirm password")
    }
    
    else if (confirmpassword!==password){
      alert("Confirm password & password must be equal")
    }
    
    else{
      console.log("data added sucessfully")
      localStorage.setItem("user",JSON.stringify([...data,inputval]));
    }


  }

    

    return (
        <>
        <Header/>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" onChange={getdata} name='name'  placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" onChange={getdata} name='email'  placeholder="Enter email" />
                            </Form.Group>

                            

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" onChange={getdata} name='password'  placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                              <Form.Control type="password" onChange={getdata} name='confirmpassword'  placeholder="Confirm Password" />
                             </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "#92B4EC" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>Sign in</span> </p>
                    </div>
                    <Signimg></Signimg>
                </section>
                
            </div>
        </>
    )
}

export default Signup