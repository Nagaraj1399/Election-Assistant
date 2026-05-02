"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

const FLASHCARDS = [
  {
    term: "ECI",
    definition: "Election Commission of India. An autonomous constitutional body responsible for administering elections in India.",
  },
  {
    term: "EVM",
    definition: "Electronic Voting Machine. A secure machine used in Indian elections to record votes electronically instead of using ballot papers.",
  },
  {
    term: "VVPAT",
    definition: "Voter Verifiable Paper Audit Trail. Provides verifiable proof to the voter that their vote has been cast to their chosen candidate.",
  },
  {
    term: "NOTA",
    definition: "None of the Above. A ballot option allowing voters to indicate disapproval of all candidates in the voting system.",
  },
  {
    term: "MCC",
    definition: "Model Code of Conduct. Guidelines issued by the ECI for conduct of political parties and candidates during elections.",
  },
  {
    term: "Lok Sabha",
    definition: "The lower house of India's bicameral Parliament, composed of representatives of the people chosen by direct election.",
  },
  {
    term: "Constituency",
    definition: "A specific geographical area that elects one representative to a legislative body.",
  }
];

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    }, 150);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl flex flex-col min-h-[calc(100vh-8rem)]">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Election Glossary</h1>
        <p className="text-lg text-slate-500">Click the card to flip and learn essential election terms.</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        
        {/* Flashcard Container with perspective */}
        <div 
          className="w-full aspect-[3/2] cursor-pointer group perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Card inner that handles the 3D rotation */}
          <div className={cn(
            "relative w-full h-full transition-transform duration-700 transform-style-3d",
            isFlipped ? "rotate-y-180" : ""
          )}>
            
            {/* Front of card */}
            <div className="absolute inset-0 backface-hidden glass rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl border-t-4 border-t-saffron">
              <h2 className="text-5xl font-black text-slate-800 dark:text-slate-100 mb-6">
                {FLASHCARDS[currentIndex].term}
              </h2>
              <div className="flex items-center text-sm text-slate-400 font-medium">
                <RotateCw className="w-4 h-4 mr-2" />
                Click to reveal
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl border-t-4 border-t-[#138808] bg-slate-50 dark:bg-slate-900">
               <h3 className="text-2xl font-bold text-slate-400 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800 w-full">
                {FLASHCARDS[currentIndex].term}
              </h3>
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200">
                {FLASHCARDS[currentIndex].definition}
              </p>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between w-full mt-12 px-4">
          <button 
            onClick={prevCard}
            className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-sm font-medium text-slate-500">
            Card {currentIndex + 1} of {FLASHCARDS.length}
          </div>

          <button 
            onClick={nextCard}
            className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
             aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
