"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, MessageSquare, Vote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-brand-900/40" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-accent-900/20" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-brand-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-brand-800/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-900 border border-brand-100 dark:border-slate-800 text-brand-600 dark:text-brand-400 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 dark:bg-brand-400 animate-pulse"></span>
              Democracy Made Simple
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 max-w-4xl mx-auto"
          >
            Understand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Vote</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Your AI-powered guide to the Indian election process. Learn how to vote, understand complex terms, and navigate the timeline of democracy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 group"
            >
              Explore the Timeline
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all shadow-sm"
            >
              Ask the AI Assistant
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Everything you need to be an informed voter
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We've broken down the complex election machinery into simple, digestible pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Interactive Timeline
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Follow the journey of an election from the announcement of dates to the final counting and result declaration.
              </p>
              <Link href="/timeline" className="text-brand-600 dark:text-brand-400 font-medium inline-flex items-center group">
                View Timeline <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                AI Chat Assistant
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Have a specific question? Ask our AI assistant about polling booths, required IDs, or how the EVM works.
              </p>
              <Link href="/chat" className="text-accent-600 dark:text-accent-400 font-medium inline-flex items-center group">
                Start Chatting <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Election Glossary
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Confused by terms like "Model Code of Conduct" or "VVPAT"? Our glossary explains them in plain language.
              </p>
              <Link href="/glossary" className="text-green-600 dark:text-green-400 font-medium inline-flex items-center group">
                Browse Terms <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-brand-600 dark:bg-brand-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Vote className="h-16 w-16 text-brand-100 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to become an informed voter?
          </h2>
          <p className="text-xl text-brand-100 mb-10">
            Start by exploring the election timeline to see how the democratic process unfolds.
          </p>
          <Link
            href="/timeline"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-600 bg-white hover:bg-slate-50 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
