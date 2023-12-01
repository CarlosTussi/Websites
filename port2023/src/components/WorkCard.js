function WorkCard(props)
{
    return(
        <div className="work-card">                        
            <div className="img-container">
                <a className="img-link" href={props.link} target="_blank" rel="noreferrer"><img src={props.imgsrc} alt={props.alt}/></a>
            </div>
            <div className="card-content">
                <h5>{props.name}</h5>
                <p>{props.description}</p>
                <div className="live-link-container"><a className="see-live-link" href={props.link} target="_blank" rel="noreferrer">See it Live</a></div>
                
            </div>
           
        </div>
    )
}

export default WorkCard;