import type {
  ProjectData,
  Achievement,
  SkillCategory,
  LeadershipRole,
  EducationInfo,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Anshika Agarwal',
  role: 'Software Engineer & Full-Stack Developer',
  tagline: 'Building resilient full-stack systems, real-time architectures, and thoughtful digital applications.',
  university: 'Amity University Madhya Pradesh, Gwalior',
  degree: 'B.Tech in Computer Science and Engineering',
  gradYear: '2024 – 2028',
  status: 'Undergraduate Student & ACC Coordinator',
  location: 'Gwalior, Madhya Pradesh, India',
  email: 'anshika.agarwal.dev@gmail.com',
  github: 'https://github.com/anshikaagarwal',
  linkedin: 'https://linkedin.com/in/anshika-agarwal',
  resumeUrl: '/Anshika_Agarwal_Resume.pdf',
  bio: `I am a Computer Science undergraduate focused on full-stack web engineering, real-time architectures, and applied systems. My work spans government-grade queue dispatch systems (Gatimaan), agricultural workflow platforms (KrishiLink), and emergency safety telemetry initiatives (NaariShield). As coordinator of the Amity Coding Club, I organize hands-on technical workshops and mentor student peers.`,
  careerGoals: [
    'Software Engineering Internships (Summer & Fall)',
    'Full-Stack Systems & Distributed Web Services',
    'Applied AI / ML & Real-Time Architectures',
    'Open-Source Engineering & High-Impact Hackathons',
  ],
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'naarishield',
    title: 'NAARISHIELD',
    subtitle: "Women's Safety & Emergency Telemetry Initiative",
    category: 'Safety Platform',
    tagline: "A technology-driven initiative focused on women's safety and empowerment.",
    brief: "A technology-driven initiative focused on women's safety and empowerment.",
    featured: true,
    awardBadge: 'Safety System',
    githubUrl: 'https://github.com/anshikaagarwal/naarishield',
    liveUrl: '',
    demoNote: 'Hardware & telemetry prototype testbed',
    problemStatement:
      'In high-stress physical safety incidents, individuals need reliable, immediate distress signaling and location telemetry without navigating complex smartphone interfaces.',
    targetAudience:
      'Women navigating transit corridors, campus perimeters, or isolated environments requiring one-touch emergency activation.',
    systemArchitecture: {
      summary:
        'A hybrid telemetry and dispatch pipeline linking physical sensor triggers with cloud event dispatchers and emergency contact channels.',
      diagramType: 'iot-telemetry',
      layers: [
        {
          name: 'Distress Trigger Layer',
          badge: 'Embedded Hardware & Mobile Trigger',
          description: 'Tactile interrupt button and motion threshold sensor triggering immediate distress state.',
          technologies: ['Arduino C++', 'ADXL345', 'Interrupt Routines'],
          keyDetails: [
            'Low-latency tactile button hooked to hardware interrupt pin',
            'ADXL345 3-axis accelerometer detecting sudden abnormal impact vectors',
            'Minimal-friction mobile quick-action fallback',
          ],
        },
        {
          name: 'Wireless Gateway & Positioning',
          badge: 'ESP8266 + GSM / GPS Module',
          description: 'Satellite coordinate acquisition and multi-channel cellular/Wi-Fi telemetry dispatch.',
          technologies: ['ESP8266 Wi-Fi', 'SIM800L GSM', 'NMEA GPS Parsing'],
          keyDetails: [
            'GPS receiver decoding $GPGGA sentences for real-time lat/long coordinates',
            'Wi-Fi HTTP transmission with automated GSM SMS fallback upon network drop',
          ],
        },
        {
          name: 'Cloud Telemetry & Alert Gateway',
          badge: 'Node.js + Express Dispatcher',
          description: 'Authenticated ingestion endpoint logging incident packets and cascading alerts.',
          technologies: ['Node.js', 'Express.js', 'REST APIs', 'Notification Engine'],
          keyDetails: [
            'Payload validation and rate-limiting to prevent duplicate alerts',
            'Automated emergency contact alert dispatch with live incident location coordinates',
          ],
        },
        {
          name: 'Incident Record & Persistence',
          badge: 'Encrypted Ledger / Database',
          description: 'Secure timestamped incident logging for accountability and post-event verification.',
          technologies: ['PostgreSQL', 'Data Encryption', 'Audit Logging'],
          keyDetails: [
            'Encrypted event timestamps and coordinate trail persistence',
            'Strict access controls protecting sensitive incident disclosures',
          ],
        },
      ],
      dataFlowSteps: [
        'User triggers tactile distress button or accelerometer records abnormal impact',
        'Hardware node queries GPS module for high-precision satellite coordinates',
        'ESP8266 transmits authenticated telemetry packet to Node.js backend over Wi-Fi',
        'SIM800L dispatches fallback SMS if internet connectivity is unavailable',
        'Backend initiates automated emergency contact cascade with tracking coordinates',
      ],
    },
    technologies: [
      { name: 'Arduino C++', category: 'Hardware/IoT', role: 'Embedded firmware and hardware interrupt handling' },
      { name: 'ESP8266', category: 'Hardware/IoT', role: 'Wi-Fi connectivity and cloud telemetry transmission' },
      { name: 'Node.js', category: 'Backend', role: 'Telemetry ingestion API and automated notification cascade' },
      { name: 'React', category: 'Frontend', role: 'Emergency dashboard and responder interface' },
      { name: 'TypeScript', category: 'Frontend', role: 'Strict typing for emergency action contracts' },
    ],
    myContribution: [
      'Engineered embedded C++ firmware handling tactile button interrupts and serial communication.',
      'Developed Node.js ingestion endpoints to validate incoming emergency telemetry packets.',
      'Calibrated motion threshold logic to distinguish normal movement from acute impacts.',
      'Documented end-to-end hardware-to-cloud integration wiring and transmission protocols.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Eliminating false alarms caused by everyday movement or accidental drops.',
        approach:
          'Implemented debounce logic and dual-condition verification (impact G-force + 3-second post-impact immobility confirmation).',
        tradeoff:
          'Introduces a slight 3-second delay on automatic impact detection to eliminate false positives.',
      },
    ],
    featuresImplemented: [
      'Tactile button interrupt handling in Arduino C++',
      'GPS NMEA coordinate sentence parsing',
      'ESP8266 HTTP POST telemetry transmission',
      'SIM800L cellular fallback alert dispatch',
      'Node.js REST endpoint for device incident logging',
    ],
    featuresInProgress: [
      'Miniaturized SMD PCB replacing prototype breadboard',
      'Bluetooth Low Energy peripheral syncing with companion smartphone app',
    ],
  },
  {
    id: 'gatimaan',
    title: 'GATIMAAN',
    subtitle: 'Smart Token & Queue Management Platform',
    category: 'Full-Stack',
    tagline: 'A smart token and queue management platform designed to simplify public-service experiences.',
    brief: 'A smart token and queue management platform designed to simplify public-service experiences.',
    featured: true,
    awardBadge: 'Flagship Platform',
    githubUrl: 'https://github.com/anshikaagarwal/gatimaan',
    liveUrl: '',
    demoNote: 'Institutional testbed & on-premise deployment',
    problemStatement:
      'Citizen-facing public administrative facilities frequently suffer from uncoordinated physical queues, lack of token status transparency, uneven counter workload distribution, and absent throughput auditing.',
    targetAudience:
      'Municipal counters, administrative offices, counter service operators, and citizens requiring transparent wait-time visibility.',
    systemArchitecture: {
      summary:
        'A decoupled client-server architecture with event-driven WebSocket distribution, relational persistence with sequence locking, and administrative role boundaries.',
      diagramType: 'gatimaan-queue',
      layers: [
        {
          name: 'Client Interface Layer',
          badge: 'React 19 + TypeScript + Vite',
          description: 'Citizen token tracking portal and QueueDesk operational interface for counter agents.',
          technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
          keyDetails: [
            'Citizen mobile view with live token countdown and push update state',
            'QueueDesk console with Call Next, Recall, Transfer, and Mark Completed triggers',
            'Sound notification and accessibility-compliant status badges',
          ],
        },
        {
          name: 'API & Real-Time Gateway',
          badge: 'Node.js + Express + Socket.IO',
          description: 'High-concurrency REST endpoints and bidirectional WebSocket event pipeline.',
          technologies: ['Node.js', 'Express.js', 'Socket.IO', 'Clerk Auth'],
          keyDetails: [
            'Clerk-validated role verification (Admin, Operator, Citizen)',
            'Socket.IO room segregation per service counter and office branch',
            'Zero-latency broadcast of queue transition events (ticket:called, counter:active)',
          ],
        },
        {
          name: 'Persistence & Transaction Safety',
          badge: 'PostgreSQL + Prisma / Query Layer',
          description: 'ACID-compliant storage managing token sequences, counter states, and audit trails.',
          technologies: ['PostgreSQL', 'SQL Transactions', 'Relational Schemas'],
          keyDetails: [
            'Strict sequence isolation preventing duplicate token generation under concurrent load',
            'Timestamped event ledger recording wait times, service durations, and operator throughput',
            'Optimized indexed queries for active queue positions',
          ],
        },
        {
          name: 'IoT & Counter Peripheral Layer',
          badge: 'Hardware Serial / WebSocket Bridge',
          description: 'Integration layer for electronic counter LED displays and physical token ticket dispensers.',
          technologies: ['WebSockets', 'Hardware Token Bridge', 'REST Webhooks'],
          keyDetails: [
            'Dispenser button triggers invoking authenticated token creation API',
            'Numeric display unit sync with live counter assignment',
          ],
        },
      ],
      dataFlowSteps: [
        'Citizen requests service token at digital kiosk or mobile client',
        'Express backend executes atomic sequence increment in PostgreSQL transaction',
        'Socket.IO broadcasts new queue payload to QueueDesk and citizen tracking rooms',
        'Counter agent triggers Call Next; state transitions to In-Service with audio cue',
        'Transaction logged into audit ledger with total wait time and service duration',
      ],
    },
    technologies: [
      { name: 'React 19', category: 'Frontend', role: 'Citizen tracking portal and QueueDesk operator console' },
      { name: 'TypeScript', category: 'Frontend', role: 'Type-safe contracts for queue states and API payloads' },
      { name: 'Node.js & Express', category: 'Backend', role: 'RESTful API gateway and queue business logic' },
      { name: 'Socket.IO', category: 'Auth & Realtime', role: 'Bidirectional WebSocket event streaming to counters' },
      { name: 'PostgreSQL', category: 'Database', role: 'ACID sequence transactions and service audit ledgers' },
    ],
    myContribution: [
      'Architected the full-stack system layout and database schema for token lifecycle state management.',
      'Implemented real-time Socket.IO room broadcast logic to update citizens and counter operators simultaneously.',
      'Built atomic SQL transaction sequence handlers preventing duplicate token collisions under concurrent load.',
      'Engineered the responsive QueueDesk operator console with Call Next, Transfer, and Recall actions.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Preventing race conditions and duplicate token sequence numbers during simultaneous citizen requests.',
        approach:
          'Leveraged PostgreSQL transactional row locking and atomic sequence incrementation.',
        tradeoff:
          'Slight serialization latency on token issuance under extreme spikes, guaranteeing zero duplicate numbers.',
      },
    ],
    featuresImplemented: [
      'Atomic token sequence generation in PostgreSQL',
      'QueueDesk counter control dashboard',
      'Citizen live token countdown view',
      'Socket.IO room-segregated queue broadcasts',
      'Historical service duration logging and audit trail',
    ],
    featuresInProgress: [
      'SMS fallback alerts for non-smartphone citizens',
      'Predictive wait-time estimates using historical counter velocity',
    ],
  },
  {
    id: 'krishilink',
    title: 'KRISHILINK',
    subtitle: 'Agriculture Stakeholder & Workflow Platform',
    category: 'Full-Stack',
    tagline: 'A technology platform focused on connecting agriculture stakeholders and simplifying agricultural workflows.',
    brief: 'A technology platform focused on connecting agriculture stakeholders and simplifying agricultural workflows.',
    featured: true,
    awardBadge: 'Agriculture Platform',
    githubUrl: 'https://github.com/anshikaagarwal/krishilink',
    liveUrl: '',
    demoNote: 'Workflow prototype & multi-role platform',
    problemStatement:
      'Fragmented communication between agricultural producers, wholesale buyers, and regional distributors creates price opacity, post-harvest coordination bottlenecks, and inefficient logistical handoffs.',
    targetAudience:
      'Agricultural producers, wholesale buyers, cooperative managers, and distribution logistics operators.',
    systemArchitecture: {
      summary:
        'A multi-role full-stack platform providing streamlined harvest listings, verified trade matchmaking, and asynchronous order tracking.',
      diagramType: 'gatimaan-queue',
      layers: [
        {
          name: 'Stakeholder Portal Surface',
          badge: 'React + TypeScript + Tailwind CSS',
          description: 'Role-customized interfaces for producers, wholesale purchasers, and transport coordinators.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS'],
          keyDetails: [
            'Producer listing interface with crop yield, harvest window, and pricing parameters',
            'Wholesale inquiry and order confirmation management screens',
            'Mobile-optimized layouts accessible on entry-level smartphones',
          ],
        },
        {
          name: 'Workflow API Gateway',
          badge: 'Node.js + Express + REST Endpoints',
          description: 'Asynchronous API layer handling listing validation, buyer queries, and status updates.',
          technologies: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
          keyDetails: [
            'Role-based access verification protecting buyer and seller transactions',
            'Structured request filtering by commodity category, volume, and regional hub',
          ],
        },
        {
          name: 'Commodity & Transaction Persistence',
          badge: 'PostgreSQL Relational Schema',
          description: 'Normalized database housing product inventories, pricing indices, and order audit trails.',
          technologies: ['PostgreSQL', 'Relational Schemas', 'Indexing'],
          keyDetails: [
            'Optimized indexing for regional agricultural search queries',
            'Relational linkage between crop lots, verified buyers, and dispatch milestones',
          ],
        },
        {
          name: 'Logistics Notification Relay',
          badge: 'Event Webhooks / Telephony Bridge',
          description: 'Alert and update dispatching for transaction milestones and pickup scheduling.',
          technologies: ['Webhooks', 'REST APIs', 'Notification Service'],
          keyDetails: [
            'Status transition notifications triggered upon order confirmation',
            'Logistical milestone confirmations for pickup and delivery handoffs',
          ],
        },
      ],
      dataFlowSteps: [
        'Producer submits verified harvest listing with quantity, grade, and dispatch location',
        'API gateway validates listing parameters and writes record to PostgreSQL database',
        'Wholesale buyer queries regional produce listings and submits purchase commitment',
        'Workflow engine transitions order state and notifies both parties with confirmation receipt',
        'Logistics milestone tracking updates dispatch and receipt statuses in transaction ledger',
      ],
    },
    technologies: [
      { name: 'React', category: 'Frontend', role: 'Role-customized stakeholder portal and listing views' },
      { name: 'TypeScript', category: 'Frontend', role: 'Strict typing for transaction and listing contracts' },
      { name: 'Node.js & Express', category: 'Backend', role: 'RESTful API gateway for order workflows' },
      { name: 'PostgreSQL', category: 'Database', role: 'Relational data model for agricultural inventories and orders' },
      { name: 'REST APIs', category: 'Backend', role: 'Standardized endpoints for multi-party coordination' },
    ],
    myContribution: [
      'Architected the modular stakeholder workflow schema linking producers with verified buyers.',
      'Developed responsive React component interfaces optimized for clear scanning on mobile viewports.',
      'Implemented Express REST endpoints for listing creation, filtering, and transaction state updates.',
      'Designed normalized PostgreSQL relational schema handling crop categories and order histories.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Maintaining accessible, zero-friction workflows for rural producers on variable mobile bandwidth.',
        approach:
          'Structured lightweight client payloads and cached common lookups to ensure rapid page response.',
        tradeoff:
          'Prioritized lightweight text and essential metadata over heavy imagery for rural connectivity resilience.',
      },
    ],
    featuresImplemented: [
      'Producer crop listing management interface',
      'Wholesale search and filtering by volume and region',
      'Order commitment and status transition tracking',
      'Normalized relational PostgreSQL database schema',
    ],
    featuresInProgress: [
      'SMS notifications for offline farmers via telephony gateway',
      'Price trend analytics based on historical regional transactions',
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'muj-hacx',
    title: 'Winner — 1st Position (₹70,000 Cash Prize)',
    event: 'MUJ HACX 4.0 Hackathon',
    organizer: 'Manipal University Jaipur',
    location: 'Jaipur, Rajasthan',
    position: '1st Place',
    prizeAmount: '₹70,000',
    category: 'Hackathon',
    track: "Women's Safety Solution",
    description:
      "Secured First Place among engineering teams nationwide at MUJ HACX 4.0. Built and demonstrated an end-to-end working women's safety telemetry solution evaluated on technical architecture and real-time execution.",
    highlights: [
      'Awarded First Prize with ₹70,000 cash grant',
      "Evaluated on real-time sensor telemetry, working prototype execution, and architecture",
    ],
    verified: true,
  },
  {
    id: 'sistech-hack',
    title: 'Runner-Up — SISTech Hackathon (₹5,000 Cash Prize)',
    event: 'SISTech Hackathon',
    organizer: 'SISTech',
    location: 'Bhopal, Madhya Pradesh',
    position: 'Runner-Up',
    prizeAmount: '₹5,000',
    category: 'Hackathon',
    track: 'Industry Automation',
    team: 'Team Rajdhani',
    dateString: 'October 2026',
    description:
      'Secured Runner-Up position with Team Rajdhani in the Industry Automation category (October 2026) for engineering a functional workflow automation prototype.',
    highlights: [
      'Awarded Runner-Up with ₹5,000 cash prize',
      'Industry Automation track — Team Rajdhani (October 2026)',
    ],
    verified: true,
  },
  {
    id: 'amity-coding-club',
    title: 'Coordinator & Technical Workshop Organizer',
    event: 'Amity Coding Club (ACC)',
    organizer: 'Amity University Madhya Pradesh',
    location: 'Gwalior, Madhya Pradesh',
    position: 'Club Coordinator',
    category: 'Leadership',
    description:
      'Serving as Coordinator for the Amity Coding Club. Organizing hands-on technical workshops, DSA problem-solving sessions, and coding activities for student peers.',
    highlights: [
      'Organizing departmental coding sessions, DSA workshops, and problem-solving meetups',
      'Assisting student peers in setting up developer tooling, Git workflows, and project foundations',
    ],
    verified: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Code',
    description: 'Core programming and scripting languages.',
    skills: [
      { name: 'C', context: 'Procedural programming and systems fundamentals', relevance: 'Primary' },
      { name: 'C++', context: 'Object-oriented programming, DSA, and embedded firmware', relevance: 'Primary' },
      { name: 'Python', context: 'Data analysis, scripting, and backend development', relevance: 'Primary' },
      { name: 'JavaScript', context: 'Modern asynchronous web applications and Node.js runtime', relevance: 'Primary' },
      { name: 'SQL', context: 'Relational querying, schema design, and indexing', relevance: 'Primary' },
      { name: 'HTML & CSS', context: 'Semantic layout, responsive design, and accessibility', relevance: 'Primary' },
    ],
  },
  {
    title: 'Frontend',
    iconName: 'Layout',
    description: 'Component architecture and reactive interfaces.',
    skills: [
      { name: 'React.js', context: 'Functional components, hooks, state lifecycle, and SPA routing', relevance: 'Primary' },
      { name: 'Tailwind CSS', context: 'Design tokens, utility-first layouts, and responsive styling', relevance: 'Primary' },
    ],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    description: 'Server logic, REST endpoints, and real-time pipelines.',
    skills: [
      { name: 'Node.js', context: 'Asynchronous event runtime and server-side execution', relevance: 'Primary' },
      { name: 'Express.js', context: 'RESTful API routing, middleware, and request validation', relevance: 'Primary' },
      { name: 'REST APIs', context: 'Standardized HTTP status codes, JSON contracts, and endpoints', relevance: 'Primary' },
      { name: 'Socket.IO', context: 'Bidirectional event streaming for real-time queue synchronization', relevance: 'Primary' },
    ],
  },
  {
    title: 'Databases',
    iconName: 'Database',
    description: 'Relational transactions and document persistence.',
    skills: [
      { name: 'PostgreSQL', context: 'ACID transactions, atomic sequences, and relational schemas', relevance: 'Primary' },
      { name: 'MongoDB', context: 'NoSQL document collections, aggregation, and Mongoose models', relevance: 'Primary' },
    ],
  },
  {
    title: 'Core Computer Science',
    iconName: 'Cpu',
    description: 'Foundational algorithmic concepts and systems design.',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', context: 'Trees, graphs, dynamic programming, sorting, and recursion', relevance: 'Primary' },
      { name: 'Object-Oriented Programming (OOP)', context: 'Encapsulation, inheritance, polymorphism, and abstraction', relevance: 'Primary' },
      { name: 'Database Management Systems (DBMS)', context: 'Normalization, ACID properties, indexing, and query execution', relevance: 'Primary' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    iconName: 'Cpu',
    description: 'Data processing and ML fundamentals.',
    skills: [
      { name: 'Machine Learning Fundamentals', context: 'Supervised/unsupervised models and data preprocessing', relevance: 'Primary' },
      { name: 'NumPy', context: 'Multidimensional array math and numerical computing', relevance: 'Primary' },
      { name: 'Pandas', context: 'Data cleaning, tabular transformation, and dataset analysis', relevance: 'Primary' },
    ],
  },
  {
    title: 'Tools & Workflows',
    iconName: 'Cpu',
    description: 'Version control, development environment, and API testing.',
    skills: [
      { name: 'Git & GitHub', context: 'Branch management, pull requests, and collaborative versioning', relevance: 'Primary' },
      { name: 'VS Code', context: 'Primary code editing, extensions, and workspace debugging', relevance: 'Primary' },
      { name: 'Postman', context: 'API endpoint testing, mock servers, and payload inspection', relevance: 'Primary' },
    ],
  },
];

