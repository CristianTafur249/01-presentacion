import { useState } from 'react';
import { useEffect } from 'react';
import './CountDown.css';
function CountDown(){
    //targetSeconds, elapsedSeconds
    let [targetSeconds, setTargetSeconds] =useState(null);
    let [elapsedSeconds, setElapsedSeconds]= useState(0);

    useEffect(function () {
        if (targetSeconds == null) return;
        //targetSecons contiene valor
        setElapsedSeconds(0);
        let interval =setInterval(function() {
            setElapsedSeconds((elapsedSeconds)=>elapsedSeconds + 1) 
        }, 1000);  

        return()=>{
            clearInterval(interval);

        }

        
    

    },[targetSeconds]);

    function parseForm(ev){
        ev.preventDefault();
        let seconds =ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }

    if(elapsedSeconds>=targetSeconds && targetSeconds !== null){
        return(
            <div className='CountDown'>
                <h3>Temporisador</h3>
                <p>
                    ¡Terminó!
                </p>
                <button onClick={()=>setTargetSeconds(null)}>Reiniciar</button>

            </div>
        );
    }

    if (targetSeconds !== null){
        return(
            <div className="CountDown">
                <h3>Temporizador</h3>
                <p>Soy un conteo hasta el {targetSeconds} y han transcurrido {elapsedSeconds} segundos</p>
            </div>
            
        );
    };

    

    return(
        <div className="CountDown">
            <h3>Temporizador</h3>
            <p>¿Cuantos segundos desea contar?</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
            <input type="number" name='seconds' />
            <button type="submit">Iniciar</button>
            </form>
        </div>
    );
}

export default CountDown;