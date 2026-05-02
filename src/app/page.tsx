import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, Library } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="text-center max-w-3xl space-y-8">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Understand the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] drop-shadow-sm">Indian Election</span> Process
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Your interactive guide to the world's largest democracy. Learn, test your knowledge, and get answers to your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          
          {/* Card 1 */}
          <Link href="/learn" className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-md hover:border-saffron">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-saffron group-hover:bg-saffron group-hover:text-white transition-colors">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Learn the Basics</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Understand the roles of ECI, EVMs, and the Model Code of Conduct.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/flashcards" className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-md hover:border-[#138808]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#138808]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-[#138808] group-hover:bg-[#138808] group-hover:text-white transition-colors">
                <Library className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Flashcards</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Master election terminology with interactive flip cards.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/quiz" className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-500">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Take the Quiz</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Test your knowledge of the Indian electoral system.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/process" className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-md hover:border-purple-500">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Election Process</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Explore the step-by-step journey of conducting an election.
              </p>
            </div>
          </Link>

        </div>

        <div className="pt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
           <Link href="/assistant" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-lg hover:shadow-xl group">
             Chat with AI Assistant
             <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
      </div>
    </div>
  );
}
