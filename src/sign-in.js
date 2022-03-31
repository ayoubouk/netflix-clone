import React from 'react'
import './App.css'
import {} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
function Signin(){
    return(
        
             <div className="bg-netflex" style={{height:"200vh",position:'relative'}} >
            <div className='bg-netflex-dark  h-100 pt-0'>
            <div className='  container w-70 container-netflex mx-auto '>
            <span className="LOGO pt-4">NETFLIX</span>
            </div>
            <div className='signin bg-netflex-body' style={{top:'35%'}}>
                <h1 className="text-white mb-3">Sign In</h1>
                <input type="email" placeholder='Email or phone number' className='mb-3 form-control text-white' />
                <input type="password" placeholder='Password' className='mb-4 form-control text-white'/>
               
                <a href='../home' className='btn text-white mb-1 signininput-a w-100' >Sign in</a><br></br>
                <input type='checkbox' className='mr-2'  />
                <span style={{color:'gray'}} >Remembre me</span>
                
                <div className="mt-3">       
                <a href="#">
                <i className="fa fa-facebook-f fa-1x mr-2" style={{color:'red' }} ></i>
                    </a>  
                   
                    <span style={{color:'gray'}} className="mb-5" >Login with facebook</span><br></br>
                    <span style={{color:'gray',lineHeight:'2'}} className="mr-2">New to Netflix ?</span>
                    <a href='#' className='text-white'>Sign up now</a>
                    <p style={{color:'gray',fontSize:'14px'}}>this is page is protected by Google reCAPATCHA rnsure you're not a bot
                        <a href='#' className='ml-2'>Learn more.</a>
                    </p>
                </div>
            </div>

            </div>
        </div>
        
    )
}

export default Signin