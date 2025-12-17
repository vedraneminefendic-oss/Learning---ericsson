
import React, { useState } from 'react';

const ModuleStakeholder: React.FC<{ onNext: () => void, onBack: () => void }> = ({ onNext, onBack }) => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const scenarios = [
    {
      id: 0,
      title: "Real Challenge: Working with busy SMEs",
      context: "A technical expert at Ericsson is focused on their own delivery and has very little time to help create training content.",
      approach: "I don't just ask them for 'content.' I treat them like a client. I find out what technical errors are currently frustrating them the most, and I build the training to solve that specific problem. I do the heavy lifting of writing and formatting, so they only have to verify the facts."
    },
    {
      id: 1,
      title: "Real Challenge: Setting clear goals",
      context: "A team wants training but doesn't really know how to measure if it worked.",
      approach: "I use my background in Behavioral Science to move past simple completion rates. We identify one or two specific actions we want people to do differently. We design the course to practice those actions, and we measure the results based on actual performance data, not just 'happy sheets.'"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col justify-center py-2 animate-fadeIn overflow-hidden">
      <div className="mb-4 text-center shrink-0">
        <span className="bg-[#fabd00] text-[#002561] px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-widest">Stage 03: Practical Design</span>
        <h2 className="text-2xl font-black text-[#002561] mt-1 uppercase">How I work with people</h2>
        <p className="text-slate-500 mt-1 font-medium text-[10px]">Solving real friction in the learning process.</p>
      </div>

      <div className="space-y-3 mb-6 shrink min-h-0 overflow-y-auto pr-2">
        {scenarios.map((s) => (
          <div 
            key={s.id} 
            className={`cursor-pointer transition-all p-4 rounded-sm border-2 ${selectedScenario === s.id ? 'border-[#002561] bg-white shadow-lg' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}
            onClick={() => setSelectedScenario(s.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-sm text-[#002561]">{s.title}</h3>
              {selectedScenario === s.id && <span className="text-green-600 font-black text-[8px] uppercase tracking-widest">Selected Approach</span>}
            </div>
            <p className="text-[11px] text-slate-500 mb-3 italic">"{s.context}"</p>
            
            {selectedScenario === s.id && (
              <div className="bg-slate-50/50 p-4 rounded-sm border-l-4 border-[#fabd00] animate-fadeIn">
                <h4 className="font-black text-[#002561] text-[8px] uppercase mb-1 tracking-widest opacity-60">My practical approach:</h4>
                <p className="text-[#002561] leading-relaxed text-[11px] font-medium">
                  {s.approach}
                </p>
              </div>
            )}
            {selectedScenario !== s.id && (
              <button className="text-[#002561] font-black text-[9px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5">Read Strategy</button>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 shrink-0">
        <button 
          onClick={onNext}
          disabled={selectedScenario === null}
          className={`px-12 py-4 rounded-sm font-black transition-all uppercase tracking-widest text-[10px] ${selectedScenario !== null ? 'bg-[#002561] text-white hover:bg-[#003a94] shadow-lg' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          View Technical Experience →
        </button>
        <button onClick={onBack} className="text-[#002561] opacity-50 hover:opacity-100 transition-opacity font-black text-[8px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5">
          ← Back to Strategic Fit
        </button>
      </div>
    </div>
  );
};

export default ModuleStakeholder;
