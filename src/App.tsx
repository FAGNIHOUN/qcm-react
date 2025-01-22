import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { technologies } from './data/technologies';
import { allQuestions } from './data/questions';
import type { QuizState, Question } from './types';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    selectedTechnologies: [],
    currentQuestionIndex: 0,
    score: 0,
    showScore: false,
    selectedAnswer: null,
    hasAnswered: false,
    quizStarted: false,
  });

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (quizState.selectedTechnologies.length > 0 && !quizState.quizStarted) {
      const filteredQuestions = allQuestions.filter(q => 
        q.technology === quizState.selectedTechnologies[0]
      );
      setQuestions(filteredQuestions.sort(() => Math.random() - 0.5).slice(0, 40));
    }
  }, [quizState.selectedTechnologies, quizState.quizStarted]);

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const progress = (quizState.currentQuestionIndex / questions.length) * 100;

  const handleTechnologySelect = (techName: string) => {
    setQuizState(prev => ({
      ...prev,
      selectedTechnologies: [techName]
    }));
  };

  const startQuiz = () => {
    if (questions.length === 0) {
      alert("Pas assez de questions disponibles pour cette technologie. Veuillez en choisir une autre.");
      return;
    }
    setQuizState(prev => ({
      ...prev,
      quizStarted: true
    }));
  };

  const handleAnswerClick = (selectedIndex: number) => {
    if (!currentQuestion || quizState.hasAnswered) return;

    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      selectedAnswer: selectedIndex,
      hasAnswered: true,
    }));
  };

  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        hasAnswered: false,
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        showScore: true,
      }));
    }
  };

  const resetQuiz = () => {
    setQuizState({
      selectedTechnologies: [],
      currentQuestionIndex: 0,
      score: 0,
      showScore: false,
      selectedAnswer: null,
      hasAnswered: false,
      quizStarted: false,
    });
    setQuestions([]);
  };

  if (!quizState.quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Choisissez une technologie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {technologies.map(tech => (
              <button
                key={tech.id}
                onClick={() => handleTechnologySelect(tech.name)}
                className={`p-4 rounded-lg border transition-all ${
                  quizState.selectedTechnologies[0] === tech.name
                    ? 'bg-indigo-100 border-indigo-500'
                    : 'border-gray-200 hover:border-indigo-500'
                }`}
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-semibold">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.description}</div>
              </button>
            ))}
          </div>
          <button
            onClick={startQuiz}
            disabled={quizState.selectedTechnologies.length === 0}
            className={`w-full py-3 px-6 rounded-lg transition-colors ${
              quizState.selectedTechnologies.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            Commencer le quiz sur {quizState.selectedTechnologies[0]}
          </button>
        </div>
      </div>
    );
  }

  if (quizState.showScore) {
    const percentage = (quizState.score / questions.length) * 100;
    let message = "";
    if (percentage >= 80) {
      message = "Excellent ! Vous maîtrisez vraiment bien cette technologie !";
    } else if (percentage >= 60) {
      message = "Bien ! Vous avez de bonnes connaissances.";
    } else if (percentage >= 40) {
      message = "Pas mal, mais il y a encore de la place pour l'amélioration.";
    } else {
      message = "Continuez à apprendre, la pratique fait la perfection !";
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Quiz Terminé !</h2>
          <div className="text-center mb-6">
            <p className="text-xl mb-2">Votre score :</p>
            <p className="text-4xl font-bold text-indigo-600">
              {quizState.score} / {questions.length}
            </p>
            <p className="text-lg mt-4">
              Pourcentage de réussite : {percentage.toFixed(1)}%
            </p>
            <p className="text-md mt-4 text-gray-600">
              {message}
            </p>
          </div>
          <button
            onClick={resetQuiz}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Choisir une autre technologie
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <p className="text-xl font-semibold">Chargement des questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {quizState.currentQuestionIndex + 1}/{questions.length}
            </span>
            <span className="text-sm text-gray-500">
              Score: {quizState.score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={quizState.hasAnswered}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                quizState.hasAnswered
                  ? index === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : index === quizState.selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'border-gray-200'
                  : 'hover:border-indigo-500 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {quizState.hasAnswered && index === currentQuestion.correctAnswer && (
                  <CheckCircle className="text-green-500" size={20} />
                )}
                {quizState.hasAnswered && 
                  index === quizState.selectedAnswer && 
                  index !== currentQuestion.correctAnswer && (
                    <XCircle className="text-red-500" size={20} />
                )}
              </div>
            </button>
          ))}
        </div>

        {quizState.hasAnswered && (
          <button
            onClick={handleNextQuestion}
            className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {quizState.currentQuestionIndex === questions.length - 1
              ? 'Voir le résultat'
              : 'Question suivante'}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;