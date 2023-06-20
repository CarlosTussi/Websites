import placeholder from '../images/placeholder.png'

function WorkCard()
{
    return(
        <div className="work-card-container">
            <img src={placeholder} alt="Placeholder image"/>
            <h3>Title of the project</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Aliquam dolorem accusamus 
                quas libero, obcaecati ratione beatae sequi.. </p>
        </div>
    )
}

export default WorkCard;