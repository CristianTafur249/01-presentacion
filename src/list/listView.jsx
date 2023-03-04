import { useState } from "react";

function ListView({elements, funFilterItems}) {
       return(
        <div className="ListView">
            <input type='text' onChange={ev => funFilterItems(ev.target.value)}/>
            <ul>
                {
                    elements.map( nombre => <li>{nombre}</li>)
                }
            </ul>
        </div>
       );
}
export default ListView;