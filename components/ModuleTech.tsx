
import React from 'react';

const ModuleTech: React.FC<{ onNext: () => void, onBack: () => void }> = ({ onNext, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center py-2 animate-fadeIn overflow-hidden">
      <div className="mb-4 text-center shrink-0">
        <span className="bg-[#fabd00] text-[#002561] px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-widest">Stage 04: The Toolkit</span>
        <h2 className="text-2xl font-black text-[#002561] mt-1 uppercase tracking-tight">Platforms & Workflow</h2>
        <p className="text-slate-500 mt-1 font-medium text-[10px]">Proven experience with Ericsson's core learning infrastructure.</p>
      </div>

      <div className="bg-white p-5 rounded-sm shadow-xl border border-slate-100 mb-6 shrink overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start h-full">
          <div className="space-y-3">
            <h3 className="text-[10px] font-black text-[#002561] mb-2 uppercase tracking-tight opacity-70">Technical Ecosystem</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="w-7 h-7 flex-shrink-0 bg-slate-100 rounded flex items-center justify-center font-black text-[#002561] text-[8px] border border-slate-200">LMS</div>
                <div>
                  <p className="font-bold text-[10px]">Cornerstone & CatalystOne</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Admin-level understanding of object types, curricula, and automated assignments. I design for the platform, not against it.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-7 h-7 flex-shrink-0 bg-slate-100 rounded flex items-center justify-center font-black text-[#002561] text-[8px] border border-slate-200">ART</div>
                <div>
                  <p className="font-bold text-[10px]">Articulate 360 (Rise & Storyline)</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Creating clean, responsive, and accessible content that follows SCORM/xAPI standards for reliable tracking.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-7 h-7 flex-shrink-0 bg-slate-100 rounded flex items-center justify-center font-black text-[#002561] text-[8px] border border-slate-200">EFF</div>
                <div>
                  <p className="font-bold text-[10px]">Workflow Efficiency</p>
                  <p className="text-[9px] text-slate-500 leading-tight">Using smart templates and automation to speed up the 'production' phase, leaving more time for the 'design' phase.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-sm border-l-4 border-[#002561] h-full flex flex-col justify-center">
            <h3 className="text-[9px] font-black text-[#002561] mb-2 uppercase tracking-widest opacity-60">The Practical Edge</h3>
            <p className="text-[11px] text-[#002561] leading-relaxed italic mb-4">
              "Working at Cornerstone and CatalystOne taught me that a learning designer must be a 'technical translator.' I don't just build content; I ensure it functions perfectly within the global HCM architecture."
            </p>
            <div className="pt-3 border-t border-slate-200">
               <div className="flex flex-wrap gap-1.5">
                 <span className="bg-white px-1.5 py-0.5 border border-slate-200 text-[8px] font-bold text-[#002561] uppercase">Deployment</span>
                 <span className="bg-white px-1.5 py-0.5 border border-slate-200 text-[8px] font-bold text-[#002561] uppercase">Tracking</span>
                 <span className="bg-white px-1.5 py-0.5 border border-slate-200 text-[8px] font-bold text-[#002561] uppercase">User Flow</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 shrink-0">
        <button 
          onClick={onNext}
          className="bg-[#002561] hover:bg-[#003a94] text-white font-black py-4 px-12 rounded-sm transition-all shadow-xl text-[10px] uppercase tracking-widest"
        >
          View My Core Values →
        </button>
        <button onClick={onBack} className="text-[#002561] opacity-50 hover:opacity-100 transition-opacity font-black text-[8px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5">
          ← Back to Practical Design
        </button>
      </div>
    </div>
  );
};

export default ModuleTech;
