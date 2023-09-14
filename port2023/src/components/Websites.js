import WorkCard from "./WorkCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/modules';
import { Fade } from "react-awesome-reveal";

import fashion_src from '../assets/fashion.jpg'
import auth_src from '../assets/auth.jpg'
import cocktail_src from '../assets/cocktail.png'

function Websites()
{
    const projects = [1,2,3,4,5];
    return(
        <div className="websites">
            <Fade duration="1000">
            <WorkCard imgsrc={cocktail_src} 
                          name="Cocktail Guide"
                          description="Exquisitely designed landing page for a cocktail recipe website. This captivating digital gateway entices users with its harmonious fusion of visual allure and practicality, setting the stage for a delightful journey through mixology delights."
                          link="https://cocktailguide-c9736.web.app/"
                          alt="Shows a homepage with a seaerchbar and the tile Cocktail Guide."
                          />
                <WorkCard imgsrc={fashion_src} 
                          name="Product Landing Page"
                          description="Meticulously crafted fashion design website's landing page. The landing page serves as the digital red carpet, enticing visitors with a seamless blend of aesthetics and functionality."
                          link="https://fashion-a9e4f.web.app"
                          alt="Home screen of a fashion webpage showing a navigation menu and two pursers as a fashion item"
                          />
                <WorkCard imgsrc={auth_src} 
                          name="Authentication Page"
                          description="Indulge in an immersive experience with our responsive authentication page, expertly curated with a delicate equilibrium of accent and primary colors. The visual symphony of hues not only beckons users but also sets the stage for a seamless login journey."
                          link="https://authentication-e1bcb.web.app/"
                          alt="Authentication page. Containing a login form, submit button and a logo."
                          />
                {/* <WorkCard /> */}
                {/* <WorkCard /> */}
            </Fade>


            {/* <Swiper                
                modules={[Navigation, Pagination, EffectCoverflow, Mousewheel]}                
                effect={"coverflow"}
                loop={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                spaceBetween={30}
                slidesPerView={2}
                // navigation
                pagination={{ clickable: true }}       
                mousewheel={{forceToAxis: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><WorkCard /></SwiperSlide>
                <SwiperSlide><WorkCard /></SwiperSlide>
                <SwiperSlide><WorkCard /></SwiperSlide>
                <SwiperSlide><WorkCard /></SwiperSlide>
            </Swiper> */}
            
        </div>
    )
}

export default Websites;