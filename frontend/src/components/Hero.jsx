import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import { LinkContainer } from 'react-router-bootstrap';

function Hero() {
  return (
    <section className="hero">
      <Badge bg="primary" className="mb-3 text-uppercase">Engineering Leader</Badge>
      <h1 className="display-5 fw-bold">Designing resilient products and energized teams.</h1>
      <p className="lead text-secondary">
        I build customer-first experiences, mentor engineers, and ship reliable systems with React, Node, and cloud-native workflows.
      </p>
      <Stack direction="horizontal" gap={3} className="flex-wrap">
        <LinkContainer to="/contact">
          <Button variant="primary" size="lg">Book time</Button>
        </LinkContainer>
        <LinkContainer to="/portfolio">
          <Button variant="outline-light" size="lg">View work</Button>
        </LinkContainer>
      </Stack>
    </section>
  );
}

export default Hero;
