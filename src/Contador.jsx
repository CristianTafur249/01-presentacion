import { useState } from 'react';
import './Contador.css';


function Contador(){
    //estado
    const [cont , setcont] = useState(0);
    return(
        <div className="contador">
            <p>
                Has hecho clic {cont} veces en este boton
            </p>
            <button className='inc' onClick={()=>{ setcont(cont+1) } }>Incrementar</button>
        </div>
        
    );

}
export default Contador;