import { GitHub, Linkedin, ArrowDown } from 'react-feather';

function Nav(){
    return (
        <>
        <nav >
            <ul className="large-screen-nav">
                <li><GitHub size="4.5vh"/></li>
                <li><Linkedin size="4.5vh"/></li>
                <li>Work</li>
                <li>About</li>
                <li><ArrowDown size="4.5vh"/></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;