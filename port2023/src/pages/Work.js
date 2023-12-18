import Websites from "../components/Websites";

function Work()
{
    return(
        <section className="work" id="my-work">
            <h3>My Work</h3>
            <Websites />       
            <div className="see-all-button"> 
                <button>More coming soon</button>
            </div>
        </section>
    )
}

export default Work;