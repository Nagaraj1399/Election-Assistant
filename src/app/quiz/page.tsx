"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const QUIZ_QUESTIONS = [
  {
    question: "Who is responsible for conducting Lok Sabha elections in India?",
    options: ["President of India", "Supreme Court", "Election Commission of India", "Parliament"],
    answer: 2,
    explanation: "The Election Commission of India (ECI) is the constitutional body responsible for administering elections to the Lok Sabha, Rajya Sabha, and State Legislative Assemblies."
  },
  {
    question: "What is the minimum voting age in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    answer: 1,
    explanation: "The 61st Amendment Act of 1988 lowered the voting age from 21 to 18 years."
  },
  {
    question: "What does VVPAT stand for?",
    options: ["Voter Verified Paper Audit Trail", "Voting Validation Paper Audit Trail", "Voter Verifiable Paper Audit Trail", "Voting Verification and Printing Audit Trail"],
    answer: 2,
    explanation: "VVPAT stands for Voter Verifiable Paper Audit Trail, which allows voters to verify that their vote was cast correctly."
  },
  {
    question: "When does the Model Code of Conduct come into effect?",
    options: ["One month before voting", "As soon as the election schedule is announced", "On the day of voting", "When nominations are filed"],
    answer: 1,
    explanation: "The MCC comes into effect immediately from the date the election schedule is announced by the ECI."
  },
  {
    question: "What is the maximum number of candidates an EVM can cater to (including NOTA)?",
    options: ["16", "32", "64", "384"],
    answer: 3,
    explanation: "A single EVM can cater to a maximum of 384 candidates (including NOTA) by connecting 24 Balloting Units (16 candidates each) to one Control Unit."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === QUIZ_QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="glass p-12 rounded-3xl text-center w-full shadow-2xl border-t-8 border-t-saffron">
          <h2 className="text-4xl font-black mb-6">Quiz Completed!</h2>
          <div className="text-6xl font-bold mb-8 text-slate-800 dark:text-slate-100">
            {score} <span className="text-3xl text-slate-400">/ {QUIZ_QUESTIONS.length}</span>
          </div>
          <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">
            {score === QUIZ_QUESTIONS.length ? "Perfect score! You know your democracy well." : 
             score > QUIZ_QUESTIONS.length / 2 ? "Great job! You have a good understanding." : 
             "Good effort! Keep learning about the electoral process."}
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={resetQuiz}
              className="flex items-center px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            <Link 
              href="/learn"
              className="flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Review Material
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl min-h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 mb-8 overflow-hidden">
        <div className="bg-saffron h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex-1">
        <div className="mb-8">
           <span className="text-sm font-semibold text-saffron uppercase tracking-wider">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
           <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white leading-tight">
             {question.question}
           </h2>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = index === question.answer;
            const showCorrect = isAnswered && isCorrect;
            const showWrong = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 text-lg font-medium relative overflow-hidden",
                  !isAnswered ? "border-slate-200 dark:border-slate-800 hover:border-saffron hover:shadow-md bg-white dark:bg-slate-900" : "",
                  showCorrect ? "border-[#138808] bg-[#138808]/10 text-[#138808] dark:text-[#28a745]" : "",
                  showWrong ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400" : "",
                  isAnswered && !isSelected && !isCorrect ? "border-slate-100 dark:border-slate-800 opacity-50 bg-slate-50 dark:bg-slate-900" : ""
                )}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  {showCorrect && <CheckCircle2 className="w-6 h-6 text-[#138808]" />}
                  {showWrong && <XCircle className="w-6 h-6 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 animate-in fade-in slide-in-from-bottom-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Explanation</h4>
            <p className="text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
        <button
          onClick={nextQuestion}
          disabled={!isAnswered}
          className={cn(
            "px-8 py-4 rounded-full font-bold transition-all",
            isAnswered 
              ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-md hover:shadow-lg translate-y-0" 
              : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed opacity-50 translate-y-1"
          )}
        >
          {currentQuestion === QUIZ_QUESTIONS.length - 1 ? "See Results" : "Next Question"}
        </button>
      </div>

    </div>
  );
}
