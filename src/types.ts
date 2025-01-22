export interface Technology {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Question {
  id: number;
  technology: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  selectedTechnologies: string[];
  currentQuestionIndex: number;
  score: number;
  showScore: boolean;
  selectedAnswer: number | null;
  hasAnswered: boolean;
  quizStarted: boolean;
}