import React from 'react'
import "./style.css";
import { Helmet } from 'react-helmet';
const Login = () => {
  
return (    
  <>
  <Helmet>
    <title>Login</title>
  </Helmet>
    <body>
        <div className="container">
            <div className="container-wrapper">
    
                <h3 className="login-text"><i className="bi bi-person-circle ac-logo"></i>Login</h3>
            
                <form method="post">
                    <div className="item"><input className="input" type="email" placeholder="Email" required/></div> 
                    <div className="item"><input className="input" type="password" placeholder="Password" required/> </div>
                    <span className="remember"> <a href="#">Forgot Password?</a> </span>
    
                    <div className="item submit"><button type="submit">Submit</button></div>
                </form>
                <h2><span>OR</span></h2>
             
                <div className="social-media">
    
                    <a href="#"><div className="icons8-google social-mediaImg"></div></a> 
                    <a href="#"><div className="icons8-facebook-circled social-mediaImg"></div></a> 
                    <a href="#"><div className="icons8-twitter social-mediaImg"></div></a> 
      
                </div>
                <span className="ac">Don't have an Account? <a href="/Sign Up">Sign Up</a></span>
            </div>
    
        </div>
    </body>
    </>
  )
}

export default Login
