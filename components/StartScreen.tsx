import React, { useState } from 'react';
import { Difficulty, QuizConfig } from '../types';

interface StartScreenProps {
  onStart: (config: QuizConfig) => void;
}

const PRESET_TOPICS = [
  "React.js",
  "JavaScript",
  "Web Development",
  "General Knowledge",
  "Science"
];

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [topic, setTopic] = useState(PRESET_TOPICS[0]);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.Medium);

  const handleStart = () => {
    onStart({
      topic,
      difficulty,
      numberOfQuestions: 5,
    });
  };

  const difficultyColors = {
    [Difficulty.Easy]: "text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    [Difficulty.Medium]: "text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-100",
    [Difficulty.Hard]: "text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100"
  };

  const difficultyActive = {
    [Difficulty.Easy]: "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-200 ring-2 ring-emerald-300 ring-offset-2",
    [Difficulty.Medium]: "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-200 ring-2 ring-amber-300 ring-offset-2",
    [Difficulty.Hard]: "bg-rose-500 text-white border-rose-500 shadow-lg shadow-rose-200 ring-2 ring-rose-300 ring-offset-2"
  };

  return (
    <div className="max-w-md w-full glass-card rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
      <div className="p-10">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-200 transform rotate-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Quiz Master</h1>
          <p className="text-slate-500 mt-2 font-medium">Challenge your knowledge</p>
        </div>

        <div className="space-y-8">
          {/* Topic Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Select Topic</label>
            <div className="relative group">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-4 pl-5 pr-10 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all appearance-none cursor-pointer shadow-sm hover:border-indigo-200"
              >
                {PRESET_TOPICS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-indigo-500 transition-transform group-hover:translate-x-1">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Difficulty Level</label>
            <div className="grid grid-cols-3 gap-3">
              {Object.values(Difficulty).map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`py-3 px-2 text-sm font-bold rounded-xl border-2 transition-all duration-200 transform ${
                    difficulty === level
                      ? difficultyActive[level] + " scale-105"
                      : difficultyColors[level] + " border-transparent"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl shadow-xl shadow-slate-200 transition-all transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-slate-200 mt-6"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};