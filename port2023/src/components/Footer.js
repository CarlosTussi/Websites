import { GitHub, Linkedin } from 'react-feather';
import src_logo_light from '../assets/logo-light.svg';

function Footer()
{
    return (
        <footer>
            <img src={src_logo_light} alt="Carlos Tussi logo" />
            <div>
            <a href="https://github.com/CarlosTussi" target="_blank" rel="noreferrer"><GitHub tabIndex="0" className='footer-icon'  strokeWidth="1px" size="2em"/></a>
            <a href="https://www.linkedin.com/in/cetleite/" target="_blank" rel="noreferrer"><Linkedin tabIndex="0" className='footer-icon' strokeWidth="1px" size="2em"/></a>
            </div>
            
            <small>2023 - All Rights Reserved</small>
        </footer>
    )
}

export default Footer;