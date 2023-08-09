import { ABOUT_PAGE_ID } from "../utils/Global";
import { useScrollTracking } from "../hooks/useScrollTracking";

function About()
{
    const aboutRef = useScrollTracking(ABOUT_PAGE_ID);


    return(
        <section className="about-container" id={ABOUT_PAGE_ID} ref={aboutRef}>
            About
        </section>
    )
}

export default About;