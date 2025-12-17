
export interface UserProfile {
  name: string;
  photoUrl: string;
  role: string;
  location: string;
  skills: string[];
  background: string;
}

export enum CourseStep {
  WELCOME = 'WELCOME',
  VEDRAN_QUIZ = 'VEDRAN_QUIZ',
  ERICSSON_FIT = 'ERICSSON_FIT',
  STAKEHOLDERS = 'STAKEHOLDERS',
  TECH_FLOW = 'TECH_FLOW',
  VALUES = 'VALUES',
  FINAL_IMPACT = 'FINAL_IMPACT'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  funFact: string;
}
