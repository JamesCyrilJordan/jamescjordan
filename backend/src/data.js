const profile = {
  name: 'James C. Jordan',
  tagline: 'Software engineering leader designing resilient, scalable experiences.',
  summary:
    'I lead teams to ship delightful, customer-first products through thoughtful systems design, modern JavaScript/TypeScript stacks, and collaborative leadership.',
  locations: ['Atlanta, GA', 'Remote-friendly'],
  contact: {
    email: 'hello@jamescjordan.com',
    github: 'https://github.com/jamescjordan',
    linkedin: 'https://www.linkedin.com/in/jamescjordan/'
  },
  skills: {
    leadership: ['Team building & mentorship', 'Delivery planning', 'Executive storytelling'],
    frontend: ['React', 'TypeScript', 'Design systems', 'Accessibility'],
    backend: ['Node.js', 'Express', 'REST APIs', 'Observability'],
    devops: ['Docker', 'CI/CD', 'Cloud architecture']
  }
};

const highlights = [
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

const projects = [
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
  },
  {
    id: 'delivery-playbook',
    name: 'Delivery Playbook',
    description: 'Guides and automations that help teams launch with confidence, from project kickoffs to observability dashboards.',
    tech: ['Markdown', 'GitHub Actions', 'Dashboards'],
    links: {
      source: 'https://github.com/jamescjordan/playbook'
    }
  }
];

module.exports = { profile, highlights, projects };
