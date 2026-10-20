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
    projectNumber: '01',
    title: 'NAARISHIELD',
    subtitle: "Women's Safety & Emergency Telemetry Initiative",
    category: 'IoT & Hardware',
    categoryDomain: "IoT & Embedded Telemetry / Women's Safety",
    tagline: 'A hybrid IoT wearable distress beacon and real-time emergency command center engineered for immediate panic dispatch and privacy-preserving location tracking.',
    brief: 'A hybrid IoT wearable distress beacon and real-time emergency command center engineered for immediate panic dispatch and privacy-preserving location tracking.',
    featured: true,
    awardBadge: 'Winner — MUJ HACX 4.0 (₹70K)',
    githubUrl: 'https://github.com/aryamatomar/MUJ',
    liveUrl: '',
    demoNote: 'Hardware prototype testbed & real-time command dashboard',
    highlights: [
      '1st Place Winner at MUJ HACX 4.0 (₹70,000 Cash Grant) for technical architecture & live execution',
      'Hardware GPIO interrupt handling on Arduino & ESP8266/ESP32 with sub-second SOS distress signaling',
      'Privacy-first "Emergency-Only GPS Lifecycle" requesting satellite coordinates strictly upon confirmed panic',
      'Dual-role web interface: personal safety monitor (/user) & responder command center (/admin) with Leaflet',
      'Node.js & Express REST ingestion API with MongoDB Atlas persistence and automated in-memory fallback',
    ],
    problemStatement:
      'In acute physical distress or sudden assault, victims cannot unlock a smartphone, navigate multi-screen app menus, or hold a call. Traditional personal safety apps suffer from high cognitive friction during panics, rapid battery drain from persistent background GPS polling, and reluctance due to intrusive location tracking. Delay in distress dispatch and coordinate dissemination can lead to catastrophic emergency response lag.',
    targetAudience:
      'Women commuting via public transit corridors, university campus perimeters, or isolated night shifts, alongside university safety teams and emergency first responders.',
    objectives: [
      'Eliminate cognitive friction during distress via a physical tactile push-button interrupt on a wearable device.',
      'Implement an "Emergency-Only GPS Lifecycle" that keeps GPS dormant during routine use and activates precision satellite tracking strictly upon emergency confirmation.',
      'Provide dual-role situational awareness: personal monitoring for the wearer and an incident command center for responders with live Leaflet mapping.',
      'Engineer a fault-tolerant hardware-to-cloud telemetry pipeline over Wi-Fi, REST, and WebSockets with automated in-memory failover.',
    ],
    solutionOverview:
      'NAARISHIELD pairs an embedded wearable microcontroller unit (Arduino / ESP8266 / ESP32) with a web-based command dashboard and high-concurrency Node.js backend. In an emergency, a tactile button press triggers a hardware interrupt, activating local audio/visual cues (piezo buzzer and red LED) while transmitting an authenticated distress packet over Wi-Fi. Simultaneously, the companion web application prompts high-precision GPS coordinate acquisition and establishes a bi-directional Socket.IO stream to the Admin Emergency Command Center, projecting live location pins onto an interactive Leaflet map.',
    userWorkflow: [
      {
        persona: 'Wearer / Student',
        roleDescription: 'Individual wearing the IoT hardware device with companion mobile dashboard',
        steps: [
          'Pairs wearable device (SAFEHER-001) with the web dashboard; system initializes in ONLINE status with RGB LED blinking green.',
          'During distress, wearer presses the physical tactile button (GPIO 4) or triggers mobile SOS on the /user view.',
          'Microcontroller immediately sounds the 85dB piezo buzzer and switches the RGB LED to solid red.',
          'Companion browser prompts high-accuracy emergency GPS tracking strictly for the duration of the incident.',
          'Live 6-axis MPU6050 motion telemetry and incident coordinates stream to the cloud dispatch gateway.',
        ],
      },
      {
        persona: 'Emergency Responder / Campus Admin',
        roleDescription: 'Security officers monitoring the centralized Emergency Command Center',
        steps: [
          'Emergency Command Center receives real-time sosAlert WebSocket broadcast with distinct visual audio alerts.',
          'Incident coordinates are instantly pinned on the live Leaflet map with active incident ID (activeIncidentId).',
          'Responder inspects real-time motion sensor waveforms (accelerometer & gyroscope) to evaluate physical impact or movement.',
          'Responder coordinates emergency response units to the mapped location coordinates.',
          'Responder marks incident resolved (/api/alerts/:id/resolve), resetting device state back to SAFE.',
        ],
      },
    ],
    systemArchitecture: {
      summary:
        'A 4-tier telemetry pipeline connecting embedded physical hardware interrupts with real-time WebSocket distribution, geospatial Leaflet mapping, and MongoDB persistence.',
      diagramType: 'iot-telemetry',
      layers: [
        {
          name: 'Wearable Embedded Sensing Layer',
          badge: 'Arduino Uno / ESP8266 / ESP32 + MPU6050',
          description: 'Hardware wearable with tactile interrupt button, 6-axis motion sensor, piezo buzzer, and RGB LED indicator.',
          technologies: ['Arduino C++', 'ESP8266 / ESP32', 'MPU6050 I2C', 'Hardware Interrupts'],
          keyDetails: [
            'Tactile push-button on GPIO 4 with falling-edge hardware interrupt service routine (ISR)',
            'MPU6050 6-axis accelerometer & gyroscope polling motion vectors over I2C (SDA/SCL)',
            '85dB piezo buzzer on GPIO 5 and common-cathode RGB LED on GPIO 16, 17, 18 for local feedback',
          ],
        },
        {
          name: 'Telemetry & Positioning Gateway',
          badge: 'Embedded Wi-Fi Client + Web Geolocation API',
          description: 'Embedded HTTP client transmitting sensor telemetry and companion browser GPS stream.',
          technologies: ['ESP8266 Wi-Fi', 'C++ HTTPClient', 'HTML5 Geolocation API', 'Leaflet.js'],
          keyDetails: [
            'Microcontroller dispatches structured JSON payloads via HTTP POST to /api/sensor/data and /api/alerts/sos',
            'Browser Geolocation API (watchPosition) activates strictly upon confirmed panic to uphold wearer privacy',
            'Coordinates stream to backend with high accuracy, latitude/longitude, and timestamping',
          ],
        },
        {
          name: 'Backend Dispatch & Real-Time Pipeline',
          badge: 'Node.js + Express.js + Socket.IO Server',
          description: 'High-concurrency REST endpoint layer and bidirectional WebSocket event distributor.',
          technologies: ['Node.js', 'Express.js', 'Socket.IO', 'RESTful Routing'],
          keyDetails: [
            'REST endpoints: /api/device/status, /api/alerts/sos, /api/sensor/data, /api/device/reset',
            'Socket.IO broadcasts events: deviceStatus, sensorData, sosAlert, alertResolved',
            'Automated in-memory fallback store maintains service availability if MongoDB is offline',
          ],
        },
        {
          name: 'Persistence & Command Surface',
          badge: 'MongoDB Atlas + Dual-Route Dashboard',
          description: 'Document database persisting device records and dual-route operational frontend.',
          technologies: ['MongoDB', 'Mongoose ODM', 'Leaflet Map', 'HTML5 Canvas'],
          keyDetails: [
            'Mongoose schemas for Device, SensorData, and Alert collections with incident timestamps',
            'Dual-route UI: /user for personal monitoring and /admin for Emergency Command Center',
            'Real-time Canvas graphing rendering dynamic 6-axis MPU6050 waveforms',
          ],
        },
      ],
      dataFlowSteps: [
        'Physical tactile button press triggers falling-edge hardware interrupt (GPIO 4) on microcontroller.',
        'Microcontroller sets local alarms (buzzer ON, LED RED) and dispatches HTTP POST /api/alerts/sos over Wi-Fi.',
        'Companion client detects panic state and activates navigator.geolocation.watchPosition high-accuracy stream.',
        'Express backend updates MongoDB device model to EMERGENCY and creates an immutable Alert record.',
        'Socket.IO event bus broadcasts sosAlert payload to connected Admin Emergency Command Center.',
        'Command Center places live coordinates on Leaflet map and plots live MPU6050 sensor waveforms.',
      ],
    },
    technologies: [
      { name: 'Arduino C++', category: 'Hardware/IoT', role: 'Embedded firmware', purpose: 'Hardware interrupt handling, I2C sensor communications, and GPIO actuator signaling.' },
      { name: 'ESP8266 / ESP32', category: 'Hardware/IoT', role: 'Wireless microcontroller', purpose: 'Embedded TCP/IP stack and HTTP POST telemetry transmission over Wi-Fi.' },
      { name: 'MPU6050', category: 'Hardware/IoT', role: '6-Axis motion sensor', purpose: 'Measures 3-axis acceleration and 3-axis angular velocity to detect abnormal movement.' },
      { name: 'Node.js & Express.js', category: 'Backend', role: 'RESTful API gateway', purpose: 'Handles device registration, telemetry ingestion, incident routing, and simulation endpoints.' },
      { name: 'Socket.IO', category: 'Auth & Realtime', role: 'WebSocket broker', purpose: 'Bi-directional event streaming ensuring sub-second emergency event propagation to responders.' },
      { name: 'MongoDB & Mongoose', category: 'Database', role: 'Document database', purpose: 'Persists device states, sensor telemetry streams, and incident audit histories with Atlas replication.' },
      { name: 'Leaflet.js', category: 'GIS/Data', role: 'Interactive map renderer', purpose: 'Visualizes real-time incident coordinates, emergency pins, and responder tracking on the command center.' },
      { name: 'HTML5 Canvas', category: 'Frontend', role: 'Waveform graphics engine', purpose: 'Renders smooth real-time 6-axis accelerometer and gyroscope waveforms with zero DOM overhead.' },
    ],
    myContribution: [
      'Architected and built the dual-role client interface (/user for personal monitoring, /admin for emergency command dispatch).',
      'Implemented the privacy-first "Emergency-Only GPS Lifecycle" using the HTML5 Geolocation API, initiating coordinate tracking strictly upon confirmed SOS trigger.',
      'Engineered the real-time Socket.IO event handler pipeline synchronizing device state (deviceStatus, sensorData, sosAlert, alertResolved) across clients.',
      'Developed and tested Express REST ingestion endpoints (/api/alerts/sos, /api/sensor/data, /api/device/reset) with robust in-memory database fallback handling.',
      'Integrated live MPU6050 sensor telemetry visualization rendering motion waveforms onto an HTML5 Canvas graph.',
      'Connected and calibrated breadboard hardware prototypes, verifying tactile button interrupt routines and buzzer/LED state transitions.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Privacy Preservation vs. Instant Location Access: Continuous background GPS tracking causes user privacy reluctance and rapid smartphone battery depletion.',
        approach:
          'Engineered a state-machine GPS lifecycle where geolocation tracking is completely dormant until an SOS event is confirmed, immediately acquiring high-accuracy coordinates when needed.',
        tradeoff:
          'Requires a 1–2 second warm-up for browser GPS satellite lock upon first trigger, but guarantees zero background battery drain and complete wearer privacy during daily usage.',
      },
      {
        challenge: 'Hardware-to-Cloud Network Latency & Dropouts: Microcontroller Wi-Fi connectivity can fluctuate or drop during transit.',
        approach:
          'Implemented idempotent alert creation with unique incident IDs, backend retry handlers, and in-memory fallback storage so incident logging succeeds even during temporary database disconnections.',
        tradeoff:
          'Requires local memory allocation on the server for temporary queuing until the database connection recovers.',
      },
      {
        challenge: 'Multi-Client Real-Time Synchronization During Panic: High-frequency sensor packets could overwhelm browser rendering during emergency alerts.',
        approach:
          'Decoupled the high-frequency motion telemetry loop from the critical SOS alert dispatch channel, assigning high WebSocket priority to alert notifications.',
        tradeoff:
          'Sensor telemetry is throttled to 10Hz during an emergency to ensure 100% bandwidth availability for coordinates and status updates.',
      },
    ],
    featuresImplemented: [
      'Tactile button interrupt handling on microcontroller GPIO 4',
      'Emergency-Only GPS geolocation acquisition on confirmed panic',
      'Admin Emergency Command Center with live Leaflet map tracking',
      'Real-time Socket.IO event broadcaster (deviceStatus, sensorData, sosAlert, alertResolved)',
      'Live MPU6050 6-axis motion waveform canvas visualization',
      'Express REST APIs for device registration, sensor telemetry, and alert logging',
      'MongoDB Atlas persistence with automatic in-memory failover mode',
    ],
    featuresInProgress: [
      'Cellular GSM SIM800L module fallback for SMS alert dispatch when Wi-Fi is unavailable',
      'Custom miniaturized SMD PCB to replace prototype breadboard wiring',
      'Bluetooth Low Energy (BLE) peripheral protocol integration for automatic smartphone pairing',
    ],
    testingAndVerification: [
      'Simulated device payload generation using automated endpoints (/api/demo/sensor and /api/demo/sos)',
      'Serial monitor debugging and timing verification of hardware button ISR debouncing',
      'End-to-end integration testing of Socket.IO event propagation from trigger to Leaflet map pin render',
      'Database fallback testing verifying uninterrupted operation during simulated MongoDB downtime',
    ],
    resultsAndAchievements: [
      'Winner — 1st Position at MUJ HACX 4.0 Hackathon (Manipal University Jaipur) in the Women’s Safety track',
      'Awarded ₹70,000 cash grant by technical judging panel for prototype execution and system architecture',
      'Successfully demonstrated live hardware button trigger, buzzer activation, and Leaflet map synchronization',
    ],
    knownLimitations: [
      'Hardware device currently depends on available Wi-Fi hotspot or paired phone connectivity (cellular SIM800L module is in development).',
      'GPS precision is dependent on line-of-sight satellite reception and cellular triangulation accuracy in dense indoor basements.',
      'The system provides digital distress dispatch and spatial awareness; it is an assistive technology and does not physically intervene or guarantee personal safety.',
    ],
    futureImprovements: [
      'Complete integration of GSM SIM800L module for independent SMS/GPRS cellular communication without smartphone pairing.',
      'Transition from breadboard prototype to a custom compact SMD PCB wearable form-factor (wristband / pendant).',
      'Bluetooth Low Energy (BLE) peripheral protocol integration for automatic pairing with companion Android/iOS applications.',
    ],
  },
  {
    id: 'gatimaan',
    projectNumber: '02',
    title: 'GATIMAAN',
    subtitle: 'Smart Digital Queue Management & Citizen Facilitation Platform',
    category: 'Full-Stack',
    categoryDomain: 'Enterprise Full-Stack / GovTech & Queue Orchestration',
    tagline: 'An enterprise-grade digital queue orchestration platform designed for government service centers, featuring virtual QR passes, dual-pane operator consoles, and IoT footfall sensing.',
    brief: 'An enterprise-grade digital queue orchestration platform designed for government service centers, featuring virtual QR passes, dual-pane operator consoles, and IoT footfall sensing.',
    featured: true,
    awardBadge: 'Runner-Up — SISTech Hackathon (₹5K)',
    githubUrl: 'https://github.com/siddpuhan/GATIMAAN',
    liveUrl: '',
    demoNote: 'Enterprise full-stack repository with IoT gate firmware & simulator',
    highlights: [
      'Runner-Up at SISTech Hackathon, Bhopal (₹5,000 Cash Prize) with Team Rajdhani in Industry Automation',
      'Authored 8,000+ lines across citizen portal, 65/35 dual-pane operator desk (QueueDesk), & admin command center',
      'Full-stack architecture: React 19, Node.js, Express, Socket.IO, PostgreSQL via Prisma, & Clerk Auth',
      'Room-segregated WebSockets preventing cross-room network saturation during high citizen footfall',
      'Hardware IoT ultrasonic gate counter (ultrasonic.ino + RGB LED) with Node.js SerialPort bridge',
    ],
    problemStatement:
      'High-footfall citizen service centers (e.g., MP Online, Tehsil, SDM, Municipal utilities) experience severe queue congestion, opaque wait times, manual paper token handling, and lack of real-time service counter visibility. Citizens waste hours standing in unorganized lines without knowing when they will be called, while desk operators suffer from disorganized crowd pressure, double-calling collisions, and unmonitored service level agreements (SLAs).',
    targetAudience:
      'Citizens visiting government administrative service centers, counter operators managing high daily case volumes, and facility administrators requiring operational throughput intelligence.',
    objectives: [
      'Replace chaotic physical queues with virtual digital tokens, providing citizens with live smartphone queue progress and QR code passes.',
      'Build a unified, high-efficiency operator desk cockpit (QueueDesk) to eliminate double-calling collisions and streamline citizen handover.',
      'Deliver comprehensive administrative intelligence: real-time footfall telemetry, counter SLA tracking, service catalog configuration, and queue surge prediction.',
      'Integrate hardware gate sensors (ultrasonic footfall counting) to measure real physical crowd entry into administrative facilities.',
    ],
    solutionOverview:
      'GATIMAAN delivers a cohesive, role-aware operational ecosystem. Citizens browse administrative services, issue digital tokens with QR code passes, and track queue progress in real-time on mobile browsers. Desk operators work within a unified 65/35 dual-pane console (QueueDesk) to call next citizens, manage consultation timers, and record completions or no-shows without duplicate call collisions. Administrators monitor live center telemetry, configure service catalogs and physical desks, and inspect physical footfall captured by ultrasonic IoT doorway sensors.',
    userWorkflow: [
      {
        persona: 'Citizen / Visitor',
        roleDescription: 'Individual seeking government administrative services',
        steps: [
          'Discovers active government facilitation services (Revenue, Municipal, Utilities) on the Citizen Portal.',
          'Issues a digital token with a single click, receiving an instant token ID and QR pass.',
          'Tracks live position on /track or /dashboard with dynamic queue timeline and estimated wait countdown.',
          'Receives real-time visual and audio counter callout banner when summoned to a specific desk.',
          'Can cancel token if plans change, freeing queue capacity for other waiting citizens.',
        ],
      },
      {
        persona: 'Counter Operator',
        roleDescription: 'Service desk agent attending to citizens at physical counters',
        steps: [
          'Logs into /admin/queue and opens an active counter shift (CounterSession).',
          'Clicks CALL NEXT CITIZEN; atomic database transaction locks the next ticket and broadcasts callout.',
          'Starts service stopwatch upon citizen arrival, tracking SLA consultation time.',
          'Completes ticket session (COMPLETED) or triggers separated NO-SHOW / SKIP action if citizen is absent.',
        ],
      },
      {
        persona: 'Center Administrator',
        roleDescription: 'Facility superintendent supervising overall center operations',
        steps: [
          'Reviews Center Command Overview (/admin) for live active desks, queue depth, and SLA compliance.',
          'Dynamically creates, edits, or deactivates services and counter assignments in Services & Counters Management.',
          'Evaluates real-time doorway footfall and hourly peak patterns from ultrasonic sensors on Footfall Intelligence (/admin/footfall).',
        ],
      },
    ],
    systemArchitecture: {
      summary:
        'A monorepo architecture separating React 19 web frontend, Node.js/Express API with Socket.IO, PostgreSQL database managed via Prisma ORM, and an IoT serial sensor bridge.',
      diagramType: 'gatimaan-queue',
      layers: [
        {
          name: 'Citizen & Operator Surface Layer',
          badge: 'React 19 + TypeScript + Vite + TailwindCSS v4',
          description: 'Mobile-first citizen tracking portal and desktop-optimized operator and administrator consoles.',
          technologies: ['React 19', 'TypeScript', 'TailwindCSS v4', 'Lucide Icons', 'Clerk React'],
          keyDetails: [
            'Citizen Portal with real-time token tracking, QR passes, and cancellation modals',
            'QueueDesk 65/35 dual-pane operator cockpit with call-next, shift timer, and separated no-show controls',
            'Admin Command Centre with Footfall Intelligence, Counters Management, and Services Management',
          ],
        },
        {
          name: 'Real-Time API & Event Broadcast Gateway',
          badge: 'Node.js + Express.js + Socket.IO Server',
          description: 'High-concurrency REST endpoints and room-segregated WebSocket event broadcaster.',
          technologies: ['Node.js', 'Express.js', 'Socket.IO', 'Clerk SDK', 'EventBus'],
          keyDetails: [
            'Clerk JWT authentication middleware enforcing CUSTOMER, OPERATOR, and ADMIN role boundaries',
            'Socket.IO room segregation: ticket:{id}, queue:{serviceId}, footfall, prediction, services, user:{userId}',
            'Real-time events: ticket:updated, queue:updated, footfall:updated, prediction:updated, service:updated',
          ],
        },
        {
          name: 'Relational Persistence & Transaction Engine',
          badge: 'PostgreSQL + Prisma ORM',
          description: 'ACID-compliant relational database enforcing transactional integrity across queue transitions.',
          technologies: ['PostgreSQL', 'Prisma ORM', 'Relational Schemas', 'Database Indexing'],
          keyDetails: [
            '10 verified relational models: User, Service, Counter, CounterSession, Ticket, Device, FootfallEvent, FootfallSnapshot, PredictionSnapshot, Notification',
            'Atomic sequence incrementation preventing duplicate token issuance under concurrent requests',
            'Audit timestamps for wait times, consultation durations, and operator throughput',
          ],
        },
        {
          name: 'IoT Hardware Gate & Serial Bridge',
          badge: 'Arduino Uno + Ultrasonic Sensor + Node.js SerialPort',
          description: 'Hardware doorway sensing unit measuring real-time citizen entry and exit footfall.',
          technologies: ['Arduino C++', 'HC-SR04 Ultrasonic', 'RGB LED', 'Node.js SerialPort'],
          keyDetails: [
            'Ultrasonic sensor measuring reflection timing to detect physical doorway crossings',
            'Common-cathode RGB LED signaling device status (blinking green ready state, solid red detection)',
            'Node.js SerialPort bridge reading serial pulses and dispatching authenticated FootfallEvent APIs',
          ],
        },
      ],
      dataFlowSteps: [
        'Citizen requests service token; backend executes atomic sequence increment in PostgreSQL transaction (status: WAITING).',
        'Internal EventBus emits ticket:updated and queue:updated events to Socket.IO room subscribers.',
        'Operator triggers CALL NEXT; ticket transitions to CALLED with counterId, broadcasting counter callout to citizen.',
        'Citizen arrives; operator starts session, transitioning ticket to SERVING with active SLA stopwatch.',
        'Ultrasonic doorway sensor detects physical entry, sending pulse via serial bridge to log FootfallEvent.',
        'Operator marks COMPLETED; audit ledger persists wait time and service duration for SLA analytics.',
      ],
    },
    technologies: [
      { name: 'React 19 & TypeScript', category: 'Frontend', role: 'Component architecture', purpose: 'Powers the citizen portal and operator cockpit with reactive components, strict DTO typing, and fluid UI updates.' },
      { name: 'Tailwind CSS v4', category: 'Frontend', role: 'Utility design system', purpose: 'Provides responsive layouts, accessible contrast tokens, and dense dashboard utility styling.' },
      { name: 'Node.js & Express', category: 'Backend', role: 'RESTful API gateway', purpose: 'Handles ticket lifecycle state transitions, desk shift sessions, and administrative routes.' },
      { name: 'Socket.IO', category: 'Auth & Realtime', role: 'WebSocket broker', purpose: 'Manages room-isolated WebSockets to notify citizens of queue advances and operators of new arrivals without polling.' },
      { name: 'Prisma ORM & PostgreSQL', category: 'Database', role: 'Relational data store', purpose: 'Enforces foreign key integrity, schema migrations, and ACID transaction isolation for sequence numbers.' },
      { name: 'Clerk Authentication', category: 'Auth & Realtime', role: 'Identity provider', purpose: 'Manages user registration, JWT session verification, and role-based route guard enforcement (CUSTOMER, OPERATOR, ADMIN).' },
      { name: 'Arduino Uno & C++', category: 'Hardware/IoT', role: 'Hardware firmware', purpose: 'Reads ultrasonic reflection timing to detect gate crossings, signaling state via common-cathode RGB LEDs.' },
      { name: 'Node.js SerialPort', category: 'Hardware/IoT', role: 'Hardware serial bridge', purpose: 'Relays USB serial pulses from the Arduino gate counter into authenticated cloud FootfallEvent REST APIs.' },
    ],
    myContribution: [
      'Authored extensive frontend redesign across citizen-facing portal and operator command desk (over 8,000+ lines in git history).',
      'Built the unified 65/35 dual-pane QueueDesk.tsx operator console with shift controls, call-next logic, and separated no-show actions.',
      'Implemented administrative management interfaces: CountersManagement.tsx, ServicesManagement.tsx, AdminOverviewPage.tsx, and AdminSidebar.tsx.',
      'Created the IoT Footfall intelligence interface (FootfallIntelligencePage.tsx) and authored Arduino hardware firmware (ultrasonic.ino) with common-cathode RGB LED indicators.',
      'Built the serial hardware bridge (arduino-bridge/index.js) using Node.js SerialPort to relay microcontroller gate sensor triggers to the cloud API.',
      'Integrated Clerk role-aware route guards (ProtectedRoute.tsx) and Socket.IO hooks (useRealtime.ts).',
      'Contributed backend test suites (auth.test.ts, queue.test.ts) and Prisma database seed routines.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Eliminating Double-Calling Race Conditions in Queues: Multiple desk operators clicking "Call Next" simultaneously could attempt to claim the same waiting ticket.',
        approach:
          'Enforced atomic PostgreSQL database transactions with state transition validation, and unified all operator workflows into a single canonical QueueDesk console.',
        tradeoff:
          'Transactions serialize queue head dequeuing, adding a brief sub-10ms lock during peak simultaneous desk calls, but guaranteeing absolute zero double-calling.',
      },
      {
        challenge: 'Real-Time Network Saturation from High Footfall: Broadcasting every ultrasonic sensor pulse or ticket update globally would flood all connected browsers.',
        approach:
          'Architected Socket.IO room subscriptions (ticket:{id}, queue:{serviceId}, footfall) so clients only receive events relevant to their specific ticket or counter.',
        tradeoff:
          'Requires clients to manage room join/leave lifecycle on component mount/unmount.',
      },
      {
        challenge: 'Zero-Friction Citizen Experience Without App Installation: Rural citizens frequently lack smartphone storage for downloading native mobile applications.',
        approach:
          'Engineered a lightweight mobile web progressive experience with instant local storage ticket caching and QR code token display.',
        tradeoff:
          'Requires mobile browsers to support modern JavaScript and WebSockets for real-time callout updates.',
      },
    ],
    featuresImplemented: [
      'Digital token issuance with instant token ID and QR pass',
      'Citizen live token tracking (/track and /dashboard) with countdown',
      'Self-service ticket cancellation modal',
      '65/35 dual-pane QueueDesk operator console with shift timer',
      'Real-time Socket.IO room broadcaster with 6 verified event types',
      'Prisma database schema with 10 verified relational models',
      'Clerk role-based authentication (CUSTOMER, OPERATOR, ADMIN) with ProtectedRoute',
      'Ultrasonic IoT doorway sensor firmware with common-cathode RGB LED indicator',
      'Serial bridge relaying physical hardware footfall counts into cloud database',
      'Services and Counters dynamic catalog management',
    ],
    featuresInProgress: [
      'Automated WhatsApp notification integration using Meta Cloud API for instant token calling alerts',
      'Thermal kiosk printer integration via WebUSB / ESC-POS for physical paper token slips',
      'Machine learning-driven queue ETA prediction model based on historical hourly service turnaround logs',
    ],
    testingAndVerification: [
      'Automated integration testing with Node Test Runner / TSX covering authentication guards and queue state transitions',
      'Database seed validation simulating multiple service categories, counters, and concurrent tickets',
      'Hardware bench testing of ultrasonic distance thresholds and serial baud communication',
    ],
    resultsAndAchievements: [
      'Runner-Up at SISTech Hackathon, Bhopal with Team Rajdhani in the Industry Automation track',
      'Awarded ₹5,000 cash prize for engineering a complete queue automation platform with working IoT gate',
      'Verified full-stack monorepo with production-ready TypeScript DTOs and Prisma migrations',
    ],
    knownLimitations: [
      'Physical ultrasonic gate sensor requires fixed doorway mounting and can miscount if multiple individuals pass simultaneously in tight clusters.',
      'SMS notification delivery depends on third-party telephony gateway latency and network operator balance.',
    ],
    futureImprovements: [
      'Automated WhatsApp notification integration using Meta Cloud API for instant token calling alerts.',
      'Thermal kiosk printer integration via WebUSB / ESC-POS for physical paper token slips.',
      'Machine learning-driven queue ETA prediction model based on historical hourly service turnaround logs.',
    ],
  },
  {
    id: 'krishilink',
    projectNumber: '03',
    title: 'KRISHILINK',
    subtitle: 'Bilingual Farmer-to-Buyer Direct Agricultural Marketplace',
    category: 'Mobile & Cloud',
    categoryDomain: 'Mobile & Cloud / AgriTech Marketplace',
    tagline: 'A bilingual (Hindi & English) mobile marketplace built with React Native and Firebase, eliminating middlemen by directly linking smallholder farmers with crop buyers.',
    brief: 'A bilingual (Hindi & English) mobile marketplace built with React Native and Firebase, eliminating middlemen by directly linking smallholder farmers with crop buyers.',
    featured: true,
    awardBadge: 'Rural AgriTech Platform',
    githubUrl: 'https://github.com/aryamatomar/KrishiLink',
    liveUrl: '',
    demoNote: 'React Native & Expo mobile codebase with Firebase backend',
    highlights: [
      'Bilingual mobile architecture supporting full Hindi & English localization with instant runtime toggle',
      'Authored dynamic Buyer Marketplace: BuyerDashboardScreen, BuyerOrdersScreen, & CartScreen',
      'Engineered end-to-end multi-step checkout workflow in CheckoutScreen.tsx and checkout.ts',
      'Built real-time order lifecycle tracking in OrderTrackingScreen.tsx and orders.ts',
      'Role-based authentication & navigation separating Farmer and Buyer stacks via Cloud Firestore',
    ],
    problemStatement:
      'Smallholder farmers in India suffer severe economic exploitation by agricultural middlemen and brokers who extract heavy commissions (often 15–30%), manipulate market prices, and delay payments. Furthermore, most existing agritech digital platforms fail in rural areas because they are complex, English-only, require high bandwidth, and do not offer intuitive end-to-end purchasing and delivery tracking for wholesale buyers.',
    targetAudience:
      'Smallholder rural farmers seeking fair market prices for their harvests, and wholesale crop purchasers, food processors, and retailers seeking verified direct agricultural supply.',
    objectives: [
      'Disintermediate agricultural crop trading by providing smallholder farmers with a direct digital storefront to list harvests with verified prices.',
      'Overcome rural digital literacy barriers by building a fully bilingual (Hindi & English) mobile user interface with instant language switching.',
      'Deliver a complete, dynamic buyer purchasing flow: crop discovery, shopping cart management, multi-step checkout, and real-time order lifecycle tracking.',
      'Ensure mobile accessibility across diverse Android and iOS hardware via React Native and Expo.',
    ],
    solutionOverview:
      'KrishiLink is a cross-platform mobile application built with React Native, Expo, and TypeScript, backed by Google Firebase. It disintermediates agricultural trading by allowing farmers to list crop harvests directly with transparent pricing and quantities in either Hindi or English. Wholesale and retail buyers discover produce, add lots to a multi-farmer shopping cart, complete checkout with delivery addresses, and track order fulfillment across distinct milestone stages in real time.',
    userWorkflow: [
      {
        persona: 'Smallholder Farmer',
        roleDescription: 'Agricultural producer listing harvested crops',
        steps: [
          'Registers on mobile app, selects Farmer role, and chooses preferred language (Hindi or English).',
          'Accesses Farmer Dashboard (FarmerDashboardScreen.tsx) to list crop harvests with grade, quantity (kg/quintal), price, and location.',
          'Monitors incoming buyer purchase requests in real-time via Cloud Firestore snapshot listeners.',
          'Confirms harvest preparation and flags shipment dispatch.',
        ],
      },
      {
        persona: 'Produce Buyer / Wholesale Merchant',
        roleDescription: 'Commercial purchaser buying crops in bulk',
        steps: [
          'Registers on mobile app, selects Buyer role, and browses live crop directory (BuyerDashboardScreen.tsx).',
          'Filters by crop category (Grains, Pulses, Oilseeds), views farmer credibility, and inspects pricing.',
          'Adds selected crop batches to cart (CartScreen.tsx) and modifies required quantities.',
          'Advances through multi-step checkout (CheckoutScreen.tsx), entering delivery location and payment mode.',
          'Tracks live shipment milestones on OrderTrackingScreen.tsx (PENDING -> CONFIRMED -> DISPATCHED -> DELIVERED).',
        ],
      },
    ],
    systemArchitecture: {
      summary:
        'A 4-tier mobile cloud architecture leveraging React Native with Expo, custom i18n translation engine, Firebase Auth, and Cloud Firestore document persistence.',
      diagramType: 'krishilink-marketplace',
      layers: [
        {
          name: 'Mobile Presentation & Navigation Layer',
          badge: 'React Native + Expo + React Navigation',
          description: 'Cross-platform mobile client featuring role-specific navigation trees and responsive layouts.',
          technologies: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'Lucide Icons'],
          keyDetails: [
            'Dynamic Root Navigator conditionally mounting FarmerNavigator or BuyerNavigator based on user role',
            'Auth screens: LoginScreen, RegisterScreen, RoleSelectScreen',
            'Screens: BuyerDashboardScreen, BuyerOrdersScreen, CartScreen, CheckoutScreen, OrderTrackingScreen, FarmerDashboardScreen',
          ],
        },
        {
          name: 'Internationalization & Identity Context',
          badge: 'Custom i18n Engine + LanguageProvider',
          description: 'Runtime localization framework supporting full Hindi and English operation with instant toggle.',
          technologies: ['React Context', 'i18n Translation Engine', 'AsyncStorage', 'LanguageToggleButton'],
          keyDetails: [
            'Complete translation dictionaries: en.json (4.8KB) and hi.json (8.1KB)',
            'LanguageProvider maintains persistent language choice across app relaunches',
            'useAuth hook managing reactive authentication state and Firestore user claims',
          ],
        },
        {
          name: 'Cloud Backend & Security Layer',
          badge: 'Google Firebase Authentication & Rules',
          description: 'Managed identity provider and granular security rules protecting user data.',
          technologies: ['Firebase Auth', 'Firestore Security Rules', 'JWT Claims', 'Firebase Storage'],
          keyDetails: [
            'Email/password authentication with encrypted session tokens',
            'Firestore security rules restricting crop updates strictly to owner farmers',
            'Buyer order placement security preventing unauthorized price or quantity tampering',
          ],
        },
        {
          name: 'Document Persistence & Order State Machine',
          badge: 'Cloud Firestore Document Collections',
          description: 'NoSQL document database storing user profiles, crop listings, carts, and order lifecycles.',
          technologies: ['Cloud Firestore', 'Real-time Snapshots', 'Offline Cache', 'NoSQL Models'],
          keyDetails: [
            'users/{uid}: { uid, role, name, phone, createdAt }',
            'crops/{cropId}: { farmerId, title, category, quantity, pricePerKg, location, createdAt }',
            'orders/{orderId}: { buyerId, farmerId, items, totalAmount, status, deliveryAddress, timestamps }',
          ],
        },
      ],
      dataFlowSteps: [
        'User registers; Firebase Auth creates credentials and stores role claim in users/{uid} collection.',
        'Root Navigator evaluates user profile and conditionally mounts FarmerNavigator or BuyerNavigator.',
        'Farmer posts harvest listing; Firestore updates crops collection with real-time listeners notifying buyers.',
        'Buyer adds crops to cart and initiates checkout; checkout.ts validates stock and writes order document.',
        'Order status progression (PENDING -> CONFIRMED -> DISPATCHED -> DELIVERED) streams to OrderTrackingScreen.',
      ],
    },
    technologies: [
      { name: 'React Native & Expo', category: 'Mobile & Cloud', role: 'Mobile application framework', purpose: 'Cross-platform mobile development delivering native performance across Android and iOS devices.' },
      { name: 'TypeScript', category: 'Frontend', role: 'Type safety system', purpose: 'Provides end-to-end type safety for data models (User, Crop, CartItem, Order, OrderStatus), eliminating runtime bugs.' },
      { name: 'Google Firebase Auth', category: 'Auth & Realtime', role: 'Managed authentication', purpose: 'Handles session tokens, email/password validation, and credential persistence.' },
      { name: 'Cloud Firestore', category: 'Database', role: 'Real-time document database', purpose: 'Provides low-latency data synchronization and offline caching for rural mobile clients.' },
      { name: 'React Navigation', category: 'Mobile & Cloud', role: 'Routing & navigation', purpose: 'Manages separate, protected navigation trees (AuthNavigator, FarmerNavigator, BuyerNavigator).' },
      { name: 'Custom i18n Engine', category: 'Internationalization', role: 'Localization runtime', purpose: 'Enables instant runtime language toggling between Hindi and English without application restart.' },
    ],
    myContribution: [
      'Designed and built the complete dynamic Buyer Marketplace experience (BuyerDashboardScreen.tsx, BuyerOrdersScreen.tsx, CartScreen.tsx).',
      'Implemented the end-to-end multi-step checkout workflow in CheckoutScreen.tsx (487 lines) and checkout.ts.',
      'Engineered the real-time order lifecycle tracking system in OrderTrackingScreen.tsx (360 lines) and service logic in orders.ts (319 lines).',
      'Architected responsive layouts across diverse screen densities and handled bilingual translation key bindings (en.json, hi.json).',
      'Integrated Firestore real-time listeners for order milestone status updates and cart persistence.',
    ],
    engineeringChallenges: [
      {
        challenge: 'Role-Aware Dynamic Navigation Routing: Handling two entirely different user personas (Farmer vs Buyer) within a single codebase without state leaks.',
        approach:
          'Built a centralized Root Navigator that evaluates the Firestore user profile and conditionally mounts FarmerNavigator or BuyerNavigator with separate stack histories.',
        tradeoff:
          'Requires clean tear-down of navigation state upon user logout to prevent unauthorized access.',
      },
      {
        challenge: 'Instant Bilingual Localization on Mobile: Switching between Hindi (Devanagari script) and English often causes text wrapping or layout distortion on narrow screens.',
        approach:
          'Built a custom LanguageProvider context with responsive text sizing and strict key-fallback resolution.',
        tradeoff:
          'Maintaining parallel translation dictionaries (en.json, hi.json) requires strict key synchronization for every new UI component.',
      },
      {
        challenge: 'Cart & Inventory Concurrency: Preventing checkout errors when multiple buyers attempt to purchase the same farmer\'s batch simultaneously.',
        approach:
          'Integrated transactional verification in checkout.ts to validate stock availability before finalizing order documents.',
        tradeoff:
          'Requires an extra Firestore read before confirming the order write operation.',
      },
    ],
    featuresImplemented: [
      'Role-based login and registration (Farmer vs Buyer)',
      'Full bilingual localization in Hindi and English with instant toggle',
      'Farmer crop listing and harvest management dashboard',
      'Dynamic Buyer produce browsing and category filtering',
      'Multi-item shopping cart with quantity adjustments',
      'Multi-step checkout with delivery address and payment selection',
      'Real-time order lifecycle tracking (PENDING, CONFIRMED, DISPATCHED, DELIVERED)',
      'Cloud Firestore real-time document listeners',
    ],
    featuresInProgress: [
      'Direct buyer-to-farmer in-app messaging and price negotiation interface',
      'Integration of government Mandi API (Agmarknet) for live crop market price benchmarking',
      'Offline-first cache with SQLite / WatermelonDB for rural areas with intermittent connectivity',
    ],
    testingAndVerification: [
      'Cross-device mobile testing on physical Android devices via Expo Go',
      'End-to-end role switching and authentication flow verification',
      'Firestore security rule testing preventing buyers from modifying crop listings',
    ],
    resultsAndAchievements: [
      'Engineered a working bilingual mobile MVP with working Firebase Auth, Firestore real-time subscriptions, and checkout',
      'Demonstrated direct farmer-to-buyer crop transaction flows eliminating intermediary brokerage',
      'Verified mobile codebase with TypeScript models and structured React Navigation stacks',
    ],
    knownLimitations: [
      'Currently relies on an internet connection for Firebase authentication and Firestore syncing (offline-first sync is in planning).',
      'Payment flow is currently simulated / cash-on-delivery oriented; digital payment gateway (Razorpay / UPI) integration is in progress.',
    ],
    futureImprovements: [
      'Integration of official Government Mandi API (Agmarknet) for live crop market price benchmarks.',
      'Direct in-app buyer-to-farmer audio or chat messaging for harvest negotiation.',
      'Integration of Razorpay / UPI SDK for instant online agricultural escrow payments.',
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
