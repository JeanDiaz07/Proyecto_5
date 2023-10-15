
import Carousel from 'react-bootstrap/Carousel';

export const Carrusel = () => {
return (
    <Carousel fade>
    <Carousel.Item>
    
        
        <img src={adidas} alt="" />
        
    </Carousel.Item>
    <Carousel.Item>
        <img src={jordan} alt="" />
        
    </Carousel.Item>
    <Carousel.Item>
        
<img src={collage} alt="" />

      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;