"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Bot, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  content: string;
};

const suggestedQuestions = [
  "How do I register to vote for the first time?",
  "What documents are needed at the polling booth?",
  "How does an EVM work?",
  "What is the Model Code of Conduct?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Namaste! I'm VoteWise AI, your personal guide to the Indian election process. I can help you understand how to register, what happens on polling day, or explain complex election terms. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (err) {
      setError("Oops! Something went wrong. Please check if your API key is configured correctly and try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (text: string) => {
    // Simple formatting for bold text from markdown
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950">
      <div className="flex-1 container mx-auto max-w-4xl p-4 sm:p-6 flex flex-col h-full overflow-hidden">
        
        {/* Chat Header */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-t-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 shrink-0">
          <div className="bg-brand-100 dark:bg-brand-900/50 p-2 rounded-lg">
            <Sparkles className="h-6 w-6 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 dark:text-white">VoteWise Assistant</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Powered by AI to help you understand democracy</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800 scrollbar-thin">
          {messages.map((message, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
              className={cn(
                "flex gap-4 max-w-[85%]",
                message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                message.role === "user" 
                  ? "bg-slate-800 text-white dark:bg-slate-700" 
                  : "bg-brand-600 text-white"
              )}>
                {message.role === "user" ? <User size={16} /> : <Bot size={16} />}
              </div>
              
              <div className={cn(
                "p-4 rounded-2xl whitespace-pre-wrap leading-relaxed",
                message.role === "user"
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-tr-sm"
                  : "bg-brand-50 border border-brand-100 dark:bg-brand-900/20 dark:border-brand-800/50 text-slate-800 dark:text-slate-200 rounded-tl-sm"
              )}>
                {formatMessage(message.content)}
              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 max-w-[85%] mr-auto">
              <div className="h-8 w-8 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 dark:bg-brand-900/20 dark:border-brand-800/50 rounded-tl-sm flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-brand-600 dark:text-brand-400" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Voting systems engaged...</span>
              </div>
            </motion.div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm mx-auto w-fit">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-b-2xl border border-slate-200 dark:border-slate-800 border-t-0 shadow-sm shrink-0">
          
          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(q);
                    // Slight delay to let the input update visually before submitting
                    setTimeout(() => handleSubmit(), 50);
                  }}
                  className="text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about elections..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-lg transition-colors flex items-center justify-center"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400">
              AI can make mistakes. Please verify important information with the official ECI website.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
