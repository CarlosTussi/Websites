function DesktopMenu()
{
    const scroll = (anchor) =>{
        const target = document.getElementById(anchor);
        if(target)
        {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });    
        }   
    }

    return(
        <div className="desktop-nav">
            <ul>
                <li tabIndex="0" onClick={()=> scroll("my-work")}>Work</li>
                <li tabIndex="0" onClick={()=> scroll("about")}>About</li>
                <li tabIndex="0" onClick={()=> scroll("contact")}>Contact</li>
            </ul>
        </div>
    )
}

export default DesktopMenu;