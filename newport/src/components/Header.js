import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Header()
{
    return(
        <header>
            <MobileNav />
            <DesktopNav />
        </header>
    )
}

export default Header;