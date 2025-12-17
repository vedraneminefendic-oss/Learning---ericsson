
import React from 'react';
import { VEDRAN_PROFILE } from '../constants';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center animate-fadeIn relative py-2">
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
        `}
      </style>

      <div className="relative mb-8 group animate-scaleIn shrink-0">
        <div className="absolute inset-[-12px] rounded-full border border-dashed border-[#002561]/20 animate-rotate-slow"></div>
        <div className="relative z-10 w-44 h-44 md:w-56 md:h-56 p-1.5 bg-white rounded-full shadow-2xl transition-all duration-700 group-hover:scale-[1.05]">
          <div className="w-full h-full rounded-full overflow-hidden border border-slate-50">
            <img 
              src={VEDRAN_PROFILE.photoUrl} 
              alt={VEDRAN_PROFILE.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
        <div className="absolute -bottom-1 right-4 w-12 h-12 bg-[#fabd00] rounded-full flex items-center justify-center shadow-2xl z-20 transform rotate-12 animate-float border-2 border-white">
          <span className="text-xl">💡</span>
        </div>
      </div>
      
      <div className="max-w-4xl px-6">
        <p className="text-[9px] font-black text-[#002561] tracking-[0.6em] uppercase mb-2 opacity-50">
          Learning Experience Design
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#002561] mb-2 tracking-tighter uppercase leading-none">
          {VEDRAN_PROFILE.name.split(' ')[0]} <span className="text-[#fabd00]">{VEDRAN_PROFILE.name.split(' ')[1]}.</span>
        </h1>
        
        <p className="text-md md:text-xl text-slate-800 font-bold tracking-tight italic mb-2">
          Maybe your future Learning Experience Designer?
        </p>

        <p className="text-slate-500 mb-8 text-sm max-w-md mx-auto leading-relaxed font-medium">
          Bridging <span className="text-[#002561] font-bold">behavioral science</span> and <span className="text-[#002561] font-bold">HCM tech</span> to drive Ericsson performance.
        </p>

        <button 
          onClick={onStart}
          className="group relative bg-[#002561] text-white font-black py-5 px-12 rounded-sm shadow-xl transition-all hover:-translate-y-1 active:scale-95"
        >
          <span className="relative z-10 tracking-[0.4em] text-xs">EXPLORE JOURNEY</span>
          <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
