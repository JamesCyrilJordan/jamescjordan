import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Hero from '../components/Hero';
import HighlightCard from '../components/HighlightCard';
import { useApiData } from '../hooks/useApiData';

const fallbackHighlights = [
  {
    title: 'Platform modernization',
    description:
      'Led a cross-functional effort to re-platform legacy apps onto a modern React + Node stack, improving deployment cadence and availability.',
    impact: '70% faster release cycle and 40% reduction in incident volume.'
  },
  {
    title: 'Developer experience uplift',
    description:
      'Delivered reusable CI/CD templates, linting standards, and preview environments to accelerate feature delivery.',
    impact: 'Cut onboarding time in half for new engineers.'
  },
  {
    title: 'Customer journey redesign',
    description:
      'Partnered with design to rebuild critical customer flows with accessibility and conversion in mind.',
    impact: 'Delivered a 15% uplift in conversion and reduced support tickets.'
  }
];

function Home() {
  const { data: highlights } = useApiData('/api/highlights', fallbackHighlights);

  return (
    <Stack gap={5}>
      <Hero />
      <section>
        <div className="section-heading">
          <h2>Recent wins</h2>
          <p className="text-secondary">Impact stories across product leadership, delivery, and collaboration.</p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {highlights.map((item) => (
            <Col key={item.title}>
              <HighlightCard {...item} />
            </Col>
          ))}
        </Row>
      </section>
      <section>
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>How I lead</Card.Title>
                <Card.Text>
                  I blend product intuition with technical rigor—pairing outcome-driven roadmaps with pragmatic architecture, observability, and empathy for
                  the humans doing the work.
                </Card.Text>
                <ul>
                  <li>Shape roadmaps that ladder up to business and customer outcomes.</li>
                  <li>Unblock teams with clear interfaces, guardrails, and documentation.</li>
                  <li>Champion accessibility and performance so experiences delight everyone.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm bg-primary text-light">
              <Card.Body>
                <Card.Title>Availability</Card.Title>
                <Card.Text>
                  I work with growth-minded teams to ship impactful experiences, mentor engineers, and build sustainable engineering practices.
                </Card.Text>
                <Card.Text className="fw-semibold">Remote-friendly • US Eastern Time • Open to fractional leadership</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Stack>
  );
}

export default Home;
