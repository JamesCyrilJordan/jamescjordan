import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Stack direction="horizontal" gap={3} className="justify-content-between flex-wrap">
          <div>
            <strong>James C. Jordan</strong>
            <div>Building thoughtful products with modern coding practices.</div>
          </div>
          <SocialLinks
            iconOnly
            className="text-light"
            linkClassName="text-light"
          />
        </Stack>
      </Container>
    </footer>
  );
}

export default Footer;
