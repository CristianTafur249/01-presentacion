let name ='Cristian';
let lastname='Tafur';
import imgPerfil from './assets/avatar.jpg';
import './PresentationCard.css';

function PresentationCard(){
    return(
        <div className="presentation-card">
            <h1>
                Hola, soy { name + " " + lastname }
            </h1>
            <img src={imgPerfil} alt="Avatar" className='Avata-img'/>
        </div>
        
    );

}
export default PresentationCard