import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { Github, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Stack direction="horizontal" gap={3} className="justify-content-between flex-wrap">
          <div>
            <strong>James C. Jordan</strong>
            <div>Building thoughtful products with modern JavaScript stacks.</div>
          </div>
          <Stack direction="horizontal" gap={3}>
            <a className="text-light" href="https://github.com/jamescjordan" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a className="text-light" href="https://www.linkedin.com/in/jamescjordan/" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}

export default Footer;
