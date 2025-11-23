export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizConfig {
  topic: string;
  difficulty: Difficulty;
  numberOfQuestions: number;
}

export enum GameState {
  SETUP = 'SETUP',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}