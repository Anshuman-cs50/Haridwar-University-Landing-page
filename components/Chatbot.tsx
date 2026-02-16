
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Minus } from 'lucide-react';
import { askUniversityBot } from '../services/gemini';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string, isQuestion?: boolean}[]>([
    { role: 'bot', text: 'Namaste! 👋 Welcome to Haridwar University. I\'m here to help you with admissions, placements, campus info, and more. Click on any question below or ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What are the placement opportunities?",
    "How do I apply for admissions?",
    "Tell me about the campus",
    "What courses do you offer?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (message?: string) => {
    const msgToSend = message || input;
    if (!msgToSend.trim() || isLoading) return;

    setHasUserInteracted(true);
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msgToSend }]);
    setIsLoading(true);

    const botResponse = await askUniversityBot(msgToSend);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <div className="fixed z-[300] bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-primary text-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-blue-glow transition-all transform hover:scale-110 flex items-center justify-center group active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MessageCircle size={28} className="relative z-10 md:w-8 md:h-8" strokeWidth={2.5} />
        </button>
      ) : (
        <div className="bg-white w-[90vw] sm:w-[380px] md:w-[400px] h-[500px] md:h-[540px] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl flex flex-col border border-gray-100/50 overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-10 duration-500 transform origin-bottom-right">
          {/* Refined Header */}
          <div className="brand-gradient-blue p-6 md:p-7 flex justify-between items-center text-white relative">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-xl">
                 <Bot size={22} className="text-accent" />
              </div>
              <div className="space-y-0.5">
                <p className="font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] leading-none">HU Assistant</p>
                <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                   <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Admissions Desk</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2.5 rounded-xl transition-colors">
                    <Minus size={18} strokeWidth={3} />
                </button>
                <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-colors">
                    <X size={18} strokeWidth={3} />
                </button>
            </div>
          </div>

          {/* Chat Workspace Area */}
          <div ref={scrollRef} className="flex-grow p-5 md:p-6 overflow-y-auto bg-slate-50/50 space-y-5 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 md:p-5 rounded-[1.5rem] text-[12px] md:text-[13px] font-bold leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none shadow-blue-glow' 
                    : 'bg-white text-secondary/80 border border-gray-200/50 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* Show suggested questions only if user hasn't interacted yet */}
            {!hasUserInteracted && messages.length === 1 && (
              <div className="space-y-3 mt-6">
                <p className="text-[11px] font-bold text-secondary/50 uppercase tracking-widest">Quick Questions:</p>
                {suggestedQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="w-full text-left p-3 md:p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl hover:bg-primary/10 hover:border-primary/40 transition-all active:scale-95 text-[12px] md:text-[13px] font-bold text-primary"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/80 p-4 md:p-5 rounded-2xl shadow-sm flex gap-1.5 border border-gray-100">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          {/* Refined Input Bar */}
          <div className="p-5 md:p-6 border-t border-gray-100 bg-white">
            <div className="flex items-center bg-slate-50 rounded-2xl px-5 py-3.5 md:px-6 md:py-4 border border-gray-200/50 focus-within:ring-2 ring-primary/5 transition-all">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-grow bg-transparent outline-none text-[12px] md:text-[13px] font-bold text-secondary placeholder:text-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="text-primary disabled:text-gray-300 transition-all ml-3 p-1.5 hover:bg-primary/5 rounded-lg active:scale-90"
              >
                <Send size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
