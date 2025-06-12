'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterText({ text, className = '', delay = 30 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    setIsTyping(true);
    setDisplayText('');

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        const nextChar = text[currentIndex];
        if (nextChar) {
          setDisplayText(prev => prev + nextChar);
          currentIndex++;
          setTimeout(typeNextChar, delay);
        }
      } else {
        setIsTyping(false);
      }
    };

    // Start typing after a small delay
    const timeout = setTimeout(typeNextChar, 100);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={`${className} inline-block`}>
      {displayText}
      {isTyping && <span className="animate-blink ml-0.5">|</span>}
    </span>
  );
} 