export const LEADERSHIP_DATA: LeadershipRole[] = [
  {
    role: 'Coordinator & Technical Event Lead',
    organization: 'Amity Coding Club (ACC)',
    affiliation: 'Amity University Madhya Pradesh, Gwalior',
    period: '2024 – Present',
    responsibilities: [
      'Organize and facilitate hands-on coding bootcamps, technical workshops, and hackathon orientation sessions.',
      'Mentor first-year peers in basic C++, Git/GitHub fundamentals, and web development project setup.',
      'Coordinate with faculty and club student leads to structure algorithmic challenges and campus hackathons.',
    ],
    achievements: [
      'Co-hosted coding workshops introducing collaborative Git and open-source fundamentals.',
      'Built a supportive peer learning environment for competitive coding and project ideation.',
    ],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  institution: 'Amity University Madhya Pradesh',
  location: 'Gwalior, Madhya Pradesh, India',
  period: '2024 – 2028',
  relevantCoursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++)',
    'Database Management Systems',
    'Operating Systems Fundamentals',
    'Computer Networks Basics',
    'Discrete Mathematics',
    'Web Technologies & Software Design',
  ],
  academicFocus: [
    'Building reliable, database-backed web architectures and transactional APIs',
    'Real-time event pipelines and queue dispatch orchestration',
    'Hardware-to-cloud IoT telemetry and emergency response synchronization',
  ],
};
