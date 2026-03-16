export const profile = {
  name: 'Tanil Dev',
  title: 'Frontend Engineer & Creative Technologist',
  email: 'tanil.dev@gmail.com',
  location: 'Remote / India',
  githubUsername: 'octocat',
  bio: 'I build fast, human-centric products where aesthetics and engineering carry equal weight. My focus is performant React experiences, thoughtful motion systems, and design execution that feels intentional across every breakpoint.',
  technologies: [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
  ],
  socialLinks: {
    github: 'https://github.com/octocat',
    linkedin: 'https://www.linkedin.com',
    x: 'https://x.com',
  },
  resumeLink: 'https://example.com/resume.pdf',
}

export const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/github', label: 'GitHub' },
  { path: '/journey', label: 'Journey' },
  { path: '/contact', label: 'Contact' },
]

export const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Prisma'],
  },
  {
    category: 'Tools',
    skills: ['GitHub Actions', 'Docker', 'Vite', 'Figma', 'Jest', 'Playwright'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Neon Commerce',
    description:
      'A conversion-focused storefront with personalized recommendations, checkout optimization, and analytics dashboards.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/octocat',
    live: 'https://example.com',
    details:
      'Built a full purchase lifecycle with secure payment handling and event-driven analytics. Improved LCP by 32% after image and script optimizations.',
  },
  {
    id: 2,
    title: 'Velocity Dashboard',
    description:
      'A real-time analytics suite for distributed teams with custom data visualizations and role-based access.',
    image:
      'https://images.unsplash.com/photo-1551281044-8a5c7b5f11d7?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'D3', 'Express', 'Redis'],
    github: 'https://github.com/octocat',
    live: 'https://example.com',
    details:
      'Implemented streaming updates through websockets and designed responsive chart components for complex KPI analysis.',
  },
  {
    id: 3,
    title: 'Studio Portfolio CMS',
    description:
      'A content management platform for creative agencies with visual editors and modular page composition.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    github: 'https://github.com/octocat',
    live: 'https://example.com',
    details:
      'Created drag-and-drop block editing and robust media workflows, reducing publishing time by 45%.',
  },
]

export const timeline = [
  {
    year: '2025 - Present',
    title: 'Senior Frontend Engineer',
    place: 'Freelance / Product Teams',
    description:
      'Leading UI architecture and design systems for SaaS and fintech clients. Shipping performant component libraries and motion-first interfaces.',
  },
  {
    year: '2023 - 2025',
    title: 'Frontend Engineer',
    place: 'Nimbus Labs',
    description:
      'Built dashboard platforms and internal tooling with React, improved Core Web Vitals, and mentored junior developers on design implementation.',
  },
  {
    year: '2019 - 2023',
    title: 'B.Tech in Computer Science',
    place: 'Tech University',
    description:
      'Focused on software engineering, interactive graphics, and human-computer interaction while building startup prototypes and hackathon projects.',
  },
]

export const aboutPageMock = {
  summary: [
    'I design and engineer product interfaces that balance clarity, performance, and emotional impact. My workflow starts from user intent, then translates into a robust component system with measurable UX outcomes.',
    'Across SaaS, e-commerce, and B2B dashboards, I have led frontend architecture decisions, collaborated with design teams on system-level consistency, and improved delivery velocity through reusable UI primitives.',
  ],
  principles: [
    {
      title: 'Design with intent',
      detail: 'Every visual decision should communicate hierarchy, purpose, and confidence.',
    },
    {
      title: 'Measure what matters',
      detail: 'I track UX and performance metrics to validate design and engineering choices.',
    },
    {
      title: 'Build systems, not pages',
      detail: 'Reusable components and standards reduce entropy as products evolve.',
    },
  ],
  achievements: [
    'Reduced average dashboard page load time from 3.9s to 2.4s through granular code splitting and rendering optimizations.',
    'Led migration from ad-hoc styling to a token-based design system used by 5+ product squads.',
    'Improved onboarding completion by 18% after redesigning interaction flows and feedback states.',
  ],
}

