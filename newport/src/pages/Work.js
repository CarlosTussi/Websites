import WorkCard from '../components/WorkCard';
import {WORK_PAGE_ID} from '../utils/Global';
import { useScrollTracking } from '../hooks/useScrollTracking';

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptatum?";

function Work()
{    
    const workRef = useScrollTracking(WORK_PAGE_ID);

    return(        
            <div className="work-container" id={WORK_PAGE_ID} ref={workRef}>                
                <WorkCard title="TITLE" location="ITALY" description={description}/>          
                <WorkCard title="TITLE" location="UAE" description={description}/>          
                <WorkCard title="TITLE" location="CHINA" description={description}/>          
                <WorkCard title="TITLE" location="BRAZIL" description={description}/>            
            </div>
    )
}

export default Work;