import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SkillList from '../components/SkillList';
import { skillSections } from '../data/portfolio';

function Experience() {
  return (
    <div className="page">
      <div className="section-heading">
        <h1>Experience</h1>
        <p className="text-secondary">Product-minded engineering leadership grounded in modern JavaScript stacks.</p>
      </div>
      <Row xs={1} md={2} className="g-4 mb-4">
        {skillSections.map((section) => (
          <Col key={section.title}>
            <SkillList title={section.title} skills={section.skills} />
          </Col>
        ))}
      </Row>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>How teams describe me</Card.Title>
              <Card.Text>
                I listen first, then design clear execution paths. I pair mentoring with crisp delivery expectations so teams feel supported and accountable.
              </Card.Text>
              <ul>
                <li>Translate strategy into roadmaps with measurable outcomes.</li>
                <li>Coach engineers through architecture decisions and tradeoffs.</li>
                <li>Partner with design and product to ship accessible, performant experiences.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>What I love building</Card.Title>
              <Card.Text>
                Frontend platforms, design systems, customer journeys, and the tooling that lets teams ship them fast—linting, previews, observability, and
                resilient pipelines.
              </Card.Text>
              <Card.Text className="fw-semibold">Let&apos;s design the next release together.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Experience;
