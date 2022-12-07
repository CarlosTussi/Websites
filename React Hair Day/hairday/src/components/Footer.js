import logo from '../images/s-logo1.png';

function Footer()
{
    return(
        <>
            <footer>
                <div className="footer-logo">
                    <img src={logo}></img>
                </div>
                <div className="footer-copyright">
                  <p>CarlosTussi © - All rights reserved.</p>         
                </div>
            </footer>            
        </>
    );
};

export default Footer;