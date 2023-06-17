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
                \asperiores. Voluptas iure odit ipsam incidunt 
                vel officia delectus id dolore maxime illo culpa 
                molestias, odio laborum numquam nobis maiores 
                pariatur voluptatibus atque amet adipisci aperiam 
                harum? Rerum quas cumque minus ducimus, quo quae 
                molestias consequuntur </p>
        </div>
    )
}

export default WorkCard;