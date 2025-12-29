import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now.');
      }

      setStatus({ type: 'success', message: 'Thanks for reaching out. I will reply shortly!' });
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'danger', message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="contact-form">
      {status.type && <Alert variant={status.type}>{status.message}</Alert>}
      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Your name"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactMessage">
        <Form.Label>How can I help?</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={4}
          placeholder="Tell me about your project or team"
          value={formState.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;
