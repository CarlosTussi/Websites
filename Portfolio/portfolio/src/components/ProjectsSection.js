import { HStack, UnorderedList } from "@chakra-ui/react";
import FullSection from "./FullSection";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination"
import ProjectCard from "./ProjectCard";

import imgSrc from "../assets/me.jpeg";


SwiperCore.use([EffectCoverflow, Pagination]);

const projects = [
    {
        name: "Web Application 1",
        descrription: "My FIRST web application",
        img: "../assets/me.jpeg",
    },
    {
        name: "Web Application 2",
        descrription: "My SECOND web application",
        img: "../assets/me.jpeg",
    },
    {
        name: "Web Application 3",
        descrription: "My THIRD web application",
        img: "../assets/me.jpeg",
    },
    {
      name: "Web Application 4",
      descrription: "My FOURTH web application",
      img: "../assets/me.jpeg",
    },
    {
      name: "Web Application 5",
      descrription: "My FIFTH web application",
      img: "../assets/me.jpeg",
    },


];

function ProjectsSection()
{

    const handleSlideClick = (e) =>
    {
      //To do
    }
    return(
      <FullSection 
                bg="#0A0A0A"
                id="work">
                <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={() => console.log('slide change')}            
        pagination={true}                
      >
        {projects.map((aProject) => {
            return(
              <SwiperSlide onClick={(e)=> handleSlideClick(e)}key={aProject.name}>
                  <ProjectCard imgSrc={imgSrc} title={aProject.name}/>                  
              </SwiperSlide>
            );
        })} 
        </Swiper>    
      </FullSection>
    );
}

export default ProjectsSection;