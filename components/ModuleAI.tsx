
import React from 'react';

const ModuleAI: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-12 text-center">
        <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Module 02</span>
        <h2 className="text-4xl font-extrabold text-[#002561] mt-4">AI-Driven LXD Workflow</h2>
        <p className="text-slate-500 mt-2 text-lg">Leveraging technology to accelerate Ericsson's learning production.</p>
      </div>

      <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Digital Prototype Example</span>
        </div>
        
        <h3 className="text-2xl font-bold text-[#002561] mb-6">Case Study: 5G Network Fundamentals</h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase mb-2">Step 1: The AI-Assisted Scripting</h4>
            <div className="bg-slate-900 rounded-2xl p-6 text-emerald-400 font-mono text-xs leading-relaxed">
              <p className="mb-2 text-slate-500">// AI Prompt by Vedran:</p>
              <p>"Act as a Senior LXD for Ericsson. Create a 3-part micro-learning script for early-career field engineers on 5G network slicing. Focus on real-world troubleshooting and use a conversational, supportive tone."</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase mb-2">Step 2: Rapid Storyboarding Output</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="block text-xl mb-1">📽️</span>
                <p className="font-bold text-[#002561] text-xs mb-1">Video Hook</p>
                <p className="text-[10px] text-blue-800">A day in the life: The impact of 5G slicing on hospital emergencies.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="block text-xl mb-1">🎮</span>
                <p className="font-bold text-[#002561] text-xs mb-1">Interactive Sandbox</p>
                <p className="text-[10px] text-blue-800">Drag-and-drop exercise to manually allocate bandwidth slices.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="block text-xl mb-1">📝</span>
                <p className="font-bold text-[#002561] text-xs mb-1">Adaptive Assessment</p>
                <p className="text-[10px] text-blue-800">Branching scenario quiz: 'Fix the network before the surgery starts.'</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-sm font-bold text-[#002561] mb-2">The Value Added:</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              By using AI to handle initial content structure and drafting, Vedran shifts his energy to <strong>facilitating workshops with SMEs</strong> and <strong>iterating based on learner feedback</strong>—the core requirements of the Ericsson LXD role.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="bg-[#002561] hover:bg-[#003a94] text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg text-lg"
        >
          See Final Impact Summary
        </button>
      </div>
    </div>
  );
};

export default ModuleAI;
