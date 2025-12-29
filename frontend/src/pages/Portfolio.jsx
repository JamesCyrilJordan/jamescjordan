import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import ProjectGrid from '../components/ProjectGrid';
import { staticProjects } from '../data/portfolio';
import { useApiData } from '../hooks/useApiData';

function Portfolio() {
  const { data: projects, loading } = useApiData('/api/projects', staticProjects);

  return (
    <Stack gap={3}>
      <div className="section-heading">
        <h1>Portfolio</h1>
        <p className="text-secondary">Selected work that blends leadership, product thinking, and modern engineering.</p>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center py-4">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading projects</span>
          </Spinner>
        </div>
      ) : (
        <ProjectGrid projects={projects} />
      )}
    </Stack>
  );
}

export default Portfolio;
