import '../styles/Booking.css'

function Booking()
{
    return (
        <section className='Booking'>
            <div className="booking-title">
                <h1>Make a Booking</h1>
            </div>
            <form action="#code-to-handle-form" method="post">
                <div className="full-name">
                    <div>
                         <label for="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" required minlength="1" placeholder="First Name"></input>
                    </div>
                    <div>
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" required min="1" placeholder="Last Name"></input>                        
                    </div>
                    </div>
                    <div className="contact">
                        <div>
                            <label for="phone-number">Phone Number</label>
                            <input type="number" id="phone-number" name="phone-number" required placeholder="Phone Number"></input>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required placeholder="Email"></input>
                        </div>
                    </div> 
                    <div className="booking-services">
                        <label for="services">Services</label>
                        <div>
                            <input id="services" name="services" list="services-list" required placeholder="Hair"></input>                         
                            <datalist id="services-list">
                                <option value="Hair"></option>
                                <option value="Nails"></option>
                                <option value="Makeup"></option>
                            </datalist> 
                        </div>                        
                    </div>
                    <div className="booking-date">
                        <label for="booking-date">Booking Date</label>
                        <div>
                            <input type="date" id="booking-date" name="booking-date" value="2017-06-01"></input>
                        </div>
                    </div>                    
                    <div className="btn">
                        <button type="submit">Book Now</button>
                    </div>               
            </form>         
        </section>
    );
}

export default Booking;