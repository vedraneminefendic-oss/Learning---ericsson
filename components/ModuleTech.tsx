
import React from 'react';

const ModuleTech: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-fadeIn">
      <div className="mb-12 text-center">
        <span className="bg-[#fabd00] text-[#002561] px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Stage 04: Platforms</span>
        <h2 className="text-3xl font-black text-[#002561] mt-4 uppercase">Platforms & Tools</h2>
        <p className="text-slate-500 mt-2 font-medium">Building on top of HCM systems like Cornerstone and CatalystOne.</p>
      </div>

      <div className="bg-white p-10 rounded-sm shadow-xl border border-slate-100 mb-12 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#002561] mb-6">Software Experience</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[#002561] text-xs">CS</div>
                <div>
                  <p className="font-bold text-sm">Cornerstone OnDemand</p>
                  <p className="text-xs text-slate-500">Expert knowledge of LMS/LXP administration and content integration.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[#002561] text-xs">C1</div>
                <div>
                  <p className="font-bold text-sm">CatalystOne</p>
                  <p className="text-xs text-slate-500">Hands-on experience managing and deploying HR-tech solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[#002561] text-xs">AI</div>
                <div>
                  <p className="font-bold text-sm">Generative AI Tools</p>
                  <p className="text-xs text-slate-500">Using AI to speed up drafting, storyboarding, and voiceover work.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#002561] mb-6">Practical Application</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              "Technology should be invisible to the learner. Whether I'm building a path in Cornerstone or a flow in CatalystOne, my goal is to reduce clicks and maximize focus. I use AI to handle the repetitive parts of design so I can spend more time talking to SMEs and testing the content with real users."
            </p>
            <div className="bg-[#002561] p-4 rounded-sm">
              <p className="text-[10px] font-black text-[#fabd00] uppercase tracking-widest mb-1">Key Insight</p>
              <p className="text-white text-xs font-medium italic">"The best learning platform is the one people actually use because it solves their immediate problem."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="bg-[#002561] hover:bg-[#003a94] text-white font-black py-5 px-16 rounded-sm transition-all shadow-xl text-xs uppercase tracking-widest"
        >
          View My Core Values →
        </button>
      </div>
    </div>
  );
};

export default ModuleTech;
