import placeholder from '../images/placeholder.png'

function WorkCard()
{
    return(
        <div className="work-card-container">
            <img src={placeholder} alt="Placeholder image"/>
            <h3>Title of the project</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Aliquam dolorem accusamus 
                quas libero, obcaecati ratione beatae sequi, 
                voluptates laboriosam iusto dolore pariatur 
                nisi error cupiditate debitis quae non dolorum 
                perspiciatis repellendus minus dolor fugiat 
                \asperiores. </p>
        </div>
    )
}

export default WorkCard;