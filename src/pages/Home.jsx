import { Carousel } from 'react-bootstrap';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      <h2 className="mb-4">Home</h2>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Welcome to QuizApp</h3>
            <p>The best place to test your knowledge.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Learn New Things</h3>
            <p>Read our latest news and updates.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <Carousel.Caption>
            <h3>Join the Community</h3>
            <p>Contact us for more information.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
