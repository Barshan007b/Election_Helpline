"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";

const glossaryTerms = [
  {
    term: "Electronic Voting Machine (EVM)",
    definition: "A secure electronic device used to record votes. It replaces the old paper ballot system, making voting faster and reducing invalid votes.",
    category: "Voting Process"
  },
  {
    term: "VVPAT (Voter Verifiable Paper Audit Trail)",
    definition: "An independent printer system attached to the EVM. When you vote, it prints a slip with the candidate's name and symbol, allowing you to verify that your vote was recorded correctly before the slip drops into a sealed box.",
    category: "Voting Process"
  },
  {
    term: "Model Code of Conduct (MCC)",
    definition: "A set of guidelines issued by the Election Commission of India to regulate political parties and candidates prior to elections. It ensures free and fair elections and prevents the ruling party from misusing its power.",
    category: "Regulations"
  },
  {
    term: "Constituency",
    definition: "A specific geographical area that elects one representative to a legislative body (like the Lok Sabha or State Assembly). India is divided into 543 parliamentary constituencies.",
    category: "Structure"
  },
  {
    term: "NOTA (None Of The Above)",
    definition: "An option on the voting machine that allows a voter to officially register a vote of rejection for all contesting candidates. It empowers voters to express dissatisfaction.",
    category: "Voting Process"
  },
  {
    term: "Election Commission of India (ECI)",
    definition: "An autonomous constitutional authority responsible for administering election processes in India at national and state levels.",
    category: "Institutions"
  },
  {
    term: "Manifesto",
    definition: "A published declaration of the intentions, motives, or views of a political party. It outlines what the party promises to do if elected to power.",
    category: "Campaign"
  },
  {
    term: "Incumbent",
    definition: "The current holder of a political office. For example, the current Prime Minister is the incumbent Prime Minister.",
    category: "General"
  },
  {
    term: "First Past The Post (FPTP)",
    definition: "The voting system used in India for direct elections (like Lok Sabha). The candidate who receives the highest number of votes in a constituency wins, even if they don't have an absolute majority (>50%).",
    category: "Structure"
  },
  {
    term: "Anti-Defection Law",
    definition: "A law designed to prevent elected representatives from changing their political party after winning an election, ensuring stability in the government.",
    category: "Regulations"
  }
];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-green-100 dark:bg-green-900/30 mb-6">
            <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Election <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Glossary</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Demystifying political jargon. Find simple explanations for complex election terminology.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search for a term (e.g., EVM, NOTA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 text-lg"
            />
          </div>
        </div>

        {/* Glossary Terms List */}
        <div className="space-y-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={index}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {item.term}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 whitespace-nowrap w-fit">
                    {item.category}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {item.definition}
                </p>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <Search className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No terms found</h3>
              <p className="text-slate-500 dark:text-slate-400">
                We couldn't find anything matching "{searchTerm}". Try another word.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
