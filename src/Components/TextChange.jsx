import React from "react";
import { useState, useEffect } from "react";

const TextChange = () => {
  // Creative text variations with different highlight colors
  const textVariations = [
    { text: "Hi, I'm Sanjana", highlight: "text-indigo-400" },
    { text: "Hi, I'm an engineering student", highlight: "text-purple-400" },
    { text: "Hi, I'm a web developer", highlight: "text-pink-400" }
  ];
  
  const waveEmoji = "👋";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  // Preload emoji
  useEffect(() => {
    const preloadEmoji = document.createElement('div');
    preloadEmoji.style.opacity = '0';
    preloadEmoji.style.position = 'absolute';
    preloadEmoji.style.pointerEvents = 'none';
    preloadEmoji.innerHTML = waveEmoji;
    document.body.appendChild(preloadEmoji);
    
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => {
      document.body.removeChild(preloadEmoji);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    // Typing and erasing effect
    const typingSpeed = 80; // milliseconds per character
    const erasingSpeed = 50; // milliseconds per character
    const pauseTime = 1500; // how long to pause at full text
    
    let timer;
    
    if (isTyping) {
      if (charIndex <= textVariations[currentIndex].text.length) {
        // Still typing
        timer = setTimeout(() => {
          setDisplayText(textVariations[currentIndex].text.substring(0, charIndex));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, add emoji and pause
        timer = setTimeout(() => {
          setDisplayText(textVariations[currentIndex].text + " " + waveEmoji);
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      // Erasing
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayText(textVariations[currentIndex].text.substring(0, charIndex - 1));
        }, erasingSpeed);
      } else {
        // Move to next text
        setCurrentIndex((currentIndex + 1) % textVariations.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [charIndex, isTyping, currentIndex, textVariations, waveEmoji]);

  return (
    <div className="flex items-center">
      <div className="font-medium text-lg md:text-xl lg:text-2xl">
        <span className={textVariations[currentIndex].highlight}>{displayText}</span>
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-0.5 inline-block w-0.5 h-5 bg-white transition-opacity`}></span>
      </div>
    </div>
  );
};

export default TextChange;