export const skillsPageMock = {
  capabilities: [
    {
      domain: 'Frontend Architecture',
      details: 'Component boundaries, state orchestration, composable APIs, and accessibility-first implementation.',
      tools: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Zustand'],
    },
    {
      domain: 'Motion & Interaction',
      details: 'Meaningful animation systems, gesture patterns, and GPU-conscious transitions.',
      tools: ['Framer Motion', 'React Spring', 'GSAP', 'Lottie'],
    },
    {
      domain: 'Backend Collaboration',
      details: 'API contract design, pagination strategies, caching, and observability for frontend reliability.',
      tools: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
    },
  ],
  certifications: ['Meta Front-End Professional Certificate', 'Google UX Design Foundations', 'AWS Cloud Practitioner'],
}

export const projectsPageMock = [
  {
    title: 'FlowOps Platform',
    challenge: 'Operations team required unified workflows across fragmented internal tools.',
    solution: 'Built a workflow builder with modular widgets, role policies, and event automation.',
    impact: ['43% faster incident triage', '29% reduction in manual task switching', '4.7/5 internal satisfaction score'],
  },
  {
    title: 'Atlas Learning Hub',
    challenge: 'Low learner retention due to poor progress visibility and weak content discovery.',
    solution: 'Redesigned navigation and adaptive content surfaces with a personalized recommendation layer.',
    impact: ['22% increase in weekly active learners', '31% increase in lesson completion', '18% uplift in subscription renewal'],
  },
  {
    title: 'Pulse Commerce Suite',
    challenge: 'Merchants needed fast analytics and control over campaign performance.',
    solution: 'Shipped analytics cockpit with real-time charts, reusable reporting templates, and smart alerts.',
    impact: ['2x faster campaign decisions', '37% increase in dashboard engagement', '12% improvement in checkout conversion'],
  },
]

export const githubPageMock = {
  highlights: [
    'Contributed to open-source UI primitives with a focus on accessibility and keyboard interaction.',
    'Maintained internal starter kits to standardize frontend quality across teams.',
    'Published architecture notes and implementation examples for junior developers.',
  ],
  repositories: [
    {
      name: 'motion-ui-lab',
      description: 'A collection of production-ready interaction patterns and animation recipes.',
      stars: 312,
      language: 'TypeScript',
    },
    {
      name: 'react-patterns-playbook',
      description: 'Reference implementation of scalable React patterns for large teams.',
      stars: 228,
      language: 'JavaScript',
    },
    {
      name: 'web-vitals-tracker',
      description: 'Lightweight tooling to monitor and compare Core Web Vitals in real projects.',
      stars: 147,
      language: 'TypeScript',
    },
  ],
}

export const journeyPageMock = {
  milestones: [
    {
      title: 'Design System Lead',
      period: '2025',
      detail: 'Defined component governance, design tokens, and release workflows for cross-team adoption.',
    },
    {
      title: 'Frontend Platform Engineer',
      period: '2024',
      detail: 'Established build tooling standards, CI checks, and quality gates to reduce regressions.',
    },
    {
      title: 'Interactive Web Developer',
      period: '2022',
      detail: 'Focused on motion-rich marketing experiences and high-performance landing pages.',
    },
  ],
  educationNotes: [
    'Capstone project on real-time collaborative interfaces using WebSockets.',
    'Research focus on visual cognition and interface readability.',
    'Mentored student teams during national-level hackathons.',
  ],
}

export const contactPageMock = {
  services: [
    'Frontend architecture and implementation',
    'Design system planning and execution',
    'UI/UX revamp for existing products',
    'Performance and accessibility optimization',
  ],
  faqs: [
    {
      q: 'What project types do you take?',
      a: 'I work on SaaS products, startup MVPs, portfolio websites, and enterprise dashboards.',
    },
    {
      q: 'Do you support ongoing maintenance?',
      a: 'Yes. I offer flexible retainers for iteration, optimization, and feature development.',
    },
    {
      q: 'How quickly can we start?',
      a: 'Usually within 1 to 2 weeks depending on current commitments and scope fit.',
    },
  ],
}
