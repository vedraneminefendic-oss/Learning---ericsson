
import React from 'react';
import { VEDRAN_PROFILE, ERICSSON_CONTEXT } from '../constants';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 animate-fadeIn">
      <div className="relative mb-10">
        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
          <img 
            src={VEDRAN_PROFILE.photoUrl} 
            alt={VEDRAN_PROFILE.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#fabd00] rounded-xl -z-0 opacity-20"></div>
        <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#002561] rounded-full -z-0 opacity-10"></div>
      </div>
      
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black text-[#002561] mb-2 tracking-tighter">
          {VEDRAN_PROFILE.name.toUpperCase()}
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-light mb-8 uppercase tracking-[0.2em]">
          Behavioral Scientist <span className="text-[#fabd00] mx-2">•</span> Learning Architect
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {VEDRAN_PROFILE.skills.slice(0, 4).map(skill => (
            <span key={skill} className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-bold shadow-sm">
              {skill}
            </span>
          ))}
        </div>

        <button 
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-[#002561] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-xl hover:bg-[#00348a]"
        >
          EXPLORE THE JOURNEY
          <svg className="w-5 h-5 ml-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
