import { Carousel, Row, Col, Card } from "react-bootstrap";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import menu1 from "../images/menu-01.jpg";
import menu2 from "../images/menu-02.jpg";
import menu3 from "../images/menu-03.jpg";
import menu4 from "../images/menu-04.jpg";
import menu5 from "../images/menu-05.jpg";
import menu6 from "../images/menu-06.jpg";
import menu7 from "../images/menu-07.jpg";
import menu8 from "../images/menu-08.jpg";
import "./Home.css";

const menuItems = [
  { id: 1, name: "Schnitzel", price: "$12.99", image: menu1 },
  {
    id: 2,
    name: "Mushroom and Pepper Pizza",
    price: "$8.99",
    image: menu2,
  },
  { id: 3, name: "Hot Lemon Tea", price: "$7.50", image: menu3 },
  {
    id: 4,
    name: "Salami Platter with Boiled Eggs",
    price: "$14.00",
    image: menu4,
  },
  { id: 5, name: "Radish Toast", price: "$18.50", image: menu5 },
  { id: 6, name: "Beef and Spinach Pizza", price: "$22.00", image: menu6 },
  { id: 7, name: "Chirashi Don", price: "$6.99", image: menu7 },
  { id: 8, name: "Beef Cheeseburger", price: "$5.50", image: menu8 },
];

function Home() {
  return (
    <div>
      <h2 className="mb-4">Home</h2>
      <Carousel
        className="mb-5 shadow-lg"
        style={{ borderRadius: "20px", overflow: "hidden" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Welcome to QuizApp</h3>
            <p>The best place to test your knowledge.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Learn New Things</h3>
            <p>Read our latest news and updates.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Join the Community</h3>
            <p>Contact us for more information.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="py-4">
        <h2 className="text-center mb-5 fw-bold">Our Special Menu</h2>
        <Row className="g-4">
          {menuItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm border-0 text-center menu-card">
                <div
                  className="overflow-hidden rounded-top bg-light d-flex align-items-center justify-content-center"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="menu-img"
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="fs-5 mb-2">{item.name}</Card.Title>
                  <Card.Text className="mb-0">
                    <span className="bg-primary text-white px-3 py-1 rounded-pill fw-bold shadow-sm" style={{ fontSize: '0.95rem' }}>
                      {item.price}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
