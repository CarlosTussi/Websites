import src_haircut from '../images/haircut.jpg';
import src_makeup from '../images/makeup.jpg';
import src_nails from '../images/manicure.jpg';



function Promo ()
{
    return(
        <>
            <section className="main-promo">  
                <div className="promo-name">
                    <h1>Treat Yourself</h1>                
                </div>
                <div className="promo-description">
                    <h2>Special Offer</h2>
                    <div className="promo-description-text">
                        <div className="promo-text-left">
                            <p>25%</p>
                        </div>
                        <div className="promo-text-right">
                            <p>discount on</p>
                            <p> <span style={{color: "black"}}>Treat Yourself</span> treatments!</p>
                        </div>                                     
                    </div>                                
                    <button>Find Out More!</button>
                </div>                       
            </section>
        </>
    );
}

function Services()
{
    return(
        <>
            <section className="main-photos" id="services">         
                <article>
                    <img src={src_haircut} alt="Lady having her hair cut and blown dry"></img>
                    <h3>Hair</h3>    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores accusamus quo dolore porro sit natus amet cumque adipisci asperiores</p>                                                    
                    <button onclick="location.href = 'booking.html';">Book Now</button>
                </article>
                <article>
                    <img src={src_nails} alt="Nails with manicure done."></img>
                    <h3>Nails</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores accusamus quo dolore porro sit natus amet cumque adipisci asperiores</p>                                                    
                    <button onclick="location.href = 'booking.html';">Book Now</button>
                </article>
                <article>
                    <img src={src_makeup} alt="Woman having her makeup done"></img>
                    <h3>Makeup</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus velit voluptas enim nulla labore possimus temporibus!</p>                
                    <button onclick="location.href = 'booking.html';">Book Now</button>                    
                </article>
         </section>
        </>
    );
}

export {Promo, Services};