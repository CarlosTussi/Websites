import { Link } from "react-router-dom";

function HeaderDesktop()
{
    return(
        <div className="desktop-menu">                
             <ul>
                <Link to="/"><li>COCKTAILS</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/contact"><li>CONTACT</li></Link>
            </ul>         
        </div>
    )
}

export default HeaderDesktop;