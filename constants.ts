
import { UserProfile, QuizQuestion } from './types';

export interface ExtendedUserProfile extends UserProfile {
  phone: string;
}

export const VEDRAN_PROFILE: ExtendedUserProfile = {
  name: "Vedran Eminefendic",
  photoUrl: "https://raw.githubusercontent.com/vedraneminefendic-oss/Learning---ericsson/37ecd72de8484df3bbaf9f450242c41647ce5666/vedran.jpg",
  role: "Behavioral Scientist & Learning Architect",
  location: "Gothenburg, SE",
  phone: "+46 (0) 72 320 04 50",
  skills: ["Behavioral Science", "HCM Tech Expert", "Stakeholder Collaboration", "User-Centered Design"],
  background: "A unique blend of behavioral science insights and technical expertise from global HR-tech leaders Cornerstone OnDemand and CatalystOne."
};

export const VEDRAN_QUIZ: QuizQuestion[] = [
  {
    question: "What is Vedran's secret ingredient for creating learning that actually sticks?",
    options: ["Just fancy graphics", "Behavioral Science & Nudging", "Extremely long PDF files", "Pure luck"],
    correctIndex: 1,
    funFact: "Exactly! With a degree in Behavioral Science, Vedran designs learning based on how the brain actually functions, not just what looks good."
  },
  {
    question: "Vedran worked at Cornerstone and CatalystOne. What does that mean for Ericsson?",
    options: ["He can make coffee", "He understands complex learning platforms (LMS/LXP) deeply", "He likes corners", "Nothing"],
    correctIndex: 1,
    funFact: "Bingo! Having mastered multiple HCM systems 'under the hood', he knows how to make technology work for the user, not the other way around."
  },
  {
    question: "How does Vedran view the role of LXD within a team of 17 people?",
    options: ["A lone wolf", "A proactive team player who challenges the status quo", "Someone who just says yes", "An administrator"],
    correctIndex: 1,
    funFact: "Precisely! He thrives on collaboration, working closely with cross-functional teams to achieve Ericsson's global objectives."
  }
];

export const ERICSSON_CONTEXT = {
  roleName: "Learning Experience Designer",
  team: "17-person Global LXD Team",
  project: "Connect to Learn",
  brandColor: "#002561",
  accentColor: "#fabd00"
};
