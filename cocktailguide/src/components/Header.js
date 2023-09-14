import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { Award } from "react-feather";

function Header(){
    return(
        <header>
            <Award className="logo" size="1.5em"/>
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )
}

export default Header;