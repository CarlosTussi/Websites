import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import src_icon from '../assets/mouse.png';
import src_arrow from '../assets/arrow.png'

function Home(){
    const [progress, setProgress] = useState(0);

    return(
        <div className='home-container'>
            <div className='home-title'>
                <Parallax
                        shouldAlwaysCompleteAnimation={true}  
                        translateX={[0, -300]}
                        rotate={[0, -360]}
                        opacity={[1,0]} 
                    >
                        <h1>
                            CARLOS                  
                        </h1>
                </Parallax>
                
                <Parallax
                    shouldAlwaysCompleteAnimation={true}  
                    translateX={[0, 400]}
                    rotate={[0, 360]}
                    opacity={[1,0]} 
                >
                    <h1>TUSSI</h1>
                </Parallax>
                <Parallax
                    shouldAlwaysCompleteAnimation={true}  
                    translateY={[0, -600]}
                    scale={[1,4]}
                    opacity={[1, 0]} 
                >
                    <h2>Front-End</h2>
                </Parallax>                
            </div>
            <div className='mouse-icon'>
                
                <h3>WORK</h3>
                <Parallax
                    shouldAlwaysCompleteAnimation={true}   
                    onProgressChange={(value)=> setProgress(value)}                                     
                    opacity={[1,1-(progress*15)]}                    
                >
                    <img className='mouse-icon' src={src_icon} alt=""/>
                    <img className='mouse-icon icon-arrow' src={src_arrow} alt=""/>
                </Parallax>
            </div>
        </div>
    )
}

export default Home;