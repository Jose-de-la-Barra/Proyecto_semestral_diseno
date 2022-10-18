import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './cardsscss.scss'


export default function Cards() {
  return (
    <MDBRow className='row-cols-2 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-50' alignment='center'>
          <MDBCardImage
            src={require('./resources/diseno.jpeg')}
            
            alt='...'
            position='top'
          />
          
          <MDBCardBody>
            <MDBCardTitle>Diseño & Construcción</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-50' alignment='center'>
          <MDBCardImage
            src={require('./resources/vinculacion.webp.jpeg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Vinculación</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-50' alignment='center'>
          <MDBCardImage
            src={require('./resources/formacion.jpeg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Formación</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-50' alignment='center'>
          <MDBCardImage
            src={require('./resources/educacion.jpeg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Educación</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      

      <MDBCol>
        <MDBCard className='h-50' alignment='center'>
          <MDBCardImage
            src={require('./resources/difusion.jpeg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Difusión</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



      <MDBCol>
        <MDBCard className='h-50' alignment='center'>
          <MDBCardImage
            src={require('./resources/financiamiento.webp.jpeg')}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Financiamiento</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>
  );
}