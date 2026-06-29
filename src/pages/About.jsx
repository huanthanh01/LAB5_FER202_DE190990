import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Container className="py-5">
      <div className="card p-5 border-0 text-center" style={{ background: 'var(--surface)' }}>
        <h1 className="display-4 fw-bold mb-4" style={{ background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Online Quiz Application
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: '700px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
          Welcome to the ultimate online quiz platform. Here, you can test your knowledge, stay updated with the latest news, and challenge yourself with our interactive quizzes. We strive to provide an engaging and beautiful experience, combining sleek design with dynamic content.
        </p>
        <div className="mt-5">
          <Link to="/quiz" className="btn btn-primary btn-lg px-5 shadow">Get Started</Link>
        </div>
      </div>
    </Container>
  );
}

export default About;
