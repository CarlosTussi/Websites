import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Main()
{
    return(
        <BrowserRouter>        
            <main className="crud-container">
            
                <ul className="tab-container">                
                        <li><Link to ="/">Create</Link></li>
                        <li><Link to ="/read">Read</Link></li>
                        <li><Link to ="/update">Update</Link></li>
                        <li><Link to ="/delete">Delete</Link></li>
                </ul>
            
                <div className="panel-container">
                    <div className="panel-operations">  
                    <Routes>                 
                        <Route path="/" element={<Create />} />
                        <Route path="/read" element={<Read />}/>
                        <Route path="/update" element={<Update />}/>
                        <Route path="/delete" element={<Delete />}/>
                        
                    </Routes>
                    </div>
                </div>
            </main>
        
        </BrowserRouter>
    )
}

export default Main;