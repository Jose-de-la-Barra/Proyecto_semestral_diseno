import React from 'react';
//import './SN.scss'
import Carousel from './Carousel/CarouselComp'
export default function InSitu() {
    return (
        <div>
            <Carousel/>
            <div className='Home-section1'>
                <h1 className='text-center titulo'>
                    Trabajos In Situ
                </h1>
                <p>Se le llama "Trabajos in situ" a las salidas a terreno que realiza la organización.</p>
            </div>
        </div>
    );
}