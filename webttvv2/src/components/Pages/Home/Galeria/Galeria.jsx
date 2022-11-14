import React from 'react';
import './SN.scss'
import imagenes from './api_imagenes.json';

export default function Galeria() {
    console.log('imagenes',imagenes)
    return (
        <div id='SobreNosotros'>
            <div className='Home-section1'>
                <h1 className='text-center titulo'>
                    Galeria
                </h1>
                    <p>Te presentamos la galeria, un lugar donde guardamos lo que hemos realizado</p>
            </div>

        </div>
    );
}
