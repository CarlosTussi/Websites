function  ProgressBarCard(props)
{
    return(
        <div className="progressbar-card-container">
            <div className={`progressbar-card-number 
                             ${props.current? "current": ""}
                             ${props.completed? "completed" : ""}`}>
                {props.number}
            </div>
            <h5>{props.section}</h5>
        </div>
    )
}

export default ProgressBarCard;