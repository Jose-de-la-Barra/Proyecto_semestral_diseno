import React, {useState} from 'react';

import * as api_getvideo from './api_getvideo'
import { Home } from './Home';
import { Profile } from './Profile';

//import Carousel from './Carousel/CarouselComp'
export default function Inicio() {

    //Requerimos el video desde web
    const [video, setVideo] = useState(api_getvideo.get_video());

    return (
        
        <div >
            <div className='hero-container'>
                
                <video src={api_getvideo.get_video_url((video[[0]]).name)}
                    autoPlay
                    loop
                    muted 
                    //dado que es solo un archivo, lo colocamos a mano.    
                    
                    />
                <h1>TRABAJOS VOLUNTARIOS</h1>
                <p>Universidad Adolfo Ibañez</p>
            </div>
            <div className='Home-section1 text-center'>
                <h1>Porque nos encanta ayudar</h1>
                <p>Como organización tenemos nuestra esperanza puesta en ayudar a crear mejores comunidades, ya que creemos que la mejor manera de generar un cambio es a través de comunidades unidas, integrales y fortalecidas en educación, salud y sustentabilidad. Es por esto que en las instancias creadas por la organización nos enfocamos en mejorar las condiciones materiales de las comunidades que intervenimos y también, en generar cambios positivos en los temas mencionados. Por último, destacamos como lo más importante el vínculo con y entre la comunidad, porque gracias a esto es que se pueden consolidar las transformaciones positivas que soñamos alcanzar.
                </p>
            </div>
            <div style={{backgroundColor:"rgb(228, 121, 21",padding:"7vh"}}>
                <div className="blockquote-wrapper">
                    <div className="blockquote">
                        <h1>
                        "Sé el cambio que deseas ver en el mundo."
                        </h1>
                        <h4>&mdash;Anónimo.</h4>
                    </div>
                </div>
            </div>
            
            <div className='Home-section1'>
                <h1 className='text-center titulo'>
                    Sobre Nosotros
                </h1>
                    <p>Anhelamos una sociedad más igualitaria, en la que todas las personas tengan acceso a las mismas oportunidades y condiciones de calidad de vida. Soñamos con comunidades unidas, que tengan acceso a espacios de encuentro, colaboración y aprendizaje. Proyectando un Chile mejor desde nuevos exponentes claros y fuertes de la acción social. Buscamos ser flexibles y adaptarnos a los nuevos desafíos de nuestras comunidades, para así continuar siendo agentes de cambio desde la solidaridad y el compromiso. Además, queremos que quienes compongan las siguientes generaciones de Trabajos Voluntarios tengan un sentido fuerte de responsabilidad social y pensamiento crítico, para que continúen interviniendo en sus espacios con el fin de transformarlos desde la empatía y el compromiso.</p>
                
            </div>
            <div className='Home-section1'>
                <h1 className='text-center titulo'>
                    Cuentanos un poco más sobre ti!
                </h1>
                    <Home/>
                <h4 className='text-center titulo'>
                    Donaciones
                </h4>
                
            </div>
  
        </div>
           
        
    );
}