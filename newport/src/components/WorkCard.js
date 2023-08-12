import { useState } from "react";
import { ExternalLink } from "react-feather";

function WorkCard(props)
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = ()=> setIsOpen(!isOpen);
 
    return(
        <div className="work-card-container">            
            <div className="work-img" onClick={toggleIsOpen}>
                {/* <img src={props.img} alt={props.alt} /> */}
                {isOpen? <div className="work-card-info"> 
                                <p>{props.description}</p>
                                <a href="a">See it Live <ExternalLink size="0.9em" width="1em"/></a>
                        </div> : ""}
            </div>
            <p>{props.title}</p>
            <p>{props.location}</p>            
        </div>
    )
}

export default WorkCard;