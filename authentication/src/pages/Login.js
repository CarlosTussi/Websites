import LoginForm from "../components/LoginForm";
import { Linkedin, Facebook, Aperture } from "react-feather";
import src_logo  from '../assets/github.png';

function Login()
{
    return(
        <div className="login-page">
            <div className="desktop-login-page">
                <div className="login-header">
                    {/* <Aperture color="#35ADA1" size="2em"/>   */}
                    <img src={src_logo} alt="Website logo"/>
                    <div className="login-header-mobile">
                        <h1>Login Now</h1>
                        <h2>Please enter your details</h2>
                    </div> 
                </div>
                <div className="desktop-leftside-container">
                    <div className="login-header-desktop">
                        <h1>Login Now</h1>
                        <h2>Please enter your details</h2>
                    </div> 
                    <LoginForm />
                </div>                   
                
            </div>
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