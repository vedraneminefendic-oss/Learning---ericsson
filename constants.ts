
import { UserProfile, QuizQuestion } from './types';

export interface ExtendedUserProfile extends UserProfile {
  phone: string;
}

export const VEDRAN_PROFILE: ExtendedUserProfile = {
  name: "Vedran Eminefendic",
  photoUrl: "https://raw.githubusercontent.com/vedraneminefendic-oss/Learning---ericsson/37ecd72de8484df3bbaf9f450242c41647ce5666/vedran.jpg",
  role: "Behavioral Scientist & Learning Architect",
  location: "Gothenburg, SE",
  phone: "+46735134547",
  skills: ["Behavioral Science", "LMS/LXP Ecosystems", "Stakeholder Collaboration", "Rapid Prototyping"],
  background: "A unique blend of behavioral science insights and technical expertise from global HR-tech leaders Cornerstone OnDemand and CatalystOne."
};

export const VEDRAN_QUIZ: QuizQuestion[] = [
  {
    question: "What is Vedran's approach to creating learning that actually sticks?",
    options: ["Fancy visuals", "Behavioral Science & Nudging", "Long documentation", "Mandatory completion"],
    correctIndex: 1,
    funFact: "Correct. With a background in Behavioral Science, Vedran focuses on reducing 'cognitive load' so the brain can actually process and retain new info."
  },
  {
    question: "Vedran has worked 'under the hood' of Cornerstone and CatalystOne. Why does this matter?",
    options: ["He likes software", "He understands how to align design with system constraints", "He can fix servers", "He prefers digital tools"],
    correctIndex: 1,
    funFact: "Exactly. Knowing the technical limits of the LMS means he designs solutions that are actually deployable and scalable globally."
  },
  {
    question: "How does Vedran contribute to a team of 17 LXDs?",
    options: ["Works in isolation", "Collaborative problem-solving and SME management", "Just following instructions", "Focusing only on aesthetics"],
    correctIndex: 1,
    funFact: "Bingo. He views the LXD role as a bridge between technical SMEs and the end-user, ensuring clear communication at every step."
  }
];

export const ERICSSON_CONTEXT = {
  roleName: "Learning Experience Designer",
  team: "17-person Global LXD Team",
  project: "LXD Selection",
  brandColor: "#002561",
  accentColor: "#fabd00"
};
