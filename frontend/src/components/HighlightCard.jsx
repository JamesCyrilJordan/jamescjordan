import Card from 'react-bootstrap/Card';

function HighlightCard({ title, description, impact }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-secondary">{description}</Card.Text>
        <Card.Text className="fw-semibold text-primary">{impact}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HighlightCard;
