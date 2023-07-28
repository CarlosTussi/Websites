import Branding from "./Branding";

function Header(props)
{

    return(
        <div className="header-nav">
            <Branding />
            <ul>
                <li onClick={()=> props.bagsRef.current.scrollIntoView({behavior:"smooth"})}>BAGS</li>
                <li onClick={()=> props.shoesRef.current.scrollIntoView({behavior:"smooth"})}>SHOES</li>
                <li>ABOUT</li>
                <li>CONTACT</li>            
        </ul>
        </div>
       
    )
}

export default Header;