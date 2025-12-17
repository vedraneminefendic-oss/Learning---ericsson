
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
  STAKEHOLDER_ALIGNMENT = 'STAKEHOLDER_ALIGNMENT',
  LEARNER_JOURNEY = 'LEARNER_JOURNEY',
  AI_WORKFLOW = 'AI_WORKFLOW',
  FINAL_IMPACT = 'FINAL_IMPACT'
}
