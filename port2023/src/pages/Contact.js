import { Slide } from 'react-awesome-reveal';
import { Mail } from 'react-feather';

function Contact()
{
    return(
        <section className="contact-page" id="contact">
            <h3>Contact</h3>
            <Slide duration="1500">
                <div className="contact-card">
                    <div><Mail strokeWidth="1px" size="2em"/></div>
                    <a target="_blank" href="mailto:contact@carlostussi.com" rel="noreferrer">contact@carlostussi.com</a>
                </div>
            </Slide>
            
            
        </section>
    )
}

export default Contact;