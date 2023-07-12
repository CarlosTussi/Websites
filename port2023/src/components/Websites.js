import WorkCard from "./WorkCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/modules';

function Websites()
{
    const projects = [1,2,3,4,5];
    return(
        <div className="websites">
            <Swiper                
                modules={[Navigation, Pagination, EffectCoverflow]}                
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
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}                   
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><WorkCard /></SwiperSlide>
                <SwiperSlide><WorkCard /></SwiperSlide>
                <SwiperSlide><WorkCard /></SwiperSlide>
                <SwiperSlide><WorkCard /></SwiperSlide>
            </Swiper>
            
        </div>
    )
}

export default Websites;