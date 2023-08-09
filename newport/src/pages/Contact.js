import { CONTACT_PAGE_ID } from "../utils/Global";
import { useScrollTracking } from "../hooks/useScrollTracking";

function Contact(){

    const contactRef = useScrollTracking(CONTACT_PAGE_ID);


    return(
        <section className="contact-container" id={CONTACT_PAGE_ID} ref={contactRef}>
            Contact
        </section>
    )
}

export default Contact;