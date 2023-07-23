import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import src_background from '../assets/background.png'
import src_right1 from '../assets/right1.png';
import src_right2 from '../assets/right2.png';
import src_left1 from '../assets/left1.png';
import src_left2 from '../assets/left2.png';
import src_left3 from '../assets/left3.png';
import src_start from '../assets/star.png';
import DesktopNav from "../components/DesktopNav";
import { useRef } from "react";

function Home(){

    const parallaxRef = useRef();

    //Callback function to handle click
    const handleClick = (whereTo) => {
        
        switch(whereTo){
            case 1:
                parallaxRef.current.scrollTo(0);
                break;
            case 2:
                parallaxRef.current.scrollTo(1);           
                break; 
            case 3:
                parallaxRef.current.scrollTo(2);
                break;
            case 4:
                parallaxRef.current.scrollTo(3);                
                break;
            default:
                parallaxRef.current.scrollTo(0);
                break;
            }
    }
    
    return(
        <div className="home">
            <Parallax pages={4} ref={parallaxRef}>
                
                {/* ************************************** */}
                {/* ******************PAGE 1 ***************/}      
                {/* ************************************** */}
                {/* Background Image */}
                <ParallaxLayer
                offset={0}
                speed={0}   
                style={{backgroundImage: `url(${src_background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                        }}                          
                >                    
                    </ParallaxLayer>                              
                {/* Star */}
                <ParallaxLayer 
                  offset={0}
                  speed={0.5}                                    
                  >
                    <img src={src_start} style={{marginLeft:"50%", minWidth:"12%", transform: "translateX(-50%)"}} alt="Yellow star"/>
                </ParallaxLayer>
                {/* Site Title */}
                <ParallaxLayer
                    offset={0.45}
                    speed={0.25}
                >
                    <h1>Simple Night</h1>
                </ParallaxLayer>
                {/*  Clouds Right */}
                {/* Cloud right 1 */}
                <ParallaxLayer 
                  offset={0}
                  speed={0.5}                  
                  >
                    <img src={src_right1} style={{marginLeft: "80%", minWidth: "20%"}} alt="Purple cloud"/>
                </ParallaxLayer>
                  {/* Cloud right 2 */}
                <ParallaxLayer 
                  offset={0}
                  speed={0.9}                  
                  >
                    <img src={src_right2} style={{marginLeft: "70%", minWidth: "20%"}} alt="Purple cloud"/>
                </ParallaxLayer>
                  {/* Clouds Left */}
                  {/* Cloud left 1 */}
                <ParallaxLayer 
                  offset={0}
                  speed={0.65}                  
                  >
                    <img src={src_left1} style={{marginLeft: "0%", minWidth: "20%"}} alt="Purple cloud"/>
                </ParallaxLayer>
                {/* Cloud left 2 */}
                <ParallaxLayer 
                  offset={0}
                  speed={0.30}                  
                  >
                    <img src={src_left2} style={{marginLeft: "13%", minWidth: "20%"}} alt="Purple cloud"/>
                </ParallaxLayer>
                {/* Cloud left 3 */}
                <ParallaxLayer 
                  offset={0}
                  speed={0.20}                  
                  >
                    <img src={src_left3} style={{marginLeft: "0%", minWidth: "20%"}} alt="Purple cloud"/>
                </ParallaxLayer>
                {/* Desktop Nav Menu */}
                <ParallaxLayer offset={0}
                                speed={0.1}
                                factor={1}>
                    <DesktopNav onClick={handleClick}/>
                 </ParallaxLayer>
                            {/* Button */}
                <ParallaxLayer offset={0.8}
                               speed={0.2}
                               style={{display: "flex", justifyContent: "center"}}>
                    <button onClick={() => handleClick(2)}>Discover</button>
                </ParallaxLayer>

                {/* ************************************** */}
                {/* ******************PAGE 2 ***************/}      
                {/* ************************************** */}
                  {/* Empty purple background */}
                  <ParallaxLayer
                offset={1}
                speed={0}   
                style={{backgroundImage: `url(${src_background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                        }}         
                />       
                {/* Work Section */}
                <ParallaxLayer offset={1}>
                    <h1>Work</h1>
                </ParallaxLayer>


                {/* ************************************** */}
                {/* ******************PAGE 3 ***************/}      
                {/* ************************************** */}
                  {/* Empty purple background */}
                <ParallaxLayer offset={2} speed={0}>
                    <div className="empty-background"></div>
                </ParallaxLayer>
                {/* About Section */}
                <ParallaxLayer offset={2}>
                    <h1>About</h1>
                </ParallaxLayer>


                {/* ************************************** */}
                {/* ******************PAGE 4 ***************/}      
                {/* ************************************** */}
                  {/* Empty purple background */}
                  <ParallaxLayer offset={3} speed={0}>
                    <div className="empty-background"></div>
                </ParallaxLayer>
                {/* Contact Section */}
                <ParallaxLayer offset={3}>
                    <h1>Contact</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Home;
