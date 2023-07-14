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

function Websites()
{
    const projects = [1,2,3,4,5];
    return(
        <div className="websites">
            <Fade duration="1000">
                <WorkCard />
                <WorkCard />
                <WorkCard />
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