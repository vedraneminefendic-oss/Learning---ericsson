
import React from 'react';
import { VEDRAN_PROFILE } from '../constants';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center animate-fadeIn relative">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(12deg); }
            50% { transform: translateY(-10px) rotate(15deg); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-scaleIn {
            animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-rotate-slow {
            animation: rotate-slow 20s linear infinite;
          }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
        `}
      </style>

      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#002561]/0 via-[#002561]/10 to-[#002561]/0 hidden md:block"></div>
      
      <div className="relative mb-12 mt-8 group animate-scaleIn">
        {/* Animated Status Ring (Micro-interaction) */}
        <div className="absolute inset-[-15px] rounded-full border border-dashed border-[#002561]/20 animate-rotate-slow"></div>
        <div className="absolute inset-[-8px] rounded-full border border-slate-100"></div>

        {/* Profile Image Container with Shadow Lift & Scaling */}
        <div className="relative z-10 w-60 h-60 md:w-80 md:h-80 p-2 bg-white rounded-full shadow-[0_40px_80px_-15px_rgba(0,37,97,0.25)] ring-1 ring-slate-100 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.05] group-hover:shadow-[0_60px_100px_-20px_rgba(0,37,97,0.35)]">
          <div className="w-full h-full rounded-full overflow-hidden border border-slate-50 relative">
            <img 
              src={VEDRAN_PROFILE.photoUrl} 
              alt={`Professional portrait of ${VEDRAN_PROFILE.name}`}
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
        
        <div className="absolute -top-6 -left-6 w-24 h-24 border-t-[3px] border-l-[3px] border-[#fabd00] opacity-30 rounded-tl-3xl"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-[3px] border-r-[3px] border-[#002561] opacity-30 rounded-br-3xl"></div>
        
        <div className="absolute -bottom-2 right-6 w-16 h-16 bg-[#fabd00] rounded-full flex items-center justify-center shadow-2xl z-20 transform rotate-12 animate-float border-4 border-white transition-transform group-hover:scale-110" aria-hidden="true">
          <span className="text-3xl">💡</span>
        </div>
      </div>
      
      <div className="max-w-4xl px-6 overflow-hidden">
        <p className="text-[10px] font-black text-[#002561] tracking-[0.6em] uppercase mb-4 opacity-50 animate-fadeIn delay-1">
          Strategic Learning Architecture
        </p>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#002561] mb-4 tracking-tighter animate-fadeIn delay-1 uppercase leading-[0.9] flex flex-col items-center">
          <span className="block">{VEDRAN_PROFILE.name.split(' ')[0]}</span>
          <span className="block relative">
            {VEDRAN_PROFILE.name.split(' ')[1]}
            <span className="text-[#fabd00]">.</span>
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#fabd00]/20 -z-10 rounded-full"></span>
          </span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-4 animate-fadeIn delay-2">
          <div className="h-px w-8 bg-slate-200"></div>
          <p className="text-lg md:text-2xl text-slate-800 font-bold tracking-tight italic">
            Maybe your future Learning Experience Designer?
          </p>
          <div className="h-px w-8 bg-slate-200"></div>
        </div>

        <p className="text-slate-500 mb-14 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-medium animate-fadeIn delay-3">
          Designing at the intersection of <span className="text-[#002561] font-bold">behavioral science</span> and <span className="text-[#002561] font-bold">HCM technology</span> (Cornerstone & CatalystOne) to drive measurable Ericsson performance.
        </p>

        <button 
          onClick={onStart}
          aria-label="Start the candidate journey"
          className="group relative bg-[#002561] text-white font-black py-6 px-16 rounded-sm shadow-[0_20px_40px_-10px_rgba(0,37,97,0.3)] transition-all hover:shadow-[0_25px_50px_-12px_rgba(0,37,97,0.4)] hover:-translate-y-1 active:scale-95 animate-fadeIn delay-3 focus:outline-none focus:ring-4 focus:ring-[#fabd00]/50"
        >
          <span className="relative z-10 tracking-[0.4em] text-xs">EXPLORE JOURNEY</span>
          <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
