import Link from "next/link";
import { Vote, Code, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Vote className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                VoteWise <span className="text-brand-600 dark:text-brand-400">AI</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              Empowering citizens with an intelligent, interactive, and beginner-friendly guide to the Indian election process.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <span className="sr-only">Social Media</span>
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <span className="sr-only">Source Code</span>
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/timeline" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Election Timeline
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Election Glossary
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Ask the AI
                </Link>
              </li>
              <li>
                <a href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Election Commission of India
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 dark:text-slate-500 mt-4 block">
                  Disclaimer: VoteWise AI is an educational tool and not affiliated with the government.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} VoteWise AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
