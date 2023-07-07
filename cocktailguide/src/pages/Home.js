import HeaderMobile from "../components/HeaderMobile";
import Searchbar from "../components/Searchbar";

function  Home()
{
    return(
        <div className="home">
          <HeaderMobile/>
          <h1>The Cocktail Guide</h1>
          <Searchbar />  
        </div>
    )
}

export default Home;