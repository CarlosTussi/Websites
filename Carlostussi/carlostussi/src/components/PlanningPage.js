import StickyPage from "./StickyPage";

const card = ["Requirements",
              "Users",
              "Prototype"]

function PlanningPage()
{
    return(
        <StickyPage title="Lunching" cards={card}/>        
    );
}

export default PlanningPage;