
import React, { useState } from 'react';
import { CourseStep } from './types';
import Welcome from './components/Welcome';
import ModuleStakeholder from './components/ModuleStakeholder';
import ModuleJourney from './components/ModuleJourney';
import ModuleAI from './components/ModuleAI';
import FinalImpact from './components/FinalImpact';
import { VEDRAN_PROFILE } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CourseStep>(CourseStep.WELCOME);

  const renderStep = () => {
    switch (currentStep) {
      case CourseStep.WELCOME:
        return <Welcome onStart={() => setCurrentStep(CourseStep.STAKEHOLDER_ALIGNMENT)} />;
      case CourseStep.STAKEHOLDER_ALIGNMENT:
        return <ModuleStakeholder onNext={() => setCurrentStep(CourseStep.LEARNER_JOURNEY)} />;
      case CourseStep.LEARNER_JOURNEY:
        return <ModuleJourney onNext={() => setCurrentStep(CourseStep.AI_WORKFLOW)} />;
      case CourseStep.AI_WORKFLOW:
        return <ModuleAI onNext={() => setCurrentStep(CourseStep.FINAL_IMPACT)} />;
      case CourseStep.FINAL_IMPACT:
        return <FinalImpact />;
      default:
        return <Welcome onStart={() => setCurrentStep(CourseStep.STAKEHOLDER_ALIGNMENT)} />;
    }
  };

  const getProgress = () => {
    const steps = Object.values(CourseStep);
    const index = steps.indexOf(currentStep);
    return ((index + 1) / steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col text-slate-900 selection:bg-[#fabd00] selection:text-[#002561]">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#002561] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">V</div>
            <div className="hidden sm:block">
              <p className="font-black text-[#002561] text-sm uppercase tracking-widest">Vedran Eminefendic</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">LXD Journey for Ericsson</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-md mx-12">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">
              <span>Progress</span>
              <span>{Math.round(getProgress())}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#002561] transition-all duration-700 ease-in-out" style={{ width: `${getProgress()}%` }}></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 hidden md:block">
               <img src={VEDRAN_PROFILE.photoUrl} className="w-full h-full object-cover grayscale" alt="Profile" />
            </div>
            <span className="text-[10px] font-black text-[#fabd00] uppercase bg-[#002561] px-2 py-0.5 rounded">LXD Candidate</span>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-6">
        <div className="max-w-7xl mx-auto">{renderStep()}</div>
      </main>
    </div>
  );
};

export default App;
