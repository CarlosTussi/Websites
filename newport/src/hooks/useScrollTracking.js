import { useEffect, useRef } from "react";
import { useDesktopNavContext } from "../providers/DesktopNavProvider";

//Hook will detect that user have reached the beginning of a new section
//Will update the context (setCurrentSection(sectionId) that will higlight the current section in the Nav components)

export function useScrollTracking(sectionId) {
    
  const sectionRef = useRef();
  const { setCurrentSection } = useDesktopNavContext();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        //Logic to detect that it's the beginning of a new section
        const { offsetHeight } = sectionRef.current;
        const distanceFromRef = sectionRef.current.getBoundingClientRect().top;
        
        if (distanceFromRef < 0 && distanceFromRef + offsetHeight > 0) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId, setCurrentSection]);

  //Return the ref associated with the sectionId of the section component
  return sectionRef;
}
