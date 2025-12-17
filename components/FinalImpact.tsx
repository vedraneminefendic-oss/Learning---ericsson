
import React from 'react';
import { VEDRAN_PROFILE } from '../constants';

const FinalImpact: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const emailSubject = encodeURIComponent("Wow, just wow. When can we talk?");
  const emailBody = encodeURIComponent("Hi Vedran,\n\nWe explored your interactive app and want to discuss the LXD role.");

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center animate-fadeIn py-2 overflow-hidden">
      <div className="text-center mb-6 shrink-0">
        <div className="w-10 h-0.5 bg-[#002561] mx-auto mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-black text-[#002561] uppercase tracking-tight">Ready for the next step.</h2>
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[8px] mt-1">Göteborg, Sweden</p>
      </div>

      <div className="bg-white rounded shadow-xl border border-slate-100 p-6 md:p-10 mb-8 shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-black text-[#002561] mb-3 leading-tight">An LXD focused on Behavioral Impact and Technical Efficiency.</h3>
            <p className="text-slate-600 text-[11px] leading-relaxed mb-6">
              "Vedran combines a background in Behavioral Science with practical technical expertise from the Cornerstone and CatalystOne ecosystems. He focuses on creating learning solutions that are technically sound, scalable, and designed to drive actual performance shifts within global teams."
            </p>
            <div className="flex flex-wrap gap-1.5">
              {VEDRAN_PROFILE.skills.map(skill => (
                <span key={skill} className="text-[8px] font-black uppercase text-slate-400 border border-slate-100 px-1.5 py-0.5 rounded-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded overflow-hidden border-4 border-slate-50 shadow-md">
               <img src={VEDRAN_PROFILE.photoUrl} alt={VEDRAN_PROFILE.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center shrink-0">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-[8px] mb-4">Would you like to connect?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a href={`mailto:vedran.eminefendic@gmail.com?subject=${emailSubject}&body=${emailBody}`} 
            className="bg-[#002561] text-white font-black py-4 px-10 rounded-sm shadow-xl text-[10px] uppercase tracking-widest min-w-[200px] text-center">
            Email Vedran
          </a>
          <a href={`tel:${VEDRAN_PROFILE.phone}`} 
            className="bg-white text-[#002561] border border-[#002561] font-black py-4 px-10 rounded-sm text-[10px] uppercase tracking-widest min-w-[200px] text-center">
            {VEDRAN_PROFILE.phone}
          </a>
        </div>
        <button onClick={onBack} className="text-[#002561] opacity-50 font-black text-[8px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5">
          ← Revisit Principles
        </button>
      </div>
    </div>
  );
};

export default FinalImpact;
