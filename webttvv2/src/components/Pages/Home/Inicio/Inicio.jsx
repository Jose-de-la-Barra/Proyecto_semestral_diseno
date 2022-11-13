import React from 'react';

//import Carousel from './Carousel/CarouselComp'
export default function Inicio() {
    return (
        <div >
            <div className='hero-container'>
                <video src={require('../InSitu/Carousel/imgs/VSE.mp4')} autoPlay loop muted />
                <h1>TRABAJOS VOLUNTARIOS</h1>
                <p>Universidad Adolfo Ibañez</p>
            </div>
            <div className='Home-section1 text-center'>
                <h1>Porque nos encanta ayudar</h1>
                <p>Como organización tenemos nuestra esperanza puesta en ayudar a crear mejores comunidades, ya que creemos que la mejor manera de generar un cambio es a través de comunidades unidas, integrales y fortalecidas en educación, salud y sustentabilidad. Es por esto que en las instancias creadas por la organización nos enfocamos en mejorar las condiciones materiales de las comunidades que intervenimos y también, en generar cambios positivos en los temas mencionados. Por último, destacamos como lo más importante el vínculo con y entre la comunidad, porque gracias a esto es que se pueden consolidar las transformaciones positivas que soñamos alcanzar.
                </p>
            </div>
            
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <h1>
                    "Se el cambio que deseas ver en el mundo"
                    </h1>
                    <h4>&mdash;Anónimo</h4>
                </div>
            </div>
  
        </div>
           
        
    );
}