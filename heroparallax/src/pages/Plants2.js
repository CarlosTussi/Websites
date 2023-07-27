import { Parallax, Background } from 'react-parallax';
import './Plants2.css'
import src_plant1 from '../assets/plant1.jpg'
import src_plant2 from '../assets/plant2.jpg'
import src_plant3 from '../assets/plant3.jpg'
import src_video from '../assets/plants.mp4'
import { useRef } from 'react';

function Plants2(){

    const videoRef = useRef();

    return(
        <div className='plants2'>
            <ul>
                <li>WORK</li>
                <li>CONTACT</li>
                <li>ABOUT</li>

            </ul>
            <Parallax                                
                strength={200}
                bgImage={src_plant1}
                bgImageStyle={{width: "100%",
                               height: "100%",
                                objectFit: "cover",
                                objectPosition: "5% 85%",
            }}              
            >
                <div style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>       
                    <h1 style={{margin: "auto"}}>Hello World</h1>             
                </div>
                
            </Parallax>
            <div className='video-container'>
                <video src={src_video} ref={videoRef} autoPlay loop muted />
            </div>
            <Parallax                                
                strength={300}
                bgImage={src_plant2}
                bgImageStyle={{width: "100%",
                               height: "100%",
                                objectFit: "cover",
                                objectPosition: "5% 85%",
            }}  
            >
                <div style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>       
                    <h1 style={{margin: "auto"}}>Hello World</h1>             
                </div>
            </Parallax>
            <Parallax                                
                strength={400}
                bgImage={src_plant3}
                bgImageStyle={{width: "100%",
                               height: "100%",
                                objectFit: "cover",
                                objectPosition: "5% 85%",
            }}  
            >
                <div style={{
                    height: "100vh", 
                    display: "flex", 
                    flexDirection: "row",
                    alignItems: "center", 
                    justifyItems: "center",
                    }}>       
                    <h1 style={{margin: "auto"}}>Hello World</h1>             
                </div>
            </Parallax>
        </div>
    )
}

export default Plants2;