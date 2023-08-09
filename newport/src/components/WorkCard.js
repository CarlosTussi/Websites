import { useState } from "react";

function WorkCard(props)
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = ()=> setIsOpen(!isOpen);
 
    return(
        <div className="work-card-container">            
            <div className="work-img" onClick={toggleIsOpen}>
                {/* <img src={props.img} alt={props.alt} /> */}
                {isOpen? <div className="work-card-info"> 
                                {props.description}
                                <a href="a">Check it Live</a>
                        </div> : ""}
            </div>
            <p>{props.title}</p>
            <p>{props.location}</p>            
        </div>
    )
}

export default WorkCard;