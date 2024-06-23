import React, { useState } from "react";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

function TestMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = option => {
    if (!submitted) {
      setSelectedOption(option);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setSubmitted(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedOption("");
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              You scored {score} out of {quizData.length}
            </h1>
            <button
              onClick={handleRestartQuiz}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">
                {quizData[currentQuestion].question}
              </h2>
            </div>
            <div className="flex flex-col">
              {quizData[currentQuestion].options.map(option => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 mb-2 rounded-md ${
                    submitted
                      ? option === quizData[currentQuestion].answer
                        ? "bg-green-500 text-white"
                        : option === selectedOption
                          ? "bg-red-500 text-white"
                          : "bg-gray-200"
                      : selectedOption === option
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <span>
                Question {currentQuestion + 1} of {quizData.length}
              </span>
              {submitted ? (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestMode;
