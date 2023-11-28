import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { Award } from "react-feather";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <Link to="/"><div className="logo"><Award size="1.5em"/></div></Link>            
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )
}

export default Header;