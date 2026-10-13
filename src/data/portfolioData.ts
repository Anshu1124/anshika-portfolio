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
  resumeUrl: '/resume.pdf',
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
    position: 'First Position',
    prizeAmount: '₹70,000',
    category: 'Hackathon',
    description:
      'Secured First Place among competitive engineering teams from across the nation at MUJ HACX 4.0. Built and demonstrated a complete, end-to-end working engineering solution evaluated on technical architecture, real-time capability, and problem impact.',
    highlights: [
      'Awarded First Prize with ₹70,000 cash grant',
      'Evaluated on technical complexity, working prototype execution, and architecture',
      'Demonstrated full-stack development, database reliability, and live system deployment under tight hackathon timeframes',
    ],
    verified: true,
  },
  {
    id: 'symbiosis-hack',
    title: 'Consolation Prize (₹2,000 Prize)',
    event: 'Inter-College Hackathon',
    organizer: 'Symbiosis University',
    location: 'Indore, Madhya Pradesh',
    position: 'Consolation Prize',
    prizeAmount: '₹2,000',
    category: 'Hackathon',
    description:
      'Recognized with a Consolation Award at Symbiosis Indore for engineering a rapid prototype addressing social and utility challenges through software innovation.',
    highlights: [
      'Consolation award recognition with ₹2,000 prize',
      'Rapid prototype development within competitive deadline constraints',
      'Presented technical architecture and implementation roadmap to evaluating jury',
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
      'Serving as Coordinator for the Amity Coding Club. Actively organizing hands-on technical workshops, competitive programming sessions, and collaborative peer learning initiatives for students.',
    highlights: [
      'Coordinating departmental coding sessions and problem-solving meetups',
      'Fostering peer collaboration across web development and algorithmic problem solving',
      'Assisting student peers in setting up developer tooling, Git workflows, and project foundations',
    ],
    verified: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    description: 'Foundational languages used for core logic, algorithm implementation, and backend services.',
    skills: [
      { name: 'C++', context: 'Object-oriented programming, data structures, and embedded microcontroller firmware', relevance: 'Primary' },
      { name: 'Python', context: 'Web services, data processing pipelines, and scripting', relevance: 'Primary' },
      { name: 'JavaScript (ES6+)', context: 'Modern asynchronous web applications, DOM manipulation, and Node runtime', relevance: 'Primary' },
      { name: 'TypeScript', context: 'Strict typing for scalable React applications and robust API contracts', relevance: 'Primary' },
    ],
  },
  {
    title: 'Frontend Engineering',
    iconName: 'Layout',
    description: 'Building responsive, accessible, and high-performance user interfaces.',
    skills: [
      { name: 'React (18 / 19)', context: 'Component hierarchies, hooks, state lifecycles, and context providers', relevance: 'Primary' },
      { name: 'Vite', context: 'Fast build tooling, bundle optimization, and modern module development', relevance: 'Primary' },
      { name: 'Tailwind CSS', context: 'Design systems, responsive flex/grid layouts, and tokenized styling', relevance: 'Primary' },
      { name: 'HTML5 & Semantic CSS', context: 'Accessible DOM structuring, keyboard navigation, and responsive typography', relevance: 'Primary' },
    ],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    description: 'Server architectures, RESTful contract design, and real-time event streaming.',
    skills: [
      { name: 'Node.js & Express.js', context: 'REST API servers, routing middleware, and asynchronous request handling', relevance: 'Primary' },
      { name: 'Socket.IO', context: 'Bi-directional WebSocket pipelines for real-time queue and event notifications', relevance: 'Primary' },
      { name: 'RESTful API Design', context: 'Status codes, parameter validation, rate limiting, and clean endpoint naming', relevance: 'Primary' },
      { name: 'Clerk Auth', context: 'Role-based access control and JWT token verification for protected routes', relevance: 'Secondary' },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    description: 'Relational data modeling, ACID transactions, and structured schemas.',
    skills: [
      { name: 'PostgreSQL', context: 'Relational modeling, atomic sequences, foreign key constraints, and SQL queries', relevance: 'Primary' },
      { name: 'MongoDB', context: 'Document-oriented collections, schema design, and Mongoose model aggregation', relevance: 'Secondary' },
      { name: 'SQL Transactions', context: 'Index creation, transaction isolation levels, and sequence safety', relevance: 'Primary' },
    ],
  },
  {
    title: 'Hardware & IoT Integration',
    iconName: 'Cpu',
    description: 'Embedded microcontroller interfacing, sensor data, and wireless telemetry.',
    skills: [
      { name: 'Arduino Uno & C++', context: 'Hardware interrupts, sensor interfacing (ADXL345), and serial communication', relevance: 'Primary' },
      { name: 'ESP8266 & SIM800L', context: 'Microcontroller Wi-Fi HTTP requests and cellular AT command handling', relevance: 'Secondary' },
    ],
  },
  {
    title: 'Developer Tools & Workflows',
    iconName: 'Cpu',
    description: 'Version control, API testing, and modern developer toolchains.',
    skills: [
      { name: 'Git & GitHub', context: 'Branching models, atomic commits, pull requests, and collaborative workflows', relevance: 'Primary' },
      { name: 'Postman', context: 'API endpoint testing, payload inspection, and mock servers', relevance: 'Primary' },
      { name: 'VS Code & Vite Devtools', context: 'Modern debugging, TypeScript compilation, and linting tools', relevance: 'Primary' },
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
