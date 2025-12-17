
import React, { useState } from 'react';

const ModuleStakeholder: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const scenarios = [
    {
      id: 0,
      title: "Challenge: The Busy Ericsson SME",
      context: "A Subject Matter Expert (SME) at Ericsson is focused on technical delivery and has little time for 'Connect to Learn' content creation.",
      approach: "As a former CSM at Cornerstone, I treat internal SMEs as high-value clients. I would transition from asking for 'content' to asking for 'pain points.' By identifying how the training will reduce their team's support burden or technical errors, I secure their buy-in. I handle the heavy lifting of storyboarding so they only need to provide the 'secret sauce' of the knowledge."
    },
    {
      id: 1,
      title: "Challenge: Defining Success Metrics",
      context: "The stakeholder wants to 'improve global communication' but hasn't defined what failure or success looks like.",
      approach: "Using my Behavioral Science background, I would steer the conversation from 'vanity metrics' (completions) to 'performance indicators.' I'd facilitate a co-creation workshop to define observable behaviors (e.g., 'A 15% reduction in cross-functional meeting delays'). We then design the blended solution to trigger and measure those specific behaviors."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-12 text-center">
        <span className="bg-[#fabd00] text-[#002561] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Module 01</span>
        <h2 className="text-4xl font-extrabold text-[#002561] mt-4">Stakeholder Mastery</h2>
        <p className="text-slate-500 mt-2 text-lg">Aligning business needs with learner-centered solutions.</p>
      </div>

      <div className="space-y-6 mb-12">
        {scenarios.map((s) => (
          <div 
            key={s.id} 
            className={`cursor-pointer transition-all p-8 rounded-3xl border-2 ${selectedScenario === s.id ? 'border-[#002561] bg-white shadow-xl scale-[1.02]' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}
            onClick={() => setSelectedScenario(s.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#002561]">{s.title}</h3>
              {selectedScenario === s.id && <span className="text-green-500 font-bold">✓ Approach Revealed</span>}
            </div>
            <p className="text-slate-600 mb-6 italic">"{s.context}"</p>
            
            {selectedScenario === s.id && (
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#002561] animate-fadeIn">
                <h4 className="font-black text-[#002561] text-xs uppercase mb-2 tracking-tighter">Vedran's LXD Approach:</h4>
                <p className="text-[#002561] leading-relaxed">
                  {s.approach}
                </p>
              </div>
            )}
            {selectedScenario !== s.id && (
              <button className="text-[#002561] font-bold text-sm hover:underline">Click to see Vedran's Strategy →</button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          disabled={selectedScenario === null}
          className={`px-12 py-4 rounded-full font-bold transition-all ${selectedScenario !== null ? 'bg-[#002561] text-white hover:bg-[#003a94] shadow-lg' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          Proceed to Digital Workflow
        </button>
      </div>
    </div>
  );
};

export default ModuleStakeholder;
