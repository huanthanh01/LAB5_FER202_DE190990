import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "info", message: "Sending..." });
    try {
      const response = await fetch("http://localhost:3001/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! Your message has been saved.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "danger", message: "Failed to send message." });
      }
    } catch (error) {
      setStatus({
        type: "danger",
        message: "Network error. Make sure json-server is running.",
      });
    }
  };

  return (
    <Container style={{ maxWidth: "600px" }} className="py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1">Get in Touch</h2>
        <p className="fs-5" style={{ color: "var(--text-muted)" }}>
          We'd love to hear from you. Please fill out the form below.
        </p>
      </div>
      {status.message && (
        <Alert variant={status.type} className="mb-4">
          {status.message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className="card p-5 border-0">
        <Form.Group className="mb-4" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 py-3 mt-3 fs-5"
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
