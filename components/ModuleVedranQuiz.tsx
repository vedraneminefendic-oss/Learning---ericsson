
import React, { useState, useEffect, useMemo } from 'react';
import { VEDRAN_QUIZ } from '../constants';

const ModuleVedranQuiz: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Get the base question from constants
  const baseQuestion = VEDRAN_QUIZ[currentQuestionIdx];

  // Randomize options and find the new correct index
  const { options, correctIndex } = useMemo(() => {
    const originalOptions = [...baseQuestion.options];
    const correctValue = originalOptions[baseQuestion.correctIndex];
    
    // Fisher-Yates Shuffle
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

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showFeedback || isEvaluating) {
        if (e.key === 'Enter' && showFeedback) handleAction();
        return;
      }
      const num = parseInt(e.key);
      if (num >= 1 && num <= options.length) {
        handleOptionClick(num - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showFeedback, isEvaluating, currentQuestionIdx, selectedOption, options]);

  const handleOptionClick = (idx: number) => {
    if (showFeedback || isEvaluating) return;
    
    setSelectedOption(idx);
    setIsEvaluating(true);
    
    // Artificial delay to create "anticipation"
    setTimeout(() => {
      setIsEvaluating(false);
      setShowFeedback(true);
    }, 800);
  };

  const handleAction = () => {
    if (isCorrect) {
      if (currentQuestionIdx < VEDRAN_QUIZ.length - 1) {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setSelectedOption(null);
        setShowFeedback(false);
        setIsEvaluating(false);
      } else {
        onNext();
      }
    } else {
      setSelectedOption(null);
      setShowFeedback(false);
      setIsEvaluating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 animate-fadeIn">
      <style>
        {`
          @keyframes pulse-blue {
            0%, 100% { border-color: #002561; box-shadow: 0 0 0 0 rgba(0, 37, 97, 0.4); }
            50% { border-color: #fabd00; box-shadow: 0 0 20px 0 rgba(250, 189, 0, 0.3); }
          }
          .animate-pulse-blue {
            animation: pulse-blue 0.8s ease-in-out infinite;
          }
          @keyframes slide-up {
            from { transform: translateY(10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
      
      <div className="text-center mb-10">
        <span className="bg-[#fabd00] text-[#002561] px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.2em]">Stage 01: Qualification</span>
        <h2 className="text-3xl font-black text-[#002561] mt-4 uppercase tracking-tight">Meet the Candidate</h2>
        <div className="flex justify-center gap-1 mt-4" aria-label={`Progress: question ${currentQuestionIdx + 1} of ${VEDRAN_QUIZ.length}`}>
          {VEDRAN_QUIZ.map((_, idx) => (
            <div key={idx} className={`h-1 w-8 rounded-full transition-all duration-500 ${idx === currentQuestionIdx ? 'bg-[#002561]' : idx < currentQuestionIdx ? 'bg-[#002561]/30' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded shadow-2xl overflow-hidden border border-slate-100" role="application">
        <div className="p-8 md:p-12">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Question {currentQuestionIdx + 1} of {VEDRAN_QUIZ.length}</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#002561] mb-10 leading-snug" id="quiz-question">
            {baseQuestion.question}
          </h3>

          <div className="space-y-3" role="radiogroup" aria-labelledby="quiz-question">
            {options.map((option, idx) => {
              let statusClass = "border-slate-100 bg-white hover:border-[#002561] hover:shadow-md";
              
              if (isEvaluating) {
                if (idx === selectedOption) {
                  statusClass = "border-[#002561] bg-slate-50 animate-pulse-blue ring-2 ring-[#002561]/10";
                } else {
                  statusClass = "border-slate-50 opacity-40 cursor-not-allowed scale-[0.98]";
                }
              } else if (showFeedback) {
                if (idx === correctIndex) {
                  statusClass = "border-green-500 bg-green-50 text-green-700 ring-1 ring-green-100";
                } else if (idx === selectedOption) {
                  statusClass = "border-red-400 bg-red-50 text-red-700";
                } else {
                  statusClass = "border-slate-50 opacity-40 cursor-not-allowed grayscale";
                }
              }

              return (
                <button
                  key={`${currentQuestionIdx}-${idx}`}
                  onClick={() => handleOptionClick(idx)}
                  disabled={showFeedback || isEvaluating}
                  role="radio"
                  aria-checked={selectedOption === idx}
                  className={`w-full text-left p-5 rounded border-2 font-bold transition-all flex items-center justify-between text-sm md:text-base active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#002561] ${statusClass}`}
                >
                  <span className="flex items-center gap-4">
                    <span className={`w-6 h-6 flex items-center justify-center rounded text-[10px] font-black transition-colors ${idx === selectedOption && isEvaluating ? 'bg-[#002561] text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {idx + 1}
                    </span>
                    {option}
                  </span>
                  {showFeedback && idx === correctIndex && (
                    <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-xs animate-scaleIn">✓</span>
                  )}
                  {showFeedback && idx === selectedOption && idx !== correctIndex && (
                    <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full text-xs animate-scaleIn">✕</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {showFeedback && (
          <div 
            className={`p-8 border-t animate-slideUp ${isCorrect ? 'bg-green-50/40 border-green-100' : 'bg-red-50/40 border-red-100'}`}
            role="alert"
          >
            <div className="flex gap-5">
               <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg ${isCorrect ? 'bg-green-600 shadow-green-200' : 'bg-red-500 shadow-red-200'}`}>
                 {isCorrect ? '✓' : '!'}
               </div>
               <div>
                 <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                   {isCorrect ? 'Spot On!' : 'Learning Moment'}
                 </p>
                 <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                   {isCorrect 
                    ? baseQuestion.funFact 
                    : `Actually, the most effective approach is: ${baseQuestion.options[baseQuestion.correctIndex]}.`}
                 </p>
               </div>
            </div>
            <button 
              onClick={handleAction}
              className={`mt-8 w-full py-4 font-black rounded transition-all text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg focus:ring-4 ${isCorrect ? 'bg-[#002561] text-white hover:bg-[#001c4a] focus:ring-[#002561]/30' : 'bg-white border border-red-200 text-red-600 hover:bg-red-50 focus:ring-red-100'}`}
            >
              {isCorrect 
                ? (currentQuestionIdx === VEDRAN_QUIZ.length - 1 ? "Finalize Evaluation →" : "Continue →") 
                : "Try Again"}
            </button>
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Hint: You can use keys 1-4 to select
      </p>
    </div>
  );
};

export default ModuleVedranQuiz;
