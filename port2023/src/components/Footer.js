import { GitHub, Linkedin } from 'react-feather';
import src_logo_light from '../assets/logo-light.svg';

function Footer()
{
    return (
        <footer>
            <img src={src_logo_light} alt="Carlos Tussi logo" />
            <div>
            <GitHub tabIndex="0" className='footer-icon'  strokeWidth="1px" size="2em"/>
            <Linkedin tabIndex="0" className='footer-icon' strokeWidth="1px" size="2em"/>
            </div>
            
            <small>2023 - All Rights Reserved</small>
        </footer>
    )
}

export default Footer;