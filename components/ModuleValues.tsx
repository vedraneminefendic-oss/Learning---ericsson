
import React from 'react';

const ModuleValues: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const values = [
    {
      title: "Clarity over complexity",
      description: "If an employee can't understand the goal of a training in 30 seconds, it's too complicated. I simplify until only the essentials remain."
    },
    {
      title: "User-centered, not ego-centered",
      description: "I don't design for my portfolio; I design for the person in the field. If they find it useless, I change it, regardless of how much time I spent on it."
    },
    {
      title: "Honest Growth",
      description: "I don't know everything, but I am a fast and curious learner. I admit when I'm wrong and pivot quickly based on feedback."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fadeIn">
      <div className="mb-12 text-center">
        <span className="bg-[#fabd00] text-[#002561] px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Stage 05: Principles</span>
        <h2 className="text-3xl font-black text-[#002561] mt-4 uppercase">How I think</h2>
        <p className="text-slate-500 mt-2 font-medium">The foundation of my work as a designer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {values.map((v, idx) => (
          <div key={idx} className="bg-white p-8 border border-slate-100 shadow-lg rounded-sm hover:border-[#002561] transition-colors group">
            <h3 className="font-black text-[#002561] text-sm uppercase tracking-tight mb-4 group-hover:text-[#fabd00] transition-colors">{v.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-10 border-dashed border-2 border-slate-200 text-center rounded-sm mb-12">
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2 italic">A note on transparency</p>
        <p className="text-[#002561] font-medium text-lg">
          "I believe a team of 17 succeeds when communication is open and honest. I value direct feedback and a healthy work-life balance that fuels long-term creativity."
        </p>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="bg-[#002561] hover:bg-[#003a94] text-white font-black py-5 px-16 rounded-sm transition-all shadow-xl text-xs uppercase tracking-widest"
        >
          Wrap Up Journey →
        </button>
      </div>
    </div>
  );
};

export default ModuleValues;
