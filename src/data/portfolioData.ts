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
  tagline: 'Building resilient full-stack systems, geospatial intelligence platforms, and hardware-integrated applications.',
  university: 'Amity University Madhya Pradesh, Gwalior',
  degree: 'B.Tech in Computer Science and Engineering',
  gradYear: '2024 – 2028',
  status: 'Undergraduate Student & ACC Coordinator',
  location: 'Gwalior, Madhya Pradesh, India',
  email: 'anshika.agarwal.dev@gmail.com', // Configurable contact email
  github: 'https://github.com/anshikaagarwal', // Configurable profile
  linkedin: 'https://linkedin.com/in/anshika-agarwal', // Configurable profile
  resumeUrl: '/resume.pdf', // Placed in public/resume.pdf
  bio: `I am a Computer Science undergraduate focused on full-stack web engineering, real-time architectures, and applied systems. My work spans government-grade queue dispatch systems, geospatial disaster analytics using PostGIS and Leaflet, and microcontroller-to-cloud IoT telemetry prototypes. As coordinator of the Amity Coding Club, I actively organize technical workshops and build production-minded projects for hackathons and public problem-solving.`,
  careerGoals: [
    'Software Engineering Internships (Summer & Fall)',
    'Full-Stack Systems & Distributed Web Services',
    'Applied AI / ML & Spatial Intelligence',
    'Open-Source Engineering & High-Impact Hackathons',
  ],
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'gatimaan',
    title: 'GATIMAAN',
    subtitle: 'Government-Centric Token & Queue Management System',
    category: 'Full-Stack',
    tagline: 'High-throughput real-time queue orchestration and counter dispatch platform for administrative offices.',
    brief: 'A platform built to modernize citizen queuing, reduce counter congestion, and provide real-time token tracking with administrative oversight and hardware integration.',
    featured: true,
    awardBadge: 'Flagship System',
    githubUrl: 'https://github.com/anshikaagarwal/gatimaan',
    liveUrl: '',
    demoNote: 'Local deployment / On-premise institutional testbed',
    problemStatement:
      'Citizen-facing public administrative facilities frequently suffer from uncoordinated physical queues, lack of token status transparency, uneven counter workload distribution, and absent throughput auditing.',
    targetAudience:
      'Municipal counters, government administrative offices, counter service operators, and citizens requiring transparent wait-time visibility.',
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
        'Counter operator clicks "Call Next"; system claims next active token with status "IN_SERVICE"',
        'LED display and citizen audio/visual alarms fire in real time',
      ],
    },
    technologies: [
      { name: 'React', category: 'Frontend', role: 'Reactive component UI and operator dashboard' },
      { name: 'TypeScript', category: 'Frontend', role: 'End-to-end type safety across client payloads' },
      { name: 'Vite', category: 'Frontend', role: 'Modern bundler and fast HMR development environment' },
      { name: 'Node.js & Express', category: 'Backend', role: 'REST routing and core business logic' },
      { name: 'Socket.IO', category: 'Auth & Realtime', role: 'Low-latency real-time queue synchronization' },
      { name: 'PostgreSQL', category: 'Database', role: 'Relational data store with atomic sequence constraints' },
      { name: 'Clerk', category: 'Auth & Realtime', role: 'Secure authentication and role-based permissions' },
    ],
    myContribution: [
      'Engineered the operational QueueDesk interface supporting real-time counter actions (call, skip, transfer).',
      'Configured Socket.IO event listeners and state synchronizers to eliminate manual screen refreshes.',
      'Designed PostgreSQL schema relationships connecting service categories, active counters, and token ledgers.',
      'Integrated Clerk authentication guards for administrative routes and counter desk sessions.',
      'Implemented IoT integration points for physical token trigger events.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Preventing race conditions and token duplicates during peak municipal opening hours.',
        approach:
          'Utilized database-level sequence isolation and transactional locking rather than in-memory counter increments.',
        tradeoff:
          'Slightly higher database write latency (~8ms) in exchange for absolute guarantee against duplicate tokens.',
      },
      {
        challenge: 'Maintaining accurate live queue states across spotty mobile network connections.',
        approach:
          'Implemented heartbeat acknowledgments in Socket.IO with automatic client state reconciliation on reconnect.',
        tradeoff:
          'Increased payload size marginally on initial reconnect to deliver authoritative current state snapshot.',
      },
    ],
    featuresImplemented: [
      'Multi-counter administrative QueueDesk interface',
      'Live citizen token tracker with queue position calculation',
      'WebSocket event broadcast across counter rooms',
      'Role-based authentication with Clerk',
      'Historical wait-time logging and service audit trails',
    ],
    featuresInProgress: [
      'SMS notification fallback via Twilio/telephony gateway for non-smartphone citizens',
      'Predictive average wait-time calculation using linear regression on service history',
    ],
  },
  {
    id: 'sentinel',
    title: 'SENTINEL',
    subtitle: 'Disaster Damage Assessment & Geospatial Intelligence Platform',
    category: 'Geospatial & Systems',
    tagline: 'Spatial intelligence and raster damage modeling platform for emergency response and municipal mitigation.',
    brief: 'A geospatial platform leveraging PostGIS, Leaflet, and Python FastAPI to ingest disaster feeds, compute spatial damage zones, and visualize geographic impact.',
    featured: true,
    awardBadge: 'Geospatial Intelligence',
    githubUrl: 'https://github.com/anshikaagarwal/sentinel',
    liveUrl: '',
    demoNote: 'Prototype GIS environment with spatial mock datasets',
    problemStatement:
      'First responders and municipal planners lack unified, low-latency spatial interfaces to map infrastructure collapse, flood inundation layers, and priority rescue corridors following extreme weather events.',
    targetAudience:
      'Disaster management authorities, municipal relief coordinators, and spatial emergency response teams.',
    systemArchitecture: {
      summary:
        'A Python-driven geospatial computing pipeline paired with PostGIS geometric indexing and dynamic Leaflet tile rendering.',
      diagramType: 'sentinel-spatial',
      layers: [
        {
          name: 'Spatial Visualization Layer',
          badge: 'React + Leaflet + GeoJSON',
          description: 'Interactive map canvas rendering vector hazard polygons and raster overlays.',
          technologies: ['React', 'Leaflet', 'GeoJSON', 'OpenStreetMap'],
          keyDetails: [
            'Choropleth damage grading (Minor, Moderate, Critical, Total Destruction)',
            'Interactive bounding-box spatial queries on user viewport pan/zoom',
            'Layer toggle controls for relief shelters, road closures, and flood vectors',
          ],
        },
        {
          name: 'Geospatial API Engine',
          badge: 'Python + FastAPI',
          description: 'High-throughput asynchronous Python microservice executing spatial filters and coordinate transformations.',
          technologies: ['FastAPI', 'Python', 'Pydantic', 'AsyncIO'],
          keyDetails: [
            'FastAPI endpoints serving filtered GeoJSON FeatureCollections',
            'Coordinate reference system reprojections (EPSG:4326 to EPSG:3857)',
            'Spatial intersection and buffer calculation endpoints',
          ],
        },
        {
          name: 'Spatial Persistence & Querying',
          badge: 'PostgreSQL + PostGIS',
          description: 'Spatial database utilizing GIST spatial indices for sub-second geometric calculations.',
          technologies: ['PostgreSQL', 'PostGIS', 'SQL Geometry Types'],
          keyDetails: [
            'ST_Intersects, ST_DWithin, and ST_Buffer queries for proximity analysis',
            'GIST (Generalized Search Tree) spatial indexing over disaster event polygons',
            'Relational linkage between hazard zones and municipal infrastructure records',
          ],
        },
        {
          name: 'Raster & Ingestion Pipeline',
          badge: 'Python Data / GDAL / Disaster Feeds',
          description: 'Data ingestion module parsing satellite raster metrics and external disaster reports.',
          technologies: ['Python', 'Raster Processing', 'External APIs'],
          keyDetails: [
            'Normalized Difference Index computation logic for flood perimeter isolation',
            'Automated ingestion of disaster hazard coordinates',
          ],
        },
      ],
      dataFlowSteps: [
        'Disaster event coordinates and damage reports received via API endpoint',
        'PostGIS calculates geometric intersection against critical municipal asset polygons',
        'FastAPI serializes spatial results into optimized GeoJSON response',
        'Leaflet client renders color-graded polygons and cluster markers on viewport',
        'Coordinator applies buffer distance filter to isolate affected evacuation paths',
      ],
    },
    technologies: [
      { name: 'Python', category: 'Backend', role: 'Core data processing and spatial calculation logic' },
      { name: 'FastAPI', category: 'Backend', role: 'Asynchronous API delivering GeoJSON feature collections' },
      { name: 'PostgreSQL & PostGIS', category: 'Database', role: 'Spatial database, geometry types, and GIST indexing' },
      { name: 'React', category: 'Frontend', role: 'GIS dashboard UI and filtering controls' },
      { name: 'Leaflet', category: 'GIS/Data', role: 'Interactive map rendering and custom vector layers' },
      { name: 'Raster Processing', category: 'GIS/Data', role: 'Raster tile parsing and damage threshold calculation' },
    ],
    myContribution: [
      'Designed the interactive React-Leaflet map view with dynamic GeoJSON overlay controls.',
      'Implemented FastAPI endpoints for spatial filtering and bounding-box queries.',
      'Constructed PostGIS spatial SQL queries utilizing ST_DWithin and ST_Intersects.',
      'Created custom color-coded map markers and damage level popups with critical metadata.',
      'Researched and integrated public geospatial schemas for disaster zone categorizations.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Large GeoJSON polygon payloads degrading Leaflet canvas framerates on lower-end devices.',
        approach:
          'Applied geometry simplification (Douglas-Peucker algorithm) server-side and clustered point markers.',
        tradeoff:
          'Microscopic loss of boundary precision in exchange for maintaining smooth 60fps map panning.',
      },
      {
        challenge: 'Discrepancy between coordinate reference systems across external disaster datasets.',
        approach:
          'Standardized all ingestion pipelines into EPSG:4326 before executing spatial PostGIS operations.',
        tradeoff:
          'Added coordinate transformation step during ingest, offset by completely unified spatial querying.',
      },
    ],
    featuresImplemented: [
      'Dynamic Leaflet map canvas with custom map tiles',
      'Damage zone categorization (Level 1–4 severity)',
      'FastAPI GeoJSON endpoint architecture',
      'PostGIS spatial intersection query execution',
      'Emergency response facility buffer zone search',
    ],
    featuresInProgress: [
      'Automated satellite raster change-detection workflow via Sentinel-2 optical imagery',
      'Exportable PDF/GeoTIFF situational reports for field teams',
    ],
  },
  {
    id: 'iot-safety-band',
    title: 'NAARTISHIELD',
    subtitle: "Women's Safety IoT Telemetry & Dispatch Platform",
    category: 'IoT & Hardware',
    tagline: 'Wearable distress detection device integrating sensor-level triggers with cloud dispatch services.',
    brief: 'An engineering hardware/software prototype integrating Arduino Uno, ESP8266 Wi-Fi, motion sensing, and GSM/GPS hardware with a Node.js emergency telemetry backend.',
    featured: true,
    awardBadge: 'Hardware/Software Prototype',
    githubUrl: 'https://github.com/anshikaagarwal/iot-safety-band',
    liveUrl: '',
    demoNote: 'Hardware breadboard & microcontroller prototype',
    problemStatement:
      'In high-stress physical safety incidents, victims often cannot unlock or operate a smartphone screen to trigger distress calls or transmit live location coordinates.',
    targetAudience:
      'Individuals navigating isolated or unsafe transit corridors needing instant, tactile emergency activation.',
    systemArchitecture: {
      summary:
        'A hybrid embedded and cloud pipeline: physical hardware interrupts transmit sensor data through wireless gateways to a Node.js event dispatcher.',
      diagramType: 'iot-telemetry',
      layers: [
        {
          name: 'Wearable Hardware Node',
          badge: 'Arduino Uno + ADXL345 Motion Sensor',
          description: 'Wearable sensor unit with tactile emergency button and sudden-fall accelerometer detection.',
          technologies: ['Arduino C++', 'ADXL345', 'Hardware Interrupts'],
          keyDetails: [
            'Physical tactile button hooked to external interrupt pin for instantaneous trigger',
            'ADXL345 3-axis accelerometer monitoring abnormal impact G-force vectors',
            'Low-power sleep state interrupted only by threshold triggers',
          ],
        },
        {
          name: 'Wireless Gateway & Positioning',
          badge: 'ESP8266 + SIM800L / GPS Module',
          description: 'Telemetry transmitter and satellite coordinate acquisition.',
          technologies: ['ESP8266 Wi-Fi', 'SIM800L GSM', 'NMEA GPS Parsing'],
          keyDetails: [
            'SIM800L AT commands for GSM SMS dispatch when Wi-Fi is unavailable',
            'ESP8266 HTTP POST telemetry transmission over Wi-Fi hotspots',
            'GPS receiver parsing $GPGGA NMEA sentences for accurate lat/long coordinates',
          ],
        },
        {
          name: 'Telemetry Ingestion & Dispatch Server',
          badge: 'Node.js + Express + Telephony Hook',
          description: 'Cloud service receiving sensor payloads and executing emergency contact cascades.',
          technologies: ['Node.js', 'Express.js', 'REST APIs', 'Notification Engine'],
          keyDetails: [
            'Authenticated webhook receiving JSON telemetry packet: {deviceId, lat, lng, triggerType, battery}',
            'Emergency contact cascade logic sending alerts with live tracking URL',
            'Rate limiting to prevent accidental duplicate triggers',
          ],
        },
      ],
      dataFlowSteps: [
        'User presses tactile distress button OR accelerometer detects high-G abnormal impact',
        'Arduino wakes and queries GPS module for current coordinates ($GPGGA fix)',
        'ESP8266 compiles JSON payload and sends HTTP POST to Node.js backend',
        'SIM800L sends immediate fallback SMS with coordinates if Wi-Fi request times out',
        'Node.js backend logs incident event and sends automated alerts to emergency contacts',
      ],
    },
    technologies: [
      { name: 'Arduino C++', category: 'Hardware/IoT', role: 'Embedded microcontroller firmware and interrupt handling' },
      { name: 'ESP8266', category: 'Hardware/IoT', role: 'Wi-Fi connectivity and cloud HTTP telemetry transmission' },
      { name: 'ADXL345 / Sensors', category: 'Hardware/IoT', role: 'Motion and abrupt impact acceleration sensing' },
      { name: 'SIM800L & GPS', category: 'Hardware/IoT', role: 'Cellular fallback SMS and satellite location parsing' },
      { name: 'Node.js & Express', category: 'Backend', role: 'Incident ingestion API and notification dispatch' },
    ],
    myContribution: [
      'Wrote embedded C++ firmware for the Arduino Uno handling button interrupts and serial communication.',
      'Calibrated acceleration thresholds on the motion sensor to distinguish normal movement from acute impacts.',
      'Engineered the Node.js/Express ingestion endpoint to receive and validate incoming IoT telemetry packets.',
      'Tested hardware serial communication between Arduino Uno and ESP8266 using SoftwareSerial AT commands.',
      'Documented the full hardware-to-software integration schematic and wiring diagrams.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Eliminating false alarms caused by running, stairs, or accidental drops.',
        approach:
          'Implemented a debounce delay on the button and a dual-condition algorithm (impact G-force threshold + 3-second post-impact immobility confirmation).',
        tradeoff:
          'Introduces a 3-second delay on automatic impact alerts to ensure 98% reduction in false positives.',
      },
      {
        challenge: 'High power consumption of GPS and GSM modules on a wearable form-factor.',
        approach:
          'Kept high-drain modules in standby mode; powered them up only upon trigger event confirmation.',
        tradeoff:
          'First GPS fix takes 15–25 seconds from cold start; mitigated by caching last known coordinates.',
      },
    ],
    featuresImplemented: [
      'Hardware tactile button interrupt handling in Arduino C++',
      'Serial NMEA sentence decoding for latitude/longitude',
      'ESP8266 HTTP POST transmission over Wi-Fi',
      'SIM800L fallback SMS trigger command flow',
      'Node.js REST endpoint for device telemetry logging',
    ],
    featuresInProgress: [
      'PCB miniaturization replacing breadboard components with custom SMD board',
      'Bluetooth Low Energy (BLE) peripheral profile for paired smartphone syncing',
    ],
  },
  {
    id: 'safenest',
    title: 'SafeNest',
    subtitle: 'Safety-Oriented Community Incident Dashboard',
    category: 'Safety Platform',
    tagline: 'Interactive geographical dashboard for tracking community safety indicators and verified safe spaces.',
    brief: 'A safety-oriented monitoring dashboard built with React and Leaflet, providing visual incident zones, emergency sanctuary coordinates, and localized safety status indicators.',
    featured: false,
    githubUrl: 'https://github.com/anshikaagarwal/safenest',
    liveUrl: '',
    demoNote: 'Configurable frontend safety dashboard',
    problemStatement:
      'Community members and students lack unified local visibility into well-lit safe transit routes, operational medical outposts, and recent verified safety incidents around campus perimeters.',
    targetAudience:
      'University students, neighborhood watch groups, and local urban residents navigating campus environments.',
    systemArchitecture: {
      summary:
        'A component-driven React dashboard utilizing Leaflet tile providers, client-side category filters, and structured incident JSON schemas.',
      diagramType: 'safety-network',
      layers: [
        {
          name: 'Dashboard UI Layer',
          badge: 'React + Tailwind CSS',
          description: 'Modular interface featuring metrics, filter toggles, and incident inspection cards.',
          technologies: ['React', 'Tailwind CSS', 'Lucide Icons'],
          keyDetails: [
            'Filterable categories: Medical Aid, Safe Zones, Well-Lit Pathways, Incident Alerts',
            'Card list synchronized with active map viewport bounds',
          ],
        },
        {
          name: 'Interactive Map Layer',
          badge: 'Leaflet + OpenStreetMap',
          description: 'Marker clustering and interactive polygon overlays showing safety corridors.',
          technologies: ['Leaflet', 'OpenStreetMap', 'Canvas Rendering'],
          keyDetails: [
            'Custom marker pins indicating facility types and contact hotlines',
            'Interactive route overlays highlighting verified safe walking routes',
          ],
        },
        {
          name: 'Data & Configuration Layer',
          badge: 'Configurable JSON Models',
          description: 'Modular data structures easily bound to backend REST APIs or static configurations.',
          technologies: ['JSON Schema', 'TypeScript Models'],
          keyDetails: [
            'Strict TypeScript definitions for safety coordinates and facility metadata',
            'Configurable repository and API endpoint parameters',
          ],
        },
      ],
      dataFlowSteps: [
        'User loads SafeNest dashboard with designated campus or neighborhood bounding box',
        'React state initializes incident and safe-haven point arrays',
        'Leaflet renders pins with interactive click popups displaying operational hours and helpline info',
        'User toggles category filter; markers dynamically update without full re-render',
      ],
    },
    technologies: [
      { name: 'React', category: 'Frontend', role: 'Dashboard component hierarchy and interactive state management' },
      { name: 'Leaflet', category: 'GIS/Data', role: 'Interactive map canvas and custom coordinate markers' },
      { name: 'Tailwind CSS', category: 'Frontend', role: 'Responsive layout and dark-mode styling' },
      { name: 'TypeScript', category: 'Frontend', role: 'Type validation for safety indicator records' },
    ],
    myContribution: [
      'Developed the modular React dashboard layout with collapsible side panels.',
      'Implemented Leaflet map integration with custom iconography for safety hubs.',
      'Built multi-category filtering logic allowing users to isolate specific resource types.',
      'Structured clean TypeScript interfaces for easy data updates and API integration.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Synchronizing interactive list item hovers with corresponding map pin highlights.',
        approach:
          'Utilized centralized React state for activeHighlightedPointId and Leaflet marker event emitters.',
        tradeoff:
          'Requires careful ref management to avoid unnecessary canvas re-renders.',
      },
    ],
    featuresImplemented: [
      'Interactive map view with campus boundary markings',
      'Categorized resource filtering (Emergency, Safe Haven, Lit Route)',
      'Incident detail modal with timestamp and verified tag',
      'Configurable repository and project data schema',
    ],
    featuresInProgress: [
      'Crowdsourced incident reporting with moderation queue',
      'Integration with live municipal emergency service APIs',
    ],
  },
  {
    id: 'naartishield',
    title: 'Naartishield',
    subtitle: 'Women Safety & Incident Reporting Architecture',
    category: 'Safety Platform',
    tagline: 'Modular case study for rapid emergency communication and support network dispatching.',
    brief: 'An ongoing research and architectural initiative exploring streamlined incident documentation, encrypted safety channels, and rapid emergency contact triggers.',
    featured: false,
    githubUrl: 'https://github.com/anshikaagarwal/naartishield',
    liveUrl: '',
    demoNote: 'Editable Case Study & Architectural Specification',
    isEditableCaseStudy: true,
    problemStatement:
      'Safety applications often fail in critical moments due to complex navigational hierarchies, excessive login barriers, and lack of resilient offline queuing for distress messages.',
    targetAudience:
      'Women seeking quick-access emergency dispatching and structured, confidential incident reporting mechanisms.',
    systemArchitecture: {
      summary:
        'A proposed lightweight client architecture prioritizing instant one-touch actions, client-side encryption of sensitive reports, and progressive web application offline sync.',
      diagramType: 'safety-network',
      layers: [
        {
          name: 'Direct Action UI',
          badge: 'React + Minimal Friction UX',
          description: 'Zero-barrier emergency activation screen with single-tap distress broadcasting.',
          technologies: ['React', 'TypeScript', 'Web APIs'],
          keyDetails: [
            'High-contrast emergency button accessible within 1 tap from launch',
            'Discreet camouflage mode toggle for sensitive environments',
          ],
        },
        {
          name: 'Service Worker & Offline Queue',
          badge: 'PWA IndexedDB Queue',
          description: 'Local caching of incident reports when mobile connectivity is compromised.',
          technologies: ['IndexedDB', 'Service Workers', 'Background Sync'],
          keyDetails: [
            'Queues distress packets locally if network drops; retries automatically on reconnection',
          ],
        },
        {
          name: 'Backend Dispatch Spec (Planned)',
          badge: 'Node.js / Express Architecture',
          description: 'Secure API relaying emergency notifications and housing encrypted incident records.',
          technologies: ['Node.js', 'Express', 'JWT', 'Encryption'],
          keyDetails: [
            'End-to-end encryption for stored user statements and location trails',
          ],
        },
      ],
      dataFlowSteps: [
        'User triggers emergency state via quick-access interface',
        'Client attempts immediate network dispatch to emergency contacts',
        'If offline, Service Worker enqueues payload in IndexedDB for immediate sync upon reconnection',
        'Coordinates and timestamp logged into encrypted case record',
      ],
    },
    technologies: [
      { name: 'React', category: 'Frontend', role: 'Component architecture and responsive UI design' },
      { name: 'TypeScript', category: 'Frontend', role: 'Strict typing for emergency action contracts' },
      { name: 'Tailwind CSS', category: 'Frontend', role: 'Rapid styling with high-contrast accessibility' },
      { name: 'Node.js (Planned)', category: 'Backend', role: 'Proposed backend dispatch pipeline' },
    ],
    myContribution: [
      'Defined the initial UX flow and architectural requirements for frictionless safety access.',
      'Designed the modular case study structure allowing seamless integration of technical specifications.',
      'Documented the engineering trade-offs regarding battery consumption versus location accuracy.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Balancing rich emergency features with zero-latency critical execution.',
        approach:
          'Segregated immediate emergency broadcast actions from secondary analytical reporting tools.',
        tradeoff:
          'Keeps the primary activation screen intentionally bare to prevent cognitive overload during distress.',
      },
    ],
    featuresImplemented: [
      'Comprehensive architectural specification and user journey diagrams',
      'Configurable case study module ready for code repository linking',
      'Clear definition of verified vs. upcoming features to avoid misleading claims',
    ],
    featuresInProgress: [
      'Full prototype repository implementation with verified backend endpoints',
      'Integration testing with hardware distress triggers',
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
      { name: 'Python', context: 'FastAPI microservices, geospatial raster processing, and data scripts', relevance: 'Primary' },
      { name: 'JavaScript (ES6+)', context: 'Modern asynchronous web applications, DOM manipulation, and Node runtime', relevance: 'Primary' },
      { name: 'TypeScript', context: 'Strict typing for scalable React applications and robust API contracts', relevance: 'Primary' },
    ],
  },
  {
    title: 'Frontend Engineering',
    iconName: 'Layout',
    description: 'Building responsive, accessible, and high-performance interactive user interfaces.',
    skills: [
      { name: 'React (18 / 19)', context: 'Component hierarchies, hooks, state lifecycles, and context providers', relevance: 'Primary' },
      { name: 'Vite', context: 'Fast build tooling, bundle optimization, and modern module development', relevance: 'Primary' },
      { name: 'Tailwind CSS', context: 'Design systems, responsive flex/grid layouts, and tokenized styling', relevance: 'Primary' },
      { name: 'HTML5 & Semantic CSS', context: 'Accessible DOM structuring, keyboard navigation, and responsive typography', relevance: 'Primary' },
      { name: 'Leaflet', context: 'Interactive vector map rendering, GeoJSON layers, and marker coordinate mapping', relevance: 'Primary' },
    ],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    description: 'Server architectures, RESTful contract design, and real-time event streaming.',
    skills: [
      { name: 'Node.js & Express.js', context: 'REST API servers, routing middleware, and asynchronous request handling', relevance: 'Primary' },
      { name: 'FastAPI', context: 'High-performance Python web APIs with automatic OpenAPI docs and async handling', relevance: 'Primary' },
      { name: 'Socket.IO', context: 'Bi-directional WebSocket pipelines for real-time queue and event notifications', relevance: 'Primary' },
      { name: 'RESTful API Design', context: 'Status codes, parameter validation, rate limiting, and clean endpoint naming', relevance: 'Primary' },
      { name: 'Clerk Auth', context: 'Role-based access control and JWT token verification for protected routes', relevance: 'Secondary' },
    ],
  },
  {
    title: 'Databases & Spatial Storage',
    iconName: 'Database',
    description: 'Relational data modeling, ACID transactions, and spatial indexing.',
    skills: [
      { name: 'PostgreSQL', context: 'Relational modeling, atomic sequences, foreign key constraints, and SQL queries', relevance: 'Primary' },
      { name: 'PostGIS', context: 'Spatial geometry types, GIST indexing, and ST_Intersects/ST_DWithin spatial queries', relevance: 'Primary' },
      { name: 'MongoDB', context: 'Document-oriented collections, schema design, and Mongoose model aggregation', relevance: 'Secondary' },
      { name: 'SQL Query Optimization', context: 'Index creation, transaction isolation levels, and join queries', relevance: 'Primary' },
    ],
  },
  {
    title: 'AI / ML & Geospatial Computing',
    iconName: 'Brain',
    description: 'Exploratory data analysis, geospatial raster processing, and applied AI experiments.',
    skills: [
      { name: 'Python Data Stack', context: 'NumPy and Pandas for numerical computation and data cleaning', relevance: 'Primary' },
      { name: 'Geospatial Processing', context: 'Rasterio and GDAL concepts for spatial bounding boxes and GeoTIFFs', relevance: 'Secondary' },
      { name: 'Scikit-Learn Fundamentals', context: 'Basic classification, regression models, and data normalization', relevance: 'Secondary' },
      { name: 'Spatial Intelligence', context: 'Hazard perimeter calculation and geographic dataset parsing', relevance: 'Primary' },
    ],
  },
  {
    title: 'Tools, DevOps & Hardware',
    iconName: 'Cpu',
    description: 'Development toolchain, version control, and embedded microcontroller hardware.',
    skills: [
      { name: 'Git & GitHub', context: 'Branching models, atomic commits, pull requests, and collaborative workflows', relevance: 'Primary' },
      { name: 'Arduino Uno & C++', context: 'Hardware interrupts, sensor interfacing (ADXL345), and serial communication', relevance: 'Primary' },
      { name: 'ESP8266 & SIM800L', context: 'Microcontroller Wi-Fi HTTP requests and cellular AT command handling', relevance: 'Secondary' },
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
    'Applied research in geospatial systems and disaster mitigation platforms',
    'Hardware-to-cloud IoT telemetry and real-time event synchronization',
  ],
};
