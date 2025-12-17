
import React, { useState } from 'react';
import { CourseStep } from './types';
import Welcome from './components/Welcome';
import ModuleVedranQuiz from './components/ModuleVedranQuiz';
import ModuleEricssonFit from './components/ModuleEricssonFit';
import ModuleStakeholder from './components/ModuleStakeholder';
import ModuleTech from './components/ModuleTech';
import ModuleValues from './components/ModuleValues';
import FinalImpact from './components/FinalImpact';
import { VEDRAN_PROFILE } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CourseStep>(CourseStep.WELCOME);

  const renderStep = () => {
    switch (currentStep) {
      case CourseStep.WELCOME:
        return <Welcome onStart={() => setCurrentStep(CourseStep.VEDRAN_QUIZ)} />;
      case CourseStep.VEDRAN_QUIZ:
        return <ModuleVedranQuiz onNext={() => setCurrentStep(CourseStep.ERICSSON_FIT)} />;
      case CourseStep.ERICSSON_FIT:
        return <ModuleEricssonFit onNext={() => setCurrentStep(CourseStep.STAKEHOLDERS)} />;
      case CourseStep.STAKEHOLDERS:
        return <ModuleStakeholder onNext={() => setCurrentStep(CourseStep.TECH_FLOW)} />;
      case CourseStep.TECH_FLOW:
        return <ModuleTech onNext={() => setCurrentStep(CourseStep.VALUES)} />;
      case CourseStep.VALUES:
        return <ModuleValues onNext={() => setCurrentStep(CourseStep.FINAL_IMPACT)} />;
      case CourseStep.FINAL_IMPACT:
        return <FinalImpact />;
      default:
        return <Welcome onStart={() => setCurrentStep(CourseStep.VEDRAN_QUIZ)} />;
    }
  };

  const getProgress = () => {
    const steps = Object.values(CourseStep);
    const index = steps.indexOf(currentStep);
    return ((index + 1) / steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col text-[#002561] selection:bg-[#fabd00] selection:text-[#002561]">
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 bg-[#002561] rounded-sm flex items-center justify-center text-white font-black text-xl shadow-inner">
              E
            </div>
            <div className="hidden md:block">
              <p className="font-black text-[#002561] text-[10px] uppercase tracking-[0.3em]">Candidate Journey</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Vedran Eminefendic • Selection Process</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-xs mx-8 md:mx-16" aria-label="Course progress">
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#002561] transition-all duration-1000 ease-in-out" 
                style={{ width: `${getProgress()}%` }}
                role="progressbar"
                aria-valuenow={getProgress()}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 hidden sm:block">
               <img src={VEDRAN_PROFILE.photoUrl} className="w-full h-full object-cover grayscale" alt="Profile thumbnail" />
            </div>
            <span className="text-[9px] font-black text-white uppercase bg-[#002561] px-3 py-1.5 rounded-sm tracking-widest uppercase">LX Designer</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <div className="w-full max-w-7xl mx-auto px-6 py-12">{renderStep()}</div>
      </main>

      <footer className="py-8 bg-white border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.5em]">Ericsson Global Learning Team Selection 2025</p>
      </footer>
    </div>
  );
};

export default App;
