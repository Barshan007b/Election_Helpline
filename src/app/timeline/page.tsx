"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, FileText, Megaphone, Users, Vote, Award } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const timelinePhases = [
  {
    id: "registration",
    title: "Voter Registration & Verification",
    duration: "Months before election",
    icon: Users,
    description: "The Election Commission of India (ECI) updates the electoral rolls. Citizens must ensure their names are registered to be eligible to vote.",
    details: [
      "New voters turning 18 can apply for registration (Form 6).",
      "Existing voters can correct details or change constituencies (Form 8).",
      "Draft electoral rolls are published for public verification.",
      "Final electoral rolls are published."
    ],
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
  },
  {
    id: "announcement",
    title: "Election Announcement & MCC",
    duration: "45-60 days before polling",
    icon: Megaphone,
    description: "The ECI announces the election schedule, and the Model Code of Conduct (MCC) comes into effect immediately.",
    details: [
      "Dates for polling and counting are officially declared.",
      "MCC ensures a level playing field and prevents the ruling party from misusing official machinery.",
      "No new schemes or projects can be announced by the government."
    ],
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400"
  },
  {
    id: "nomination",
    title: "Filing of Nominations",
    duration: "~7 days",
    icon: FileText,
    description: "Candidates representing political parties or running independently file their nomination papers.",
    details: [
      "Candidates submit affidavits detailing their assets, liabilities, and criminal records.",
      "Scrutiny of nominations is done by the Returning Officer.",
      "Candidates have a window to withdraw their nominations if they choose not to contest."
    ],
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"
  },
  {
    id: "campaigning",
    title: "Election Campaigning",
    duration: "Ends 48 hours before polling",
    icon: Megaphone,
    description: "Political parties and candidates actively campaign to gather support from voters.",
    details: [
      "Rallies, public meetings, and door-to-door campaigning take place.",
      "Parties release their election manifestos.",
      "All public campaigning stops 48 hours before the end of polling (Silence Period)."
    ],
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-400"
  },
  {
    id: "polling",
    title: "Polling Day",
    duration: "1 Day (Per phase)",
    icon: Vote,
    description: "Voters cast their votes securely and secretly at designated polling stations.",
    details: [
      "Voters must carry their Voter ID (EPIC) or other approved identity documents.",
      "Voting is conducted using Electronic Voting Machines (EVMs) equipped with VVPATs.",
      "Indelible ink is applied to the voter's left index finger to prevent multiple voting."
    ],
    color: "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400"
  },
  {
    id: "counting",
    title: "Counting & Results",
    duration: "1 Day",
    icon: Award,
    description: "Votes are counted under strict security, and the results are declared.",
    details: [
      "EVMs are opened in the presence of candidates or their agents.",
      "VVPAT slips are tallied for randomly selected polling stations.",
      "The candidate with the highest number of valid votes is declared the winner."
    ],
    color: "bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400"
  }
];

export default function TimelinePage() {
  const [activePhase, setActivePhase] = useState(timelinePhases[0].id);

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Indian Election</span> Process
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          A step-by-step journey of how the world's largest democracy conducts its elections, from voter registration to result declaration.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Timeline Visual - Left Column */}
        <div className="lg:w-1/3 relative">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-800" />
          
          <div className="space-y-2 relative z-10">
            {timelinePhases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              const isPast = timelinePhases.findIndex(p => p.id === activePhase) > index;
              
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className="w-full flex items-center p-4 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-900/50 group text-left"
                >
                  <div className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors duration-300",
                    isActive ? "border-brand-600 bg-brand-600 text-white" : 
                    isPast ? "border-brand-600 text-brand-600 bg-white dark:bg-slate-950" : 
                    "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950 text-slate-400 group-hover:border-slate-400"
                  )}>
                    {isPast ? <CheckCircle2 className="h-5 w-5" /> : 
                     isActive ? <Circle className="h-3 w-3 fill-current" /> : 
                     <span className="text-xs font-medium">{index + 1}</span>}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className={cn(
                      "font-semibold text-lg transition-colors",
                      isActive ? "text-brand-600 dark:text-brand-400" : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                    )}>
                      {phase.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Details - Right Column */}
        <div className="lg:w-2/3">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative min-h-[400px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                 style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            
            {timelinePhases.map((phase) => (
              activePhase === phase.id && (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 md:p-12 relative z-10"
                >
                  <div className={cn("inline-flex items-center justify-center p-3 rounded-2xl mb-6", phase.color)}>
                    <phase.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1.5 rounded-full">
                    <Clock className="h-4 w-4" />
                    Estimated Duration: {phase.duration}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {phase.title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Key Activities:</h4>
                  <ul className="space-y-4">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-brand-500 mr-3 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
