import React from 'react';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  let message = "";
  let subMessage = "";
  let icon = "";
  let colorClass = "";
  
  if (percentage >= 80) {
    message = "Outstanding!";
    subMessage = "You've mastered this topic.";
    icon = "🏆";
    colorClass = "text-emerald-500";
  } else if (percentage >= 60) {
    message = "Great Job!";
    subMessage = "You're on the right track.";
    icon = "🌟";
    colorClass = "text-indigo-500";
  } else {
    message = "Good Effort!";
    subMessage = "Keep learning and try again.";
    icon = "📚";
    colorClass = "text-amber-500";
  }

  // SVG calculations - Increased Size
  const radius = 110; // Increased from 80
  const stroke = 15;  // Increased from 12
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const size = radius * 2 + stroke * 2; 

  return (
    <div className="max-w-md w-full glass-card rounded-3xl shadow-2xl overflow-hidden p-10 text-center animate-scale-in">
      <div className="text-6xl mb-6 animate-bounce">{icon}</div>
      <h2 className="text-4xl font-extrabold text-slate-800 mb-2">{message}</h2>
      <p className="text-slate-500 mb-8 font-medium">{subMessage}</p>

      {/* Progress Circle Container - Increased Size */}
      <div className="relative w-72 h-72 mx-auto mb-8 flex items-center justify-center">
        <svg 
          height="100%" 
          width="100%" 
          viewBox={`0 0 ${size} ${size}`} 
          className="transform -rotate-90 drop-shadow-xl overflow-visible"
        >
          {/* Background Circle */}
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="50%"
            cy="50%"
            className="text-slate-100"
          />
          {/* Progress Circle */}
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: "stroke-dashoffset 1s ease-out" }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="50%"
            cy="50%"
            className={colorClass}
          />
        </svg>
        
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-6xl font-extrabold ${colorClass}`}>{percentage}%</span>
          <span className="text-sm font-bold text-slate-400 mt-2 uppercase tracking-wide">Score</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="block text-2xl font-bold text-emerald-500">{score}</span>
            <span className="text-xs font-bold text-slate-400 uppercase">Correct</span>
         </div>
         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span className="block text-2xl font-bold text-rose-500">{total - score}</span>
            <span className="text-xs font-bold text-slate-400 uppercase">Incorrect</span>
         </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Play Again
      </button>
    </div>
  );
};