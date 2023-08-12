import { ABOUT_PAGE_ID } from "../utils/Global";
import { useScrollTracking } from "../hooks/useScrollTracking";

function About()
{
    const aboutRef = useScrollTracking(ABOUT_PAGE_ID);


    return(
        <section className="about-container" id={ABOUT_PAGE_ID} ref={aboutRef}>
            <h3>ABOUT</h3>
            <p>Welcome! <br/>I'm a tech-loving creative with a global 
                perspective. Computer science grad turned 
                web designer, I blend cultures and code, 
                infusing <span className="about-highlight">HTML/CSS/React</span> with insights 
                from <span className="about-highlight">70+ countries </span>. 
                Let's craft something cool!"</p>
            <p></p>
        </section>
    )
}

export default About;