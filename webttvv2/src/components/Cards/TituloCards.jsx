import React from 'react';
import { MDBBadge } from 'mdb-react-ui-kit';
import '../Carousel/CarouselCompCss.css';
import './cardsscss.scss';

export default function TituloCards() {
  return (
    <div className="text-center">
      <h1>
        Nuestros Departamentos
        <MDBBadge className='ms-2'></MDBBadge>
      </h1>
    </div>
  );
}