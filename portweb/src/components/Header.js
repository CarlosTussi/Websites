import HamburgerMenu from "./HamburgerMenu";

function Header()
{
    return(
        <header>
            <p>CT</p>
            <HamburgerMenu>
                <ul style={{fontSize: "1.5rem"}}>
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Work</li>
                    <li>About</li>
                </ul>
            </HamburgerMenu>
        </header>
    )
}

export default Header;