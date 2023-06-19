import { wrapHandler } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { GitHub, Linkedin, ArrowDown } from 'react-feather';

function Nav(){

    const homeRef = useRef();
    const workRef = useRef();
    const aboutRef = useRef();


    const changeMenuColor = () =>{

        const currentScroll = window.scrollY;        
        const homeScroll = 0;
        const workScroll = currentScroll + document.getElementById("work").getBoundingClientRect().top;
        const aboutScroll = currentScroll + document.getElementById("about").getBoundingClientRect().top;
        
        if(currentScroll < workScroll-1)
            {
                //Home Page
                console.log("Home Page");
                homeRef.current.style.color = 'green';
                workRef.current.style.color = 'white';
                aboutRef.current.style.color = 'white';

            }
            else if(currentScroll >= workScroll-1 &&
                    currentScroll < aboutScroll -1)
                    {
                        //Work Page
                        console.log("Work Page");
                        workRef.current.style.color = 'green';
                        aboutRef.current.style.color = 'white';
                        homeRef.current.style.color = 'white';
                    }    
                    else if(currentScroll >= aboutScroll -1)
                    {
                        //About Page
                        console.log("About Page");
                        aboutRef.current.style.color = 'green';
                        homeRef.current.style.color = 'white';
                        workRef.current.style.color = 'white';
                    }
    }

    useEffect(() =>{
        
        const handleScroll = () => {
            changeMenuColor();
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


        
    })




const scroll = (anchor) => {
    const target = document.getElementById(anchor);
    if(target)
    {        
        if(anchor !== "home"){
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
         }
        else
        {                   
            window.scrollTo({top: 0, 
                             left: 0,
                             behavior: "smooth"
                            });
        }
    }
}

    return (
        <>
        <nav >
            <ul className="large-screen-nav">     
                <li>CT</li>           
                <li ref={homeRef} onClick={() => scroll("home")}>Home</li>
                <li ref={workRef} onClick={() => scroll("work")}>Work</li>
                <li ref={aboutRef} onClick={()=> scroll("about")}>About</li> 
                <li><GitHub color='green' size="4.5vh"/></li>
                <li><Linkedin color='green' size="4.5vh"/></li>        
              
            </ul>
        </nav>
        </>
    )
}

export default Nav;