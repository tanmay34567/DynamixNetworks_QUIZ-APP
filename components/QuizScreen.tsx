import React, { useState } from 'react';
import { Question } from '../types';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (score: number, total: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedOption(index);
    setIsAnswerRevealed(true);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      const finalScore = selectedOption === currentQuestion.correctAnswerIndex ? score + 1 : score;
      onComplete(score, questions.length);
    }
  };

  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index); // 65 is 'A'
  };

  return (
    <div className="max-w-3xl w-full glass-card rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[600px] animate-slide-up">
      {/* Header / Progress */}
      <div className="bg-white/50 backdrop-blur-sm px-8 py-6 border-b border-gray-100">
        <div className="flex justify-between items-end mb-4">
          <div>
             <span className="text-xs font-bold text-indigo-500 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full">Question {currentIndex + 1} of {questions.length}</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                {score}
             </div>
             <span className="text-xs font-semibold text-slate-400">Score</span>
          </div>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Body */}
      <div className="p-8 md:p-12 flex-1 flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-snug">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => {
            let containerStyle = "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-600";
            let badgeStyle = "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600";
            
            if (isAnswerRevealed) {
              if (idx === currentQuestion.correctAnswerIndex) {
                containerStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 ring-1 ring-emerald-500";
                badgeStyle = "bg-emerald-200 text-emerald-700";
              } else if (idx === selectedOption) {
                containerStyle = "bg-rose-50 border-rose-500 text-rose-800 ring-1 ring-rose-500";
                badgeStyle = "bg-rose-200 text-rose-700";
              } else {
                containerStyle = "border-slate-100 text-slate-300 opacity-50";
                badgeStyle = "bg-slate-50 text-slate-300";
              }
            } else if (selectedOption === idx) {
              containerStyle = "bg-indigo-50 border-indigo-500 text-indigo-800 ring-1 ring-indigo-500";
              badgeStyle = "bg-indigo-200 text-indigo-700";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswerRevealed}
                className={`group w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 ${containerStyle} ${!isAnswerRevealed && "hover:shadow-md hover:-translate-y-0.5"}`}
              >
                <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${badgeStyle}`}>
                  {getOptionLetter(idx)}
                </span>
                <span className="font-medium text-lg flex-1">{option}</span>
                
                {isAnswerRevealed && idx === currentQuestion.correctAnswerIndex && (
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 animate-scale-in">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                )}
                {isAnswerRevealed && idx === selectedOption && idx !== currentQuestion.correctAnswerIndex && (
                  <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white flex-shrink-0 animate-scale-in">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer / Feedback Area - Fixed height to prevent layout jumpiness or stick to bottom */}
      <div className={`p-8 bg-slate-50 border-t border-slate-100 transition-all duration-300 ${isAnswerRevealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 hidden'}`}>
         {isAnswerRevealed && (
          <div className="animate-slide-up flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Explanation</p>
              <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>{currentIndex + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
         )}
      </div>
    </div>
  );
};