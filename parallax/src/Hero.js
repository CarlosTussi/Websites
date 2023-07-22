import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from './Header'
import Products from './Products';
import Footer from './Footer';

function Hero()
{
    return(
        <div className='hero'>
            <Parallax className='parallax-container' pages={4}>
                <ParallaxLayer offset={0}
                                speed={1}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer className='parallax-logo'
                                offset={0.15}
                                speed={0.5}
                                >
                    <p>Logo</p>
                </ParallaxLayer>
                <ParallaxLayer className='parallax-title'
                                offset={0.45}
                                speed={1}
                                >
                    <h1>Website Name</h1>
                </ParallaxLayer>
                <ParallaxLayer className='parallax-button'
                                offset={0.80}
                                speed={1.5}
                                >
                    <button>Click Me</button>
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    <div className='first-different-background'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.1}
                                speed={0.7}>
                        <h2>My products</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={1.4}
                                speed={0.5}>
                    <Products />
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                    <div className='second-different-background'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={3}>
                    <div className='third-different-background'></div>
                </ParallaxLayer>
                <ParallaxLayer offset={3}>
                    <Footer />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Hero;