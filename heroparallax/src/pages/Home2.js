import { useEffect, useRef } from 'react';
import './Home2.css';

import { Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax } from 'react-scroll-parallax';

function Home2()
{


    return(
        <div className='home2-container'>  
        <div>             
            <Parallax  
               shouldAlwaysCompleteAnimation={true}   
                translateX={[0, -100]}            
                className='box12'
               >
                <p>SCROLL</p>
                </Parallax>   
                <Parallax  
                shouldAlwaysCompleteAnimation={true}            
                translateX={[0, 100]}      
                className='box11'
               >
                <p>DOWN</p>
               </Parallax>
        </div>   
        
            
        <div className="page-hero page">
            <h1>CARLOS TUSSI</h1>
        </div>
        <div className="page1 halfPage"></div>
        <div className="page1 halfPage"></div>
        <div className='page1 page'>
            <Parallax
                shouldAlwaysCompleteAnimation={true}    
                translateX={["0vw", "-40vw"]}
                scale={[1,0.5]}
                // endScroll={'5px'}
                className='sticky-test' 
            >
                <h2>WORK</h2>
            </Parallax>                  
                <div className="home2-section">

                </div>     
                <div className="home2-section2">

            </div>           
            <div className="home2-section3">

            </div>                
        </div>
        <div className='page99'>

        </div>
        </div>
    )
}

export default  Home2;