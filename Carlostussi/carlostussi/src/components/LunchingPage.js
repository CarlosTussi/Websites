import StickyPage from "./StickyPage";

const card = ["Hosting",
              "Deploying",
              "Online"]

function LunchingPage()
{
    return(
         <StickyPage title="Lunching" cards={card} final={true}/>
    );

}

export default LunchingPage;