import SideMenu from "./SideMenu";
import MobileMenuProvider from "../contexts/MobileMenuProvider";
import MobileMenu from "./MobileMenu";

function Nav()
{
   

    return(
        <>
        <MobileMenuProvider>
            <MobileMenu />
            <SideMenu />    
        </MobileMenuProvider>         
        </>
    );

}

export default Nav;