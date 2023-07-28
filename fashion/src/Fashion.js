import { Parallax } from "react-parallax";

import src_women_bag from './assets/bag-women.jpg';
import src_men_bag from './assets/bag-men.jpg';
import src_women_shoes from './assets/shoes-women.jpg'
import src_men_shoes from './assets/shoes-men.jpg'

import Header from './components/Header';
import Branding from "./components/Branding";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function Fashion(){

    const bagsRef = useRef();
    const shoesRef = useRef(); 
    const contactRef = useRef();



    return(
        <div className='fashion'>                        
            <Header bagsRef={bagsRef} shoesRef={shoesRef} contactRef={contactRef}/>
        <Parallax
        strength={200}
        bgImage={src_women_bag}
        bgImageStyle={{width: "100%",
                       height: "100%",
                        objectFit: "cover",
                        objectPosition: "15% 85%",
    }}  
        >     
         <div
            ref={bagsRef} 
            style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>       
                    
                    <div className="overlapping-content-container">
                        <div className="overlapping-text">
                            <h3>BAGS</h3>
                            <h4>SUMMER WOMEN</h4>
                        </div>
                        <div className="overlapping-button">
                            <button>FIND OUT</button>
                        </div>
                       
                    </div>

                </div>        
        </Parallax>
        <Parallax
        strength={300}
        bgImage={src_men_bag}
        bgImageStyle={{width: "100%",
                       height: "100%",
                        objectFit: "cover",
                        objectPosition: "50% 45%",
    }}  
        >
            <div style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>     

                <div className="overlapping-content-container">
                        <div className="overlapping-text">
                            <h3>BAGS</h3>
                            <h4>SUMMER MEN</h4>
                        </div>
                        <div className="overlapping-button">
                            <button>FIND OUT</button>
                        </div>
                       
                    </div>

                </div> 
        </Parallax>
        <Parallax
        strength={300}
        bgImage={src_women_shoes}
        bgImageStyle={{width: "100%",
                       height: "100%",
                        objectFit: "cover",
                        objectPosition: "5% 35%",
    }}  
        >
            <div
                ref={shoesRef} 
                style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>     

                <div className="overlapping-content-container">
                        <div className="overlapping-text">
                            <h3>SHOES</h3>
                            <h4>SUMMER WOMEN</h4>
                        </div>
                        <div className="overlapping-button">
                            <button>FIND OUT</button>
                        </div>
                       
                    </div>

                </div> 
        </Parallax>
        <Parallax
        strength={300}
        bgImage={src_men_shoes}
        bgImageStyle={{width: "100%",
                       height: "100%",
                        objectFit: "cover",
                        objectPosition: "50% 35%",
    }}  
        >
            <div style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>     

                <div className="overlapping-content-container">
                        <div className="overlapping-text">
                            <h3>SHOES</h3>
                            <h4>SUMMER MEN</h4>
                        </div>
                        <div className="overlapping-button">
                            <button>FIND OUT</button>
                        </div>
                       
                    </div>

                </div> 
        </Parallax>
        <div ref={contactRef}>
            <Contact/>
        </div>
        <Footer />
        
    </div>
    )
}

export default Fashion;