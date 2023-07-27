import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import src_plant1 from '../assets/plant1.jpg'
import src_plant2 from '../assets/plant2.jpg'
import src_plant3 from '../assets/plant3.jpg'
import './Plants.css'

function Plants()
{
    return(
        <div className="plants">
            <Parallax pages={4}>
                {/* *********** */}
                {/* FIRST IMAGE */}
                {/* *********** */}
                {/* <ParallaxLayer className="img-plant-container" offset={0} speed={0}>                 
                        <img src={src_plant1} alt=""/>                    
                </ParallaxLayer>
                <ParallaxLayer offset={0.6} speed={0.2}>
                    <div className="plants-action">
                        <h3>Hello</h3>
                        <button>Click Me</button>
                    </div>
                </ParallaxLayer> */}
                {/* ************ */}
                {/* SECOND IMAGE */}
                {/* ************ */}
                {/* <ParallaxLayer className="img-plant-container" offset={0.8} speed={0.2}>                    
                        <img className="img-2" src={src_plant2} alt=""/>                                        
                </ParallaxLayer>                
                <ParallaxLayer offset={1.35} speed={0.15}>
                            <div className="plants-action">
                                <h3>Hello</h3>
                                <button>Click Mxe</button>
                            </div>
                        </ParallaxLayer>     */}
                {/* *********** */}
                {/* THIRD IMAGE */}
                {/* *********** */}
                {/* <ParallaxLayer className="img-plant-container" offset={1.4} speed={0.25}>                    
                        <img src={src_plant3} alt=""/>                   
                </ParallaxLayer>
                <ParallaxLayer offset={2.1} speed={0.1}>
                    <div className="plants-action">
                        <h3>Hello</h3>
                        <button>Click Me</button>
                    </div>
                </ParallaxLayer>  */}
                {/* ************ */}
                {/* FOURTH IMAGE */}
                {/* ************ */}
                {/* <ParallaxLayer className="img-plant-container" offset={2.25} speed={0.1}>                    
                        <img className="img-2" src={src_plant2} alt=""/>                                        
                </ParallaxLayer>                
                <ParallaxLayer offset={2.75} speed={0.05}>
                            <div className="plants-action">
                                <h3>Hello</h3>
                                <button>Click Me</button>
                            </div>
                        </ParallaxLayer>     */}
                {/* ****** */}
                {/* FOOTER */}
                {/******** */}
                {/* <ParallaxLayer className="plants-footer" offset={3} speed={0.05}>                    
                        <footer>
                            <h4 style={{color: "white", textAlign: "center", marginTop: "2em"}}>Footer</h4>
                        </footer>
                </ParallaxLayer> */}
            </Parallax>
        </div>
    )
}

export default Plants;