import Carousel from 'react-bootstrap/Carousel';
import './imgs/img1.jpeg'
import './CarouselCompCss.css'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item className='carousel' interval={1000}>
        <img
          className="img d-block w-100"
          src={require('./imgs/img1.jpeg')}
          alt="First slide"
        />
        <Carousel.Caption className='mid-caption'>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel' interval={500}>
        <img
          className="img d-block w-100"
          src={require('./imgs/MechoneoSocial.jpeg')}
          alt="Second slide"
        />
        <Carousel.Caption className='mid-caption'>
          <h1>Mechoneo Social 2022</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel'>
        <video
          className="video d-block w-100 img-fluid "
          src={require('./imgs/VideoSanEsteban.mp4')}
          type="video/mov"
          alt="Third slide"
          autoplay="autoplay"
          loop
          muted
        />
        <Carousel.Caption className='mid-caption'>
          <h1>San Esteban Invierno 2022</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;