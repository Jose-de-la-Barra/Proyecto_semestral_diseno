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
import { MDBBadge } from 'mdb-react-ui-kit';
import './cardsscss.css'



export default function Departamentos() {
  return (
    
    <div className='cajacontainer'>
      <div className='Home-section1'>
        <h1 className='text-center titulo'>
            Nuestros Departamentos
        </h1>
        <p style={{marginTop:'4rem'}}>
          Porque nos importa ser integros en cada uno de nuestros aspectos, dividimos la organización en departamentos para poder otorgar la mejor experiencia posible a nuestros voluntarios.
        </p>
      </div>
      <MDBCard className='container_card'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage 
            src={require('./resources/diseno.jpeg')}
              fluid
              className='img_card'
              />
          </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <h3 className='titulo titulo_card'>Diseño y Construcción</h3>
                <MDBCardText>
                  Encargados de diseñar las construcciones y procedimientos dentro de trabajos in situ. 
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
      </MDBCard> {/* Termino de card DYC*/}
      <MDBCard className='container_card'>
          <MDBRow className='g-0'>
            <MDBCol md='8'>
              <MDBCardBody>
                <h3 className='titulo titulo_card'>Vinculación</h3>
                <MDBCardText>
                Departamento encargado de mantener el espíritu de trabajos voluntarios durante todo el año realizando actividades en Peñalolén y otras comunas de Santiago.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCardImage
              src={require('./resources/vinculacion.webp.jpeg')} 
              fluid
              className='img_card'/>
            </MDBCol>
          </MDBRow>
      </MDBCard>{/* Termino de card Vinculacion*/}
      <MDBCard className='container_card'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage 
            src={require('./resources/formacion.jpeg')}
              fluid
              className='img_card'
              />
          </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <h3 className='titulo titulo_card'>Formación</h3>
                <MDBCardText>
                Encargados de hacer los manuales que servirán de guía en las actividades que se realizan en trabajos in situ
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
      </MDBCard>{/* Termino de card Vinculacion*/}
      <MDBCard className='container_card'>
          <MDBRow className='g-0'>
            <MDBCol md='8'>
              <MDBCardBody>
                <h3 className='titulo titulo_card'>Educación</h3>
                <MDBCardText>
                Departamento que se encarga de mantener activo el preuniversitario “social crece” haciendo clases online a estudiantes de Peñalolén.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCardImage
              src={require('./resources/educacion.jpeg')} 
              fluid
              className='img_card'/>
            </MDBCol>
          </MDBRow>
      </MDBCard>{/* Termino de card Educacion*/}
      <MDBCard className='container_card'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage 
            src={require('./resources/difusion.jpeg')}
              fluid
              className='img_card'
              />
          </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <h3 className='titulo titulo_card'>Difusión</h3>
                <MDBCardText>
                Encargados de mantener activas todas las redes sociales de TTVV para así darse a conocer a la comunidad universitaria y de Peñalolén. También es el departamento que está encargado de ciertas tareas logísticas que facilitan el funcionamiento de la organización.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
      </MDBCard>{/* Termino de card Difusion*/}
      <MDBCard className='container_card'>
          <MDBRow className='g-0'>
            <MDBCol md='8'>
              <MDBCardBody>
                <h3 className='titulo titulo_card'>Financiamiento y Proyectos</h3>
                <MDBCardText>
                  Encargados de dar la luz verde a los proyectos y juntar el dinero para hacer trabajos in situ posibles.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCardImage
              src={require('./resources/financiamiento.webp.jpeg')} 
              fluid
              className='img_card'/>
            </MDBCol>
          </MDBRow>
      </MDBCard>{/* Termino de card Financiamiento*/}
       
    </div>
  );
}