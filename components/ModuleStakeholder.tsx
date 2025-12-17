
import React, { useState } from 'react';

const ModuleStakeholder: React.FC<{ onNext: () => void }> = ({ onNext }) => {
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
    <div className="max-w-4xl mx-auto p-6 animate-fadeIn">
      <div className="mb-12 text-center">
        <span className="bg-[#fabd00] text-[#002561] px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Stage 03: Practical Design</span>
        <h2 className="text-3xl font-black text-[#002561] mt-4 uppercase">How I work with people</h2>
        <p className="text-slate-500 mt-2 font-medium">Solving real friction in the learning process.</p>
      </div>

      <div className="space-y-6 mb-12">
        {scenarios.map((s) => (
          <div 
            key={s.id} 
            className={`cursor-pointer transition-all p-8 rounded-sm border-2 ${selectedScenario === s.id ? 'border-[#002561] bg-white shadow-xl' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}
            onClick={() => setSelectedScenario(s.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#002561]">{s.title}</h3>
              {selectedScenario === s.id && <span className="text-green-600 font-black text-[10px] uppercase tracking-widest">Selected Approach</span>}
            </div>
            <p className="text-slate-600 mb-6 italic">"{s.context}"</p>
            
            {selectedScenario === s.id && (
              <div className="bg-slate-50 p-6 rounded-sm border-l-4 border-[#fabd00] animate-fadeIn">
                <h4 className="font-black text-[#002561] text-[10px] uppercase mb-2 tracking-widest opacity-60">My practical approach:</h4>
                <p className="text-[#002561] leading-relaxed font-medium">
                  {s.approach}
                </p>
              </div>
            )}
            {selectedScenario !== s.id && (
              <button className="text-[#002561] font-black text-[10px] uppercase tracking-widest border-b border-[#002561]/20 pb-1">Read Strategy</button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          disabled={selectedScenario === null}
          className={`px-16 py-5 rounded-sm font-black transition-all uppercase tracking-widest text-xs ${selectedScenario !== null ? 'bg-[#002561] text-white hover:bg-[#003a94] shadow-lg' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          View Technical Experience →
        </button>
      </div>
    </div>
  );
};

export default ModuleStakeholder;
