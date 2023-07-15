import LoginForm from "../components/LoginForm";
import { Linkedin, Facebook, Aperture } from "react-feather";

function Login()
{
    return(
        <div>
            <div className="login-header">
            <Aperture color="#35ADA1" size="2em"/>  
                <div >
                    <h1>Login Now</h1>
                    <h2>Please enter your details</h2>
                </div> 
            </div>                   
            <LoginForm />
            <div className="login-footer-container">
                <div className="footer-content">
                    <div className="footer-social-icon">
                        <Linkedin color="#35ADA1" size="2em"/>
                        <Facebook color="#35ADA1" size="2em"/>
                    </div>
                    <div className="footer-copyright">
                        <p>All Rights Reserved</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;