import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="page">
      <div className="section-heading">
        <h1>Contact</h1>
        <p className="text-secondary">Tell me about your product, team, or idea. I respond within one business day.</p>
      </div>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Ways to collaborate</Card.Title>
              <Card.Text>
                Fractional engineering leadership, product delivery coaching, and hands-on React/Node builds focused on accessibility and reliability.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Roadmap and architecture reviews</ListGroup.Item>
                <ListGroup.Item>Delivery frameworks and playbooks</ListGroup.Item>
                <ListGroup.Item>Design system and frontend platform builds</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Send a note</Card.Title>
              <ContactForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
