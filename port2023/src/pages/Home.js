import Ellipses from "../components/Ellipses";

function Home(){

    const handleClick = () =>{
        const workSection = document.getElementById("my-work");
        if(workSection)
            workSection.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="home">
            <div className="main-title">
                <h1>Carlos Tussi</h1> 
                <p>Web Designer</p>           
            </div>
            
            <button 
                    onClick={handleClick}>My Work</button>
        </div>
    )
}

export default Home;