import logo from '../images/s-logo1.png';

function Footer()
{
    return(
        <>
            <footer>
                <div class="footer-logo">
                    <img src={logo}></img>
                </div>
                <div class="footer-copyright">
                  <p>CarlosTussi © - All rights reserved.</p>         
                </div>
            </footer>            
        </>
    );
};

export default Footer;