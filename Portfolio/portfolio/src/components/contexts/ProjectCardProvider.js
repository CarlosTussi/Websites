import React from "react";
import { useState } from "react";

const ProjectCardContext = React.createContext();

function ProjectCardProvider({children})
{
    const [projectCardInfo, setProjectCardInfo] = useState({
        currentName: "",
        isClicked: false,

    });
    
    return(
        <ProjectCardContext.Provider value={{
                ...projectCardInfo,
             updateSelectedProject: (newName) => {
                setProjectCardInfo({
                    currentName: newName,
                    isClicked: projectCardInfo.isClicked ? false : true,
                    })                    
             },
            }}>
            {children}
        </ProjectCardContext.Provider>
        );
}

export const useProjectCardContext = () => React.useContext(ProjectCardContext);
export default ProjectCardProvider;