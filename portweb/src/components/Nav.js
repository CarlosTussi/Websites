import HamburgerMenu from "./HamburgerMenu";

function Nav()
{
    return(
        <nav>
            <HamburgerMenu>
                <ul style={{fontSize: "1.5rem"}}>
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Work</li>
                    <li>About</li>
                </ul>
            </HamburgerMenu>
        </nav>
    )

}

export default Nav;