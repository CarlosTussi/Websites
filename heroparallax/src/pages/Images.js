import './Images.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import src_image1 from '../assets/img.png';
import src_image2 from '../assets/img2.png';
import src_image3 from '../assets/img3.png';

function Images()
{
    return(
        <div className='images'>
            <Parallax pages={3}>
                <ParallaxLayer
                offset={0}
                speed={0}                                  
                >
                    <div className='img-container'>
                        <img src={src_image1} alt=''/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={0.9}
                speed={0.2}                                  
                >
                    <div className='img-container'>
                        <img src={src_image2} alt=''/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1.7}
                speed={0.5}                                  
                >
                    <div className='img-container'>
                        <img src={src_image3} alt=''/>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Images;