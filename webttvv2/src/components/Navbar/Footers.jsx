import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footers() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{marginTop:'4rem'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' >
          <span>Visita nuestras redes sociales:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/ttvvuai/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.instagram.com/ttvv_uai/?hl=es' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/trabajos-voluntarios-universidad-adolfo-ib%C3%A1%C3%B1ez' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="" className="me-3" />
                Trabajos Voluntarios UAI
              </h6>
              <p>
                ¡Porque nos gusta ayudar!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Secciones</h6>
              <p>
                <a href='/' className='text-reset'>
                  Inicio
                </a>
              </p>
              <p>
                <a href='/Departamentos' className='text-reset'>
                  Departamentos
                </a>
              </p>
              <p>
                <a href='/InSitu' className='text-reset'>
                  Trabajos in Situ
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Nuestras redes</h6>
              <p>
                <a href='https://www.facebook.com/ttvvuai/' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/company/trabajos-voluntarios-universidad-adolfo-ib%C3%A1%C3%B1ez' className='text-reset'>
                  Linkedn
                </a>
              </p>
              <p>
                <a href='https://www.instagram.com/ttvv_uai/?hl=es' className='text-reset'>
                  Instagram
                </a>
              </p>             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Diag. Las Torres 2640, 7941169 Santiago, Peñalolén, Región Metropolitana
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                departamentodifusionttvv@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +56 9 9509 1068
              </p>           
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020-2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.linkedin.com/company/trabajos-voluntarios-universidad-adolfo-ib%C3%A1%C3%B1ez'>
          TTVV UAI
        </a>
      </div>
    </MDBFooter>
  );
}