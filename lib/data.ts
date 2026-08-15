export const profile = {
  name: "Dhanush S",
  role: "Software Developer",
  location: "Trichy, Tamil Nadu, India",
  email: "dhanushs4827@gmail.com",
  github: "https://github.com/dhanush3727",
  linkedin: "https://www.linkedin.com/in/dhanush15/",
  resumeUrl: "/resume/Resume.pdf",
  summary:
    "Software Developer with 2 years of experience building enterprise web applications and SaaS platforms using React, Next.js, TypeScript, NestJS, PostgreSQL, and Prisma. Experienced in role-based applications, authentication, REST APIs, complex business workflows, reusable frontend architecture, and scalable applications.",
};

export const techStack = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT", "RBAC"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose"],
  },
  {
    category: "State Management",
    items: ["TanStack Query", "Zustand", "React Context API"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "CI/CD"],
  },
];

export const experience = {
  company: "Monitpro Solutions Pvt. Ltd.",
  title: "Software Developer",
  period: "October 2024 – Present",
  achievements: [
    "Engineered and maintained 3+ enterprise web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
    "Designed reusable frontend architecture using TanStack Query, Zustand, shadcn/ui, and custom hooks.",
    "Implemented role-based access control, dashboards, and secure REST API integrations.",
    "Optimized data fetching and server-state management for better application performance.",
    "Worked on complex business workflows involving equipment maintenance, engineering requests, contractor management, and facility asset management.",
  ],
};

// ─────────────────────────────────────────────────────────────
// TODO: swap these two placeholders for the real Maintix links.
// They currently point at the GitHub profile so nothing is broken.
// ─────────────────────────────────────────────────────────────
export const MAINTIX_LIVE_URL = "https://maintix-copy.vercel.app/";
export const MAINTIX_REPO_URL = "https://github.com/dhanush3727/maintix_copy";

export type Project = {
  slug: string;
  name: string;
  label: string;
  tech: string[];
  description: string;
  highlight: string;
  featured?: boolean;
  bullets?: string[];
  /** Anchor/href for the case-study CTA. Company projects have none. */
  caseStudyHref?: string;
  /** Deployed app. Button is hidden when omitted. */
  liveUrl?: string;
  /** Public source repo. Button is hidden when omitted. */
  repoUrl?: string;
  /** Expanded detail, shown in a disclosure on the card. */
  context?: string;
  contributions?: string[];
  technical?: string[];
};

export const projects: Project[] = [
  {
    slug: "maintix",
    name: "Maintix",
    label: "Own Project · Full Stack · SaaS",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
    ],
    description:
      "A multi-tenant equipment maintenance management SaaS platform designed to manage industrial maintenance operations end to end.",
    highlight: "Supports isolated workspaces for 10+ organizations.",
    liveUrl: MAINTIX_LIVE_URL,
    repoUrl: MAINTIX_REPO_URL,
    featured: true,
    context:
      "Industrial maintenance is often run manually or across disconnected tools, leaving preventive schedules, breakdown reports, checklists, and technician assignments in separate places. Maintix brings them into one platform, built multi-tenant so each organization operates in an isolated workspace with its own users, factories, and access rules.",
    contributions: [
      "Built the full stack independently — Next.js and TypeScript on the frontend, a NestJS REST API on the backend, and PostgreSQL accessed through Prisma ORM.",
      "Designed the multi-tenant data model so each organization's equipment, users, and maintenance history stay isolated within a single deployment.",
      "Implemented JWT authentication and role-based access control, with access scoped further to specific factories for multi-site operations.",
      "Built the maintenance modules end to end: equipment, preventive and breakdown maintenance, checklists, scheduling, tasks, notifications, dashboards, and reports.",
    ],
    technical: [
      "Scoped every data access path by organization at the API and database layer to prevent cross-tenant leaks.",
      "Split state ownership — TanStack Query for server state, caching, and revalidation; Zustand for local UI state.",
      "Abstracted shared UI primitives and custom hooks (data fetching, forms, role checks) so new modules could be added without duplicating logic.",
      "Handled large equipment and task lists with paginated, cached queries instead of loading full datasets.",
    ],
  },
  {
    slug: "mauris",
    name: "MAURIS",
    label: "Company Project · Enterprise",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
    ],
    description:
      "Equipment Maintenance Management System designed to manage preventive and breakdown maintenance workflows for industrial assets.",
    highlight: "Supports workflows for 1000+ industrial assets.",
    bullets: [
      "Reduced redundant API network traffic by ~40% through TanStack Query caching and optimized data fetching.",
    ],
    context:
      "Maintenance teams needed a single system to run preventive maintenance schedules and respond to equipment breakdowns across a large industrial asset base, rather than tracking the two separately.",
    contributions: [
      "Built the platform frontend in Next.js, TypeScript, and Tailwind CSS, covering both preventive and breakdown maintenance workflows.",
      "Implemented technician assignment modules so maintenance tasks route to the right technician and are tracked through to completion.",
      "Built maintenance dashboards surfacing equipment status and task state across the asset base.",
    ],
    technical: [
      "Adopted TanStack Query for server state — caching and revalidating REST requests instead of refetching on every view.",
      "Cut redundant API network traffic by ~40% via query caching and optimized data fetching, improving dashboard response times.",
      "Kept Zustand for local UI state and TanStack Query for server state, avoiding two competing sources of truth.",
    ],
  },
  {
    slug: "ejr",
    name: "EJR",
    label: "Company Project · Enterprise",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "React Context API"],
    description:
      "Engineering Job Request System that manages engineering request creation, assignment, approval, and tracking across different user roles.",
    highlight: "Role-based workflow management.",
    context:
      "Engineering job requests pass through several roles — creation, assignment, approval, and tracking — and the request state has to stay consistent as it moves between them.",
    contributions: [
      "Engineered the role-based request workflow so each user can create, assign, approve, and track engineering job requests according to their role.",
      "Built the request lifecycle UI covering every stage of the workflow.",
    ],
    technical: [
      "Managed cross-cutting workflow and role state with the React Context API.",
      "Integrated REST APIs to manage request data and keep workflow states consistent across different user roles.",
    ],
  },
  {
    slug: "crms",
    name: "CRMS",
    label: "Company Project · Enterprise",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    description:
      "Contractor Resource Management System supporting multiple business workflows.",
    highlight:
      "Developed the E-Care module for managing facility assets such as air conditioners, fans, and switches, including maintenance request tracking and scheduling.",
    context:
      "Contractor resource management spans several distinct business workflows, including keeping facility assets maintained and serviceable.",
    contributions: [
      "Collaborated with the development team to extend the CRMS platform with responsive frontend pages and UI components.",
      "Designed and delivered the E-Care module for managing facility assets such as air conditioners, fans, and switches.",
      "Built dedicated workflows for maintenance request tracking and scheduling inside E-Care.",
    ],
    technical: [
      "Built reusable React components styled with Tailwind CSS to keep the UI consistent across multiple business workflows.",
      "Implemented responsive layouts across the platform's pages.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA) — Pursuing",
    institution: "Bharathidasan University",
    period: "2025 – Present (Distance Education)",
  },
  {
    degree: "Bachelor of Science (B.Sc.) – Physics",
    institution: "Bishop Heber College",
    period: "2021 – 2024",
  },
];

export const engineeringApproach = [
  {
    title: "Reusable Architecture",
    description:
      "Build reusable components, hooks, utilities, and API abstractions rather than duplicating logic.",
  },
  {
    title: "Type Safety",
    description:
      "Use TypeScript with strict typing across frontend and backend code.",
  },
  {
    title: "Server State",
    description:
      "Use TanStack Query for API state, caching, synchronization, and data fetching.",
  },
  {
    title: "Secure Applications",
    description:
      "Implement authentication, authorization, RBAC, JWT-based security, and tenant-aware access control.",
  },
  {
    title: "Maintainable Code",
    description:
      "Prefer modular architecture, separation of concerns, reusable components, and clear feature boundaries.",
  },
  {
    title: "Performance",
    description:
      "Optimize rendering, API requests, caching, pagination, and unnecessary network traffic.",
  },
];

export const maintixFeatures = [
  "Equipment",
  "Preventive Maintenance",
  "Breakdown Maintenance",
  "Checklists",
  "Schedules",
  "Tasks",
  "Notifications",
  "Dashboard",
  "Reports",
  "Organization Management",
];

export const maintixChallenges = [
  {
    title: "Tenant Isolation",
    description:
      "Scoping every query and mutation to the correct organization so data from one tenant is never reachable from another.",
  },
  {
    title: "Role-Based Permissions",
    description:
      "Modeling granular RBAC across organizations, factories, and users so access reflects real operational hierarchies.",
  },
  {
    title: "Complex Maintenance Workflows",
    description:
      "Coordinating preventive and breakdown maintenance, checklists, and scheduling as interdependent workflows rather than isolated features.",
  },
  {
    title: "API State Synchronization",
    description:
      "Keeping dashboards and lists in sync with server state after mutations without over-fetching or stale data.",
  },
  {
    title: "Pagination & Data Fetching",
    description:
      "Handling large equipment and task lists efficiently with paginated, cached, and revalidated queries.",
  },
  {
    title: "Authentication & Token Handling",
    description:
      "Managing secure authentication and token lifecycles across a multi-tenant, role-based system.",
  },
  {
    title: "Reusable Frontend Architecture",
    description:
      "Structuring components, hooks, and API abstractions so new modules can be added without duplicating logic.",
  },
];

export const maintixDecisions = [
  {
    title: "Why multi-tenancy",
    description:
      "Organizations needed fully isolated workspaces so each company's equipment, users, and maintenance data stay separate within a single deployment.",
  },
  {
    title: "Tenant isolation",
    description:
      "Every data access path is scoped by organization at the API and database layer, preventing cross-tenant data leaks.",
  },
  {
    title: "Role-based access control",
    description:
      "Permissions are modeled around roles so users only see and act on the equipment, requests, and modules relevant to them.",
  },
  {
    title: "Factory-level access",
    description:
      "Within an organization, access can be further scoped to specific factories, supporting multi-site operations.",
  },
  {
    title: "Authentication",
    description:
      "JWT-based authentication secures API access and ties every request to an authenticated, tenant-aware user.",
  },
  {
    title: "Frontend state management",
    description:
      "Zustand handles local/UI state while TanStack Query owns server state, caching, and synchronization.",
  },
  {
    title: "API caching",
    description:
      "TanStack Query caches and revalidates RESTful requests to reduce redundant network calls and keep the UI responsive.",
  },
  {
    title: "Reusable components & hooks",
    description:
      "Shared UI primitives and custom hooks abstract common patterns like data fetching, forms, and role checks across modules.",
  },
];
