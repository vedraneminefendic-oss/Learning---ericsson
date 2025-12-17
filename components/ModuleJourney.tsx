
import React, { useState } from 'react';

const ModuleJourney: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [activeStage, setActiveStage] = useState(0);

  const journeyStages = [
    {
      title: "Awareness & Empathy",
      icon: "🔍",
      vedranTouch: "Starting with a 'Job-to-be-done' analysis. Why is the Ericsson employee seeking this info? I use behavioral cues to design the 'Hook'."
    },
    {
      title: "Active Application",
      icon: "🛠️",
      vedranTouch: "Moving beyond passive video. I prototype micro-learning sandboxes where learners apply 5G concepts in a safe, simulated environment."
    },
    {
      title: "Feedback & Iteration",
      icon: "🔄",
      vedranTouch: "Using data loops. If a 'Connect to Learn' module has a high drop-off, I analyze the cognitive load and redesign the flow immediately."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fadeIn">
      <div className="mb-12 text-center">
        <span className="bg-[#002561] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Module 02</span>
        <h2 className="text-4xl font-extrabold text-[#002561] mt-4">Learner Journey Design</h2>
        <p className="text-slate-500 mt-2 text-lg">Architecting the path from novice to expert.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {journeyStages.map((stage, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStage(idx)}
            className={`p-6 rounded-3xl transition-all border-2 text-left ${
              activeStage === idx 
              ? 'bg-white border-[#002561] shadow-xl scale-105' 
              : 'bg-slate-50 border-transparent hover:bg-slate-100'
            }`}
          >
            <div className="text-3xl mb-4">{stage.icon}</div>
            <h3 className="font-bold text-[#002561] mb-2">{stage.title}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Stage {idx + 1}</p>
          </button>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl mb-12 transform -rotate-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#fabd00] rounded-full flex items-center justify-center text-slate-900 text-xl font-bold">V</div>
          <h4 className="text-lg font-bold">The Vedran Methodology:</h4>
        </div>
        <p className="text-blue-100 leading-relaxed italic text-lg">
          "{journeyStages[activeStage].vedranTouch}"
        </p>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="bg-[#002561] hover:bg-[#003a94] text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg text-lg"
        >
          Next: AI Workflow Integration
        </button>
      </div>
    </div>
  );
};

export default ModuleJourney;
