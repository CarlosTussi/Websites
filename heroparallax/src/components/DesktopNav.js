import { useEffect } from "react";

function DesktopNav(props)
{
    return(
        <nav className="desktop-nav">
            <ul> 
                <li onClick={()=> props.onClick(2)}>Work</li>
                <li onClick={()=> props.onClick(3)}>About</li>
                <li onClick={()=> props.onClick(4)}>Contact</li>                
            </ul>
        </nav>
    )
}

export default DesktopNav;