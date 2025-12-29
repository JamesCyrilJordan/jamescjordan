export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' }
];

export const staticProjects = [
  {
    id: 'portfolio-platform',
    name: 'Portfolio Platform',
    description: 'A React + Express showcase for engineering leadership and delivery craftsmanship.',
    tech: ['React', 'Express', 'Vite', 'Docker Compose'],
    links: {
      live: 'https://jamescjordan.com',
      source: 'https://github.com/jamescjordan'
    }
  },
  {
    id: 'collaboration-toolkit',
    name: 'Collaboration Toolkit',
    description: 'Real-time collaboration patterns built with WebSockets, optimistic updates, and thoughtful state management.',
    tech: ['Node', 'React', 'WebSockets'],
    links: {
      source: 'https://github.com/jamescjordan/toolkit'
    }
  }
];

export const skillSections = [
  {
    title: 'Leadership',
    skills: ['Delivery planning', 'Mentorship', 'Hiring & onboarding', 'Stakeholder alignment']
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Design systems', 'Performance tuning']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'Observability']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'CI/CD', 'IaC collaboration', 'Monitoring & alerting']
  }
];
