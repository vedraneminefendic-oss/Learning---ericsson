
import React from 'react';

const ModuleValues: React.FC<{ onNext: () => void, onBack: () => void }> = ({ onNext, onBack }) => {
  const values = [
    {
      title: "Clarity over complexity",
      description: "If an employee can't understand the goal quickly, the learning isn't effective. I simplify content to focus on essential outcomes."
    },
    {
      title: "Collaboration by Default",
      description: "I value working in large, diverse teams. Different perspectives help prevent design blind spots and lead to better global results."
    },
    {
      title: "Iterative Feedback",
      description: "Design shouldn't happen in a vacuum. I use data and pilot groups to identify where a design can be improved and I adapt quickly."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center py-2 animate-fadeIn overflow-hidden">
      <div className="mb-4 text-center shrink-0">
        <span className="bg-[#fabd00] text-[#002561] px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-widest">Stage 05: Principles</span>
        <h2 className="text-2xl font-black text-[#002561] mt-1 uppercase tracking-tight">My Design Philosophy</h2>
        <p className="text-slate-500 mt-1 font-medium text-[10px]">Evidence-based approaches for effective learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 shrink-0">
        {values.map((v, idx) => (
          <div key={idx} className="bg-white p-4 border border-slate-100 shadow-lg rounded-sm hover:border-[#002561] transition-colors group">
            <h3 className="font-black text-[#002561] text-[10px] uppercase tracking-tight mb-2 group-hover:text-[#fabd00] transition-colors">{v.title}</h3>
            <p className="text-[10px] text-slate-500 leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#002561] text-white p-5 rounded-sm mb-6 shrink overflow-hidden group">
        <h4 className="text-[9px] font-black text-[#fabd00] uppercase tracking-[0.4em] mb-3">Practical Application: Nudge vs. Sludge</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border border-white/10 p-3 rounded bg-white/5">
            <p className="text-[8px] font-black uppercase mb-1 text-red-400">Inefficient (Sludge)</p>
            <p className="text-[10px] opacity-70 italic">"Please read this 40-page compliance PDF and complete the mandatory 60-minute quiz by Friday."</p>
          </div>
          <div className="border border-white/10 p-3 rounded bg-white/5">
            <p className="text-[8px] font-black uppercase mb-1 text-green-400">Efficient (Nudge)</p>
            <p className="text-[10px] opacity-70 italic">"Here are the 3 critical changes for your role this week. Try this 2-minute simulation."</p>
          </div>
        </div>
        <p className="text-[11px] font-medium leading-relaxed max-w-2xl border-t border-white/10 pt-3">
          "Time is a valuable resource. I design learning that respects the employee's workflow by focusing on high-impact actions rather than overwhelming them with unnecessary information."
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 shrink-0">
        <button 
          onClick={onNext}
          className="bg-[#002561] hover:bg-[#003a94] text-white font-black py-4 px-12 rounded-sm transition-all shadow-xl text-[10px] uppercase tracking-widest"
        >
          Final Summary →
        </button>
        <button onClick={onBack} className="text-[#002561] opacity-50 hover:opacity-100 transition-opacity font-black text-[8px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5">
          ← Back to Toolkit
        </button>
      </div>
    </div>
  );
};

export default ModuleValues;
