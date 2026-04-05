import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useChat } from '@ai-sdk/react';
import { Mic, MessageSquare, Loader2, X, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeData from '../data/resume.json';

export const VoiceSearch = () => {
  const [isChatMode, setIsChatMode] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null); // To focus the input manually

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { messages, append, isLoading } = useChat({
    api: '/api/chat',
    body: { context: resumeData },
  });

  // --- VOICE LOGIC ---
  const handleMicClick = () => {
    setIsChatMode(false);
    resetTranscript();
    setQuery('');
    SpeechRecognition.startListening({ continuous: false });
  };

  // --- TOGGLE LOGIC (FORCE STOP MIC) ---
  const toggleMode = () => {
    SpeechRecognition.stopListening(); // Kill the mic immediately
    const nextMode = !isChatMode;
    setIsChatMode(nextMode);
    setShowAnswer(false);
    setQuery('');

    // Focus the input if switching to chat
    if (nextMode) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // --- SUBMIT LOGIC ---
  const handleFormSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // Stop page refresh
    
    if (query.trim() !== '' && !isLoading) {
      append({ role: 'user', content: query });
      setShowAnswer(true);
      setQuery('');
    }
  };

  // Voice Auto-Submit
  useEffect(() => {
    if (!listening && transcript.length > 0 && !isChatMode) {
      append({ role: 'user', content: transcript });
      setShowAnswer(true);
    }
  }, [listening, transcript, append, isChatMode]);

  const lastMessage = messages[messages.length - 1];
  const aiAnswer = lastMessage?.role === 'assistant' ? lastMessage.content : '';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[340px] px-4 z-[9999]">
      <div className="relative group">
        
        {/* THE CHIP */}
        <div className="flex items-center bg-[#080808]/95 backdrop-blur-xl border border-white/5 rounded-full p-1 shadow-2xl">
          
          <div className={`flex-1 flex items-center rounded-full p-0.5 transition-all duration-300 ${isChatMode ? 'bg-white/5' : 'bg-[#00f2ff]'}`}>
            
            <button 
              type="button" 
              onClick={handleMicClick}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                isChatMode ? 'text-white/40' : (listening ? 'bg-white text-black' : 'bg-black/10 text-black')
              }`}
            >
              {listening ? <Loader2 size={14} className="animate-spin" /> : <Mic size={14} />}
            </button>

            {/* THE FORM */}
            <form 
              onSubmit={handleFormSubmit} 
              className="flex-1 flex items-center"
              autoComplete="off"
            >
              <input 
                ref={inputRef}
                type="text"
                disabled={!isChatMode && !listening} // Only type when chat is active
                value={isChatMode ? query : (listening ? transcript : "CHAT BOT UNDER DEVELOPMENT")}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isChatMode ? "TYPE QUERY..." : "TAP MIC"}
                className={`flex-1 bg-transparent px-3 text-[11px] font-black uppercase tracking-tighter focus:outline-none transition-colors font-sans ${
                  isChatMode ? 'text-white placeholder:text-white/20' : 'text-black placeholder:text-black/40'
                }`}
              />
              <button type="submit" className="hidden" />
            </form>
          </div>

          {/* TOGGLE */}
          <button 
            type="button"
            onClick={toggleMode}
            className={`px-3 transition-all duration-300 border-l border-white/5 ml-1 ${
              isChatMode ? 'text-[#00f2ff]' : 'text-white/30 hover:text-white'
            }`}
          >
            <MessageSquare size={14} />
          </button>
        </div>

        {/* AI RESPONSE */}
        <AnimatePresence>
          {showAnswer && (aiAnswer || isLoading) && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -12 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-0 right-0 mb-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-lg"
            >
              <button 
                type="button"
                onClick={() => setShowAnswer(false)} 
                className="absolute top-4 right-4 text-white/20 hover:text-white"
              >
                <X size={12} />
              </button>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#00f2ff] font-black">AI Response</span>
              </div>

              {isLoading && !aiAnswer ? (
                <div className="flex gap-1.5 pt-1">
                  <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              ) : (
                <p className="text-[12px] text-white/90 leading-relaxed font-medium italic">
                  "{aiAnswer}"
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};