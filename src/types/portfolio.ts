export interface ArchitectureLayer {
  name: string;
  badge: string;
  description: string;
  technologies: string[];
  keyDetails: string[];
}

export interface UserWorkflowStep {
  persona: string;
  roleDescription?: string;
  steps: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Hardware/IoT' | 'Auth & Realtime' | 'Mobile & Cloud' | 'Internationalization' | 'GIS/Data' | string;
  role: string;
  purpose?: string;
}

export interface ProjectData {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Geospatial & Systems' | 'IoT & Hardware' | 'Safety Platform' | string;
  categoryDomain: string;
  tagline: string;
  brief: string;
  featured: boolean;
  awardBadge?: string;
  githubUrl?: string;
  liveUrl?: string;
  demoNote?: string;
  highlights: string[];
  
  // Technical Case Study Fields
  problemStatement: string;
  targetAudience: string;
  objectives: string[];
  solutionOverview: string;
  userWorkflow: UserWorkflowStep[];
  systemArchitecture: {
    summary: string;
    diagramType: 'gatimaan-queue' | 'sentinel-spatial' | 'iot-telemetry' | 'safety-network' | 'krishilink-marketplace' | string;
    layers: ArchitectureLayer[];
    dataFlowSteps: string[];
  };
  technologies: TechnologyItem[];
  myContribution: string[];
  engineeringChallenges: {
    challenge: string;
    approach: string;
    tradeoff: string;
  }[];
  featuresImplemented: string[];
  featuresInProgress: string[];
  testingAndVerification: string[];
  resultsAndAchievements: string[];
  knownLimitations: string[];
  futureImprovements: string[];
  isEditableCaseStudy?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organizer: string;
  location: string;
  position: string;
  prizeAmount?: string;
  category: 'Hackathon' | 'Leadership' | 'Academic';
  track?: string;
  team?: string;
  description: string;
  highlights: string[];
  dateString?: string;
  verified: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    context: string;
    relevance: 'Primary' | 'Secondary';
  }[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  affiliation: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  relevantCoursework: string[];
  academicFocus: string[];
}
