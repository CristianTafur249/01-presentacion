let name ='Cristian';
let lastname='Tafur';
import imgPerfil from '../assets/avatar.jpg';
import './PresentationCard.css';

function PresentationCard(){
    return(
        <div className="presentation-card">
            <img src={imgPerfil} alt="Avatar" className='Avata-img'/>
            <h3>
                Hola, soy { name + " " + lastname } Estudiante de Ingenieria de Sistemas
            </h3>
            
        </div>
        
    );

}
export default PresentationCard