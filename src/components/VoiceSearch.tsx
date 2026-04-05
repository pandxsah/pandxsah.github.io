// src/components/VoiceSearch.tsx
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useChat } from '@ai-sdk/react';
import { Mic, MessageSquare, Loader2, X, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeData from '../data/resume.json';

export const VoiceSearch = () => {
  const [isChatMode, setIsChatMode] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [query, setQuery] = useState('');

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { messages, append, isLoading } = useChat({
    api: '/api/chat',
    body: { context: resumeData },
  });

  const handleMicClick = () => {
    resetTranscript();
    setQuery('');
    setIsChatMode(false);
    SpeechRecognition.startListening({ continuous: false });
  };

  const toggleMode = () => {
    if (listening) SpeechRecognition.stopListening();
    setIsChatMode(!isChatMode);
    setShowAnswer(false);
    setQuery(''); // Clear query when switching
  };

  // Handle Voice Auto-submit
  useEffect(() => {
    if (!listening && transcript.length > 0 && !isChatMode) {
      append({ role: 'user', content: transcript });
      setShowAnswer(true);
    }
  }, [listening, transcript, append, isChatMode]);

  // --- THE FIX: HANDLE ENTER KEY ---
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      e.preventDefault(); // Stop any default form behavior
      append({ role: 'user', content: query });
      setShowAnswer(true);
      setQuery(''); // Clear input after sending
    }
  };

  const lastMessage = messages[messages.length - 1];
  const aiAnswer = lastMessage?.role === 'assistant' ? lastMessage.content : '';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[340px] px-4 z-[9999]">
      <div className="relative group">
        
        {/* THE CHIP */}
        <div className="flex items-center bg-[#080808]/95 backdrop-blur-xl border border-white/5 rounded-full p-1 shadow-2xl">
          
          <div className={`flex-1 flex items-center rounded-full p-0.5 transition-all duration-300 ${isChatMode ? 'bg-white/5' : 'bg-[#00f2ff]'}`}>
            
            <button 
              onClick={isChatMode ? undefined : handleMicClick}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                isChatMode ? 'text-white/40' : (listening ? 'bg-white text-black' : 'bg-black/10 text-black')
              }`}
            >
              {listening ? <Loader2 size={14} className="animate-spin" /> : (isChatMode ? <Keyboard size={14} /> : <Mic size={14} />)}
            </button>

            {/* FONT UPDATED TO MATCH SCREENSHOT */}
            <input 
              type="text"
              readOnly={!isChatMode}
              value={isChatMode ? query : (listening ? transcript : "ASK ABOUT GROWTH")}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown} // FIXED ENTER LOGIC
              placeholder={isChatMode ? "TYPE QUERY..." : "TAP MIC"}
              className={`flex-1 bg-transparent px-3 text-[11px] font-black uppercase tracking-tighter focus:outline-none transition-colors ${
                isChatMode ? 'text-white placeholder:text-white/20' : 'text-black placeholder:text-black/40'
              } font-sans`} // Using font-sans with heavy weight for that look
            />
          </div>

          <button 
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
              <button onClick={() => setShowAnswer(false)} className="absolute top-4 right-4 text-white/20 hover:text-white">
                <X size={12} />
              </button>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#00f2ff] font-black">Digital Twin Response</span>
              </div>

              {isLoading && !aiAnswer ? (
                <div className="h-3 w-16 bg-white/5 animate-pulse rounded" />
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