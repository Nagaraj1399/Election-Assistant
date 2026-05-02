import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Understanding the Indian Electoral Process
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            India is the world's largest democracy. The sheer scale and complexity of its elections are unparalleled. Let's break down the key components.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-saffron border-b pb-2">
            Election Commission of India (ECI)
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India at national, state, and district levels. It administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies, State Legislative Councils, and the offices of the President and Vice President of the country.
          </p>
          <div className="glass p-6 rounded-xl border-l-4 border-l-saffron">
             <h3 className="font-semibold text-xl mb-2">Key Responsibilities:</h3>
             <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
               <li>Superintendence, direction, and control of elections.</li>
               <li>Preparation of electoral rolls.</li>
               <li>Recognition of political parties and allotment of symbols.</li>
               <li>Enforcing the Model Code of Conduct.</li>
             </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#138808] border-b pb-2">
            EVMs and VVPAT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <h3 className="text-2xl font-semibold">Electronic Voting Machines (EVM)</h3>
               <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                 EVMs were introduced to make the voting process secure, accurate, and faster. An EVM consists of two units: a Control Unit (with the Presiding Officer) and a Balloting Unit (inside the voting compartment).
               </p>
            </div>
            <div className="space-y-4">
               <h3 className="text-2xl font-semibold">Voter Verifiable Paper Audit Trail (VVPAT)</h3>
               <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                 The VVPAT machine provides verifiable proof to the voter that their vote has been cast correctly. When a vote is cast, a slip is printed showing the serial number, name, and symbol of the candidate, visible through a transparent window for 7 seconds before it falls into a sealed drop box.
               </p>
            </div>
          </div>
        </section>

         <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 border-b pb-2">
            Model Code of Conduct (MCC)
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            The Model Code of Conduct is a set of guidelines issued by the ECI to regulate the conduct of political parties and candidates prior to elections. It aims to ensure free and fair elections and a level playing field.
          </p>
           <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-xl">
             <p className="font-medium text-blue-800 dark:text-blue-300">
                <strong>Important Note:</strong> The MCC comes into effect immediately from the date the election schedule is announced by the ECI and remains in force till the completion of the election process.
             </p>
           </div>
        </section>
      </div>
    </div>
  );
}
