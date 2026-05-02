"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, Megaphone, Users, CheckSquare, BarChart, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const ELECTION_STEPS = [
  {
    id: 1,
    title: "Delimitation & Electoral Rolls",
    description: "Boundaries of constituencies are drawn. The Election Commission updates the voter list (electoral roll) to include new eligible voters and remove those who have passed away or moved.",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-500"
  },
  {
    id: 2,
    title: "Announcement of Schedule",
    description: "The Election Commission announces the dates for filing nominations, polling, and counting. The Model Code of Conduct (MCC) comes into effect immediately.",
    icon: Calendar,
    color: "text-saffron",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    borderColor: "border-saffron"
  },
  {
    id: 3,
    title: "Filing of Nominations",
    description: "Candidates from recognized political parties and independent candidates file their nomination papers along with an affidavit detailing their assets, liabilities, and criminal records (if any).",
    icon: FileText,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    borderColor: "border-purple-500"
  },
  {
    id: 4,
    title: "Election Campaigning",
    description: "Candidates and parties campaign to woo voters. This period is strictly monitored by the ECI to ensure adherence to the Model Code of Conduct. Campaigning ends 48 hours before polling begins.",
    icon: Megaphone,
    color: "text-pink-500",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    borderColor: "border-pink-500"
  },
  {
    id: 5,
    title: "Polling Day",
    description: "Voters go to their designated polling booths and cast their votes using Electronic Voting Machines (EVMs). A VVPAT slip is generated for verification.",
    icon: CheckSquare,
    color: "text-[#138808]",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    borderColor: "border-[#138808]"
  },
  {
    id: 6,
    title: "Counting of Votes",
    description: "EVMs are kept in strong rooms under heavy security. On the scheduled day, votes are counted under the supervision of the Returning Officer and candidate agents.",
    icon: BarChart,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    borderColor: "border-indigo-500"
  },
  {
    id: 7,
    title: "Declaration of Results",
    description: "The candidate with the highest number of valid votes in a constituency is declared the winner. The party or coalition with a majority of seats forms the government.",
    icon: Flag,
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    borderColor: "border-red-500"
  }
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Election Process
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Explore the step-by-step journey of how an election is conducted in the world's largest democracy.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Timeline Navigation */}
        <div className="lg:w-1/3 relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
          
          <div className="space-y-6">
            {ELECTION_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "flex items-center w-full text-left group transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center border-4 z-10 transition-colors duration-300",
                    isActive ? cn("bg-white dark:bg-slate-900", step.borderColor) : 
                    isPast ? cn("bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700") : 
                    "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  )}>
                    <span className={cn(
                      "font-bold text-lg",
                      isActive ? step.color : "text-slate-400"
                    )}>
                      {step.id}
                    </span>
                  </div>
                  
                  <div className={cn(
                    "ml-6 p-4 rounded-xl flex-1 transition-all duration-300",
                    isActive ? cn("bg-white dark:bg-slate-900 shadow-md border", step.borderColor) : "bg-transparent border border-transparent"
                  )}>
                    <h3 className={cn(
                      "font-semibold text-lg",
                      isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed View */}
        <div className="lg:w-2/3">
          <div className="sticky top-24">
            {ELECTION_STEPS.map((step) => {
              if (step.id !== activeStep) return null;
              
              const StepIcon = step.icon;
              
              return (
                <div 
                  key={step.id}
                  className="animate-in fade-in slide-in-from-right-8 duration-500 glass rounded-3xl p-8 md:p-12 border-t-8 shadow-2xl"
                  style={{ borderTopColor: `var(--color-${step.borderColor.replace('border-', '')})` }}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-8",
                    step.bgColor,
                    step.color
                  )}>
                    <StepIcon className="w-10 h-10" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                    Step {step.id}: {step.title}
                  </h2>
                  
                  <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>

                  {/* Adding some contextual illustrations based on step */}
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                     {step.id === 2 && (
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                          <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Did you know?</h4>
                          <p className="text-orange-900/80 dark:text-orange-200/80">Once the schedule is announced, the government cannot make any major policy announcements that may influence voters.</p>
                        </div>
                     )}
                     {step.id === 5 && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Voting Method</h4>
                          <p className="text-green-900/80 dark:text-green-200/80">Voters press the blue button on the EVM against the name and symbol of their preferred candidate.</p>
                        </div>
                     )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
