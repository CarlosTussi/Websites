import Ellipses from "../components/Ellipses";
import { Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax } from 'react-scroll-parallax';
import { ArrowDown } from 'react-feather';
import src_mouse_icon from '../assets/mouse.svg'

function Home(){

    const handleClick = () =>{
        const workSection = document.getElementById("my-work");
        if(workSection)
            workSection.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="home">
             <Parallax
                className="main-title"
                shouldAlwaysCompleteAnimation={true}  
                scale={[1,0.5]}
                opacity={[1, 0]}
            > 
                <div >
                    <h1>Carlos Tussi</h1> 
                    <p>Web Designer</p>           
                </div>
            </Parallax>
                        
            {/* <button 
                    onClick={handleClick}>My Work
            </button>             */}
            <div className='arrow-icon'>
                <Parallax
                    shouldAlwaysCompleteAnimation={true}  
                    scale={[1,2]}
                    opacity={[1, 0.4]}
                >
                    {/* <ArrowDown  strokeWidth="1.5px" size="5em" color="#FF2D55" onClick={handleClick}/> */}
                    <img src={src_mouse_icon} alt="Icon of a mouse with and arrow bellow"></img>
                </Parallax>
            </div>
        </div>
    )
}

export default Home;