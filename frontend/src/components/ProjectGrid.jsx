import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function ProjectGrid({ projects = [] }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((project) => (
        <Col key={project.id}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column gap-3">
              <div>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text className="text-secondary">{project.description}</Card.Text>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge bg="secondary" key={item}>
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="d-flex gap-2 mt-auto">
                {project.links.live && (
                  <Button as="a" href={project.links.live} target="_blank" rel="noreferrer" variant="primary">
                    View live
                  </Button>
                )}
                {project.links.source && (
                  <Button as="a" href={project.links.source} target="_blank" rel="noreferrer" variant="outline-secondary">
                    Source
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectGrid;
