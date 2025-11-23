import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { GameState, Question, QuizConfig } from './types';
import { getQuestions } from './services/questions';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SETUP);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const handleStartQuiz = async (config: QuizConfig) => {
    setGameState(GameState.LOADING);
    setErrorMsg('');
    try {
      const generatedQuestions = await getQuestions(config.topic, config.difficulty, config.numberOfQuestions);
      if (generatedQuestions.length === 0) {
        throw new Error("No questions found for this topic.");
      }
      setQuestions(generatedQuestions);
      setGameState(GameState.PLAYING);
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to load quiz. Please try again.");
      setGameState(GameState.ERROR);
    }
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setGameState(GameState.FINISHED);
  };

  const handleRestart = () => {
    setGameState(GameState.SETUP);
    setQuestions([]);
    setScore(0);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-4xl flex justify-center z-10">
        {gameState === GameState.SETUP && (
          <StartScreen onStart={handleStartQuiz} />
        )}

        {gameState === GameState.LOADING && (
          <LoadingScreen />
        )}

        {gameState === GameState.PLAYING && (
          <QuizScreen 
            questions={questions} 
            onComplete={handleQuizComplete} 
          />
        )}

        {gameState === GameState.FINISHED && (
          <ResultScreen 
            score={score} 
            total={questions.length} 
            onRestart={handleRestart} 
          />
        )}

        {gameState === GameState.ERROR && (
           <div className="max-w-md w-full glass-card rounded-3xl shadow-2xl p-8 text-center animate-scale-in">
             <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
               <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h3>
             <p className="text-gray-500 mb-8">{errorMsg}</p>
             <button onClick={handleRestart} className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">Try Again</button>
           </div>
        )}
      </div>

      <div className="fixed bottom-6 text-center w-full pointer-events-none z-0">
        <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase">Dynamix Networks • Assessment Task 1</p>
      </div>
    </div>
  );
};

export default App;