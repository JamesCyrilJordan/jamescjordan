import Stack from 'react-bootstrap/Stack';
import { Github, Linkedin, StackOverflow } from 'react-bootstrap-icons';

const socialPlatforms = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jamescjordan/',
    Icon: Linkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/JamesCyrilJordan',
    Icon: Github
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/2029737/jay-jordan',
    Icon: StackOverflow
  }
];

function SocialLinks({
  iconOnly = false,
  direction = 'horizontal',
  gap = 3,
  iconSize = 24,
  className = '',
  linkClassName = 'text-decoration-none',
  labelClassName = ''
}) {
  return (
    <Stack direction={direction} gap={gap} className={className}>
      {socialPlatforms.map(({ name, url, Icon }) => (
        <a
          key={name}
          className={`d-inline-flex align-items-center ${linkClassName}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <Icon size={iconSize} aria-hidden="true" focusable="false" />
          {!iconOnly && <span className={`ms-2 ${labelClassName}`}>{name}</span>}
        </a>
      ))}
    </Stack>
  );
}

export default SocialLinks;
