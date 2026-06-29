import { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import './Quiz.css';

const quizQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Makeup Language"],
    answer: 0
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
    answer: 2
  },
  {
    id: 3,
    question: "What does JS stand for?",
    options: ["Java Source", "JavaScript", "Jumbo Script", "Just Script"],
    answer: 1
  },
  {
    id: 4,
    question: "Which of the following is a React Hook?",
    options: ["useData", "useFetch", "useState", "useComponent"],
    answer: 2
  },
  {
    id: 5,
    question: "In React, what is used to pass data to a component from outside?",
    options: ["setState", "props", "propTypes", "Render with arguments"],
    answer: 1
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Container style={{ maxWidth: '800px' }}>
      <h2 className="mb-4">Quiz</h2>
      {showResult ? (
        <Card className="text-center shadow border-0">
          <Card.Body className="p-5">
            <Card.Title className="display-5">Quiz Completed!</Card.Title>
            <Card.Text className="display-6 mt-4 text-primary">
              Your Score: {score} / {quizQuestions.length}
            </Card.Text>
            <Button variant="primary" size="lg" onClick={() => window.location.reload()} className="mt-4 px-5">
              Restart Quiz
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card className="shadow border-0">
          <Card.Header className="bg-primary text-white py-3">
            <h5 className="mb-0 text-white">Question {currentQuestion + 1} of {quizQuestions.length}</h5>
          </Card.Header>
          <Card.Body className="p-4">
            <Card.Title className="mb-4 fs-4">{quizQuestions[currentQuestion].question}</Card.Title>
            <Form>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div 
                  key={index} 
                  className={`mb-3 p-3 rounded custom-radio ${selectedOption === index ? 'selected-radio' : ''}`}
                  onClick={() => handleOptionChange(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Form.Check 
                    type="radio"
                    id={`option-${index}`}
                    label={option}
                    name="quizOption"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionChange(index)}
                    className="m-0"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              ))}
            </Form>
            <div className="d-flex justify-content-end mt-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleNext} 
                disabled={selectedOption === null}
                className="px-5"
              >
                {currentQuestion + 1 === quizQuestions.length ? 'Submit' : 'Next'}
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Quiz;
