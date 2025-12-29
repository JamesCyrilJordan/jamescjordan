import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function SkillList({ title, skills }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Stack as="ul" gap={2} className="list-unstyled mb-0">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default SkillList;
