import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import src_background from '../assets/background.png'
import src_right1 from '../assets/right1.png';
import src_right2 from '../assets/right2.png';
import src_left1 from '../assets/left1.png';
import src_left2 from '../assets/left2.png';
import src_left3 from '../assets/left3.png';
import src_start from '../assets/star.png';
import DesktopNav from "../components/DesktopNav";
import { useEffect, useRef, useState } from "react";
import { useScroll, animated } from "react-spring";
import WorkCard from "../components/WorkCard";
import Plants2 from "./Plants2";

const PAGES = 4;

function Home(){

    const parallaxRef = useRef();
    const [currentPageScrollPercent, setCurrentPageScrollPercent] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

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

    //Current scroll listener
    useEffect(()=>{
      const container = parallaxRef.current.container.current;

      container.onscroll = (e) => {          
        const viewPortHeight = parallaxRef.current.space //Size of viewport        
        const scrollablePages = PAGES - 1 //Number of pages we can scroll
        const totalScrollHeight = viewPortHeight * scrollablePages  //How much can we scroll

        const currentScroll = e.target.scrollTop    //Current scroll number
        const totalPercentWebsiteScrolled = currentScroll / totalScrollHeight //How many % scrolled from the top
        const currentPage = Math.floor(totalPercentWebsiteScrolled * scrollablePages) //Detect which page we are at the moment
        const currentPageScrollTop = currentScroll - (viewPortHeight * (currentPage)) //Current scroll value from the current page.
        const currentPagePercent = currentPageScrollTop / viewPortHeight //How many % scrolled from the current page

        setCurrentPageScrollPercent(currentPagePercent);
        setCurrentPage(currentPage);
        
          
      }
      return () => {
          container.onscroll = null;
      }
  },[])


  const getScale = (limitPage)=>{
    if(currentPage < limitPage)
      return 1 + Math.min(1 * currentPageScrollPercent, 1);
    else
      return 2;
  }
  
    
    return(
        <div className="home">
            <Parallax pages={PAGES} ref={parallaxRef}>
                
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
                {/* Site Title */}
                                <ParallaxLayer
                    offset={0.45}
                    speed={0.25}                                        
                >
                  <animated.div style={{scale: 1+ currentPageScrollPercent, opacity: 1- currentPageScrollPercent}}>
                      <h1>Simple Night</h1>
                  </animated.div>
                </ParallaxLayer>

                {/* ************************************** */}
                {/* ******************PAGE 2 ***************/}      
                {/* ************************************** */}
                  {/*  Background Image */}
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
                <ParallaxLayer offset={1.3}>
                  <WorkCard />
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
                  <animated.div style={{ fontSize: getScale(2)+"em"}}>
                    <h1>About</h1>
                  </animated.div>
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
