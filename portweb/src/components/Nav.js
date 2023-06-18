import HamburgerMenu from "./HamburgerMenu";

function Nav()
{
    return(
        <nav>
           <HamburgerMenu>
            <ul>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </HamburgerMenu>
        </nav>
    )

}

export default Nav;