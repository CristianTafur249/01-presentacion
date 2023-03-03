let name ='Cristian';
let lastname='Tafur';
import imgPerfil from '../assets/avatar.jpg';
import './PresentationCard.css';

function PresentationCard(){
    return(
        <div className="presentation-card">
            <h3>Presentacion</h3>
            <img src={imgPerfil} alt="Avatar" className='Avata-img'/>
            <h3>
                Hola, soy { name + " " + lastname } Estudiante de Ingenieria de Sistemas
            </h3>
            
        </div>
        
    );

}
export default PresentationCard