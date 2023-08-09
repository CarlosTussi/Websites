import { useDesktopNavContext } from "../providers/DesktopNavProvider";
import { ABOUT_PAGE_ID, CONTACT_PAGE_ID, WORK_PAGE_ID } from "../utils/Global";

function Nav(props)
{   

    const handleClick = (anchor) =>{
        props.handleClick(anchor);

    }

    const { currentSection } = useDesktopNavContext();

    return(
    <nav>
        <ul >
            <li className={currentSection === WORK_PAGE_ID ? "highlighted" : ""} onClick={()=>handleClick(WORK_PAGE_ID)}>WORK</li>
            <li className={currentSection === ABOUT_PAGE_ID ? "highlighted" : ""} onClick={()=>handleClick(ABOUT_PAGE_ID)}>ABOUT</li>
            <li className={currentSection === CONTACT_PAGE_ID ? "highlighted" : ""} onClick={()=>handleClick(CONTACT_PAGE_ID)}>CONTACT</li>
        </ul>
    </nav>
    )
}
export default Nav;