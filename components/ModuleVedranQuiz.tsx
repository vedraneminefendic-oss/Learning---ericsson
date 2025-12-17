
import React, { useState, useEffect, useMemo } from 'react';
import { VEDRAN_QUIZ } from '../constants';

const ModuleVedranQuiz: React.FC<{ onNext: () => void, onBack: () => void }> = ({ onNext, onBack }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const baseQuestion = VEDRAN_QUIZ[currentQuestionIdx];

  const { options, correctIndex } = useMemo(() => {
    const originalOptions = [...baseQuestion.options];
    const correctValue = originalOptions[baseQuestion.correctIndex];
    for (let i = originalOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [originalOptions[i], originalOptions[j]] = [originalOptions[j], originalOptions[i]];
    }
    return {
      options: originalOptions,
      correctIndex: originalOptions.indexOf(correctValue)
    };
  }, [currentQuestionIdx]);

  const isCorrect = selectedOption === correctIndex;

  const handleOptionClick = (idx: number) => {
    if (showFeedback || isEvaluating) return;
    setSelectedOption(idx);
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setShowFeedback(true);
    }, 600);
  };

  const handleAction = () => {
    if (isCorrect) {
      if (currentQuestionIdx < VEDRAN_QUIZ.length - 1) {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        onNext();
      }
    } else {
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto h-full flex flex-col justify-center py-2 animate-fadeIn">
      <div className="text-center mb-6">
        <span className="bg-[#fabd00] text-[#002561] px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-widest">Stage 01: Introduction</span>
        <h2 className="text-2xl font-black text-[#002561] mt-2 uppercase tracking-tight">Professional Background</h2>
      </div>

      <div className="bg-white rounded shadow-xl overflow-hidden border border-slate-100 flex flex-col">
        <div className="p-6 md:p-8">
          <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Question {currentQuestionIdx + 1}/{VEDRAN_QUIZ.length}</p>
          <h3 className="text-lg font-bold text-[#002561] mb-6 leading-tight">{baseQuestion.question}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options.map((option, idx) => {
              let statusClass = "border-slate-100 bg-white hover:border-[#002561]";
              if (showFeedback) {
                if (idx === correctIndex) statusClass = "border-green-500 bg-green-50 text-green-700";
                else if (idx === selectedOption) statusClass = "border-red-400 bg-red-50 text-red-700";
                else statusClass = "opacity-40 grayscale";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={showFeedback || isEvaluating}
                  className={`text-left p-4 rounded border font-bold transition-all text-xs flex items-center gap-3 ${statusClass}`}
                >
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded bg-slate-100 text-[9px] font-black">{idx + 1}</span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {showFeedback && (
          <div className={`p-6 border-t ${isCorrect ? 'bg-green-50/40 border-green-100' : 'bg-red-50/40 border-red-100'}`}>
            <p className="text-[9px] font-black uppercase tracking-widest mb-1">{isCorrect ? 'Correct' : 'Note'}</p>
            <p className="text-xs text-slate-700 leading-relaxed mb-4">{isCorrect ? baseQuestion.funFact : `The correct approach is: ${baseQuestion.options[baseQuestion.correctIndex]}.`}</p>
            <button 
              onClick={handleAction}
              className="w-full py-3 bg-[#002561] text-white font-black rounded text-[10px] uppercase tracking-widest shadow-lg"
            >
              {isCorrect ? (currentQuestionIdx === VEDRAN_QUIZ.length - 1 ? "Proceed →" : "Next Question →") : "Try Again"}
            </button>
          </div>
        )}
      </div>
      
      {!showFeedback && (
        <div className="mt-4 flex justify-center">
          <button onClick={onBack} className="text-[#002561] opacity-50 hover:opacity-100 transition-opacity font-black text-[9px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5">
            ← Back to Welcome
          </button>
        </div>
      )}
    </div>
  );
};

export default ModuleVedranQuiz;
