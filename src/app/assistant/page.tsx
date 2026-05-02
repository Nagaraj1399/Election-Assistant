"use client";

import { useChat } from '@ai-sdk/react';
import { Bot, Send, User, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AssistantPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: 'Namaskaram! I am your Indian Election Assistant. How can I help you understand the electoral process today? You can ask me about voter registration, EVMs, the Election Commission, or anything else related to Indian elections.',
      }
    ]
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl h-[calc(100vh-4rem)] flex flex-col">
      <div className="mb-6 flex-shrink-0">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight mt-4">AI Election Assistant</h1>
        <p className="text-slate-500">Powered by Google Gemini</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass rounded-2xl overflow-hidden flex flex-col shadow-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  m.role === 'user' ? 'bg-saffron text-white' : 'bg-slate-800 text-white dark:bg-white dark:text-slate-800'
                }`}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>

                {/* Message Bubble */}
                <div className={`p-4 rounded-2xl text-[15px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-saffron text-white rounded-tr-sm' 
                    : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-tl-sm text-slate-800 dark:text-slate-200 shadow-sm'
                }`}>
                  {m.content.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex w-full justify-start">
               <div className="flex max-w-[80%] gap-3 flex-row">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 text-white dark:bg-white dark:text-slate-800">
                    <Bot size={16} />
                 </div>
                 <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-tl-sm text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                   <Loader2 className="w-4 h-4 animate-spin" />
                   <span className="text-sm text-slate-500">Thinking...</span>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question about Indian elections..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-3 px-6 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <Send size={18} className="mr-2 hidden sm:block" />
              <span>Send</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
