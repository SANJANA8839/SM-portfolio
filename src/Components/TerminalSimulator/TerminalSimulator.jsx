import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaMinusSquare, FaExpandArrowsAlt } from 'react-icons/fa';

const TerminalSimulator = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => [
        'Available commands:',
        '  help         - Show this help message',
        '  about        - Learn about Sanjana',
        '  skills       - List technical skills',
        '  projects     - Show recent projects',
        '  contact      - Get contact information',
        '  experience   - View work experience',
        '  fun          - Try some fun commands!',
        '  clear        - Clear terminal',
        '',
        'Type any command to get started!'
      ]
    },
    about: {
      description: 'Learn about Sanjana',
      execute: () => [
        '👋 Hello! I\'m Sanjana Meena',
        '',
        '🎯 Full Stack Developer passionate about creating',
        '   digital experiences that matter.',
        '',
        '🚀 I specialize in:',
        '   • React & Modern JavaScript',
        '   • UI/UX Design',
        '   • Performance Optimization',
        '   • Creative Problem Solving',
        '',
        '💡 Always learning, always building!'
      ]
    },
    skills: {
      description: 'List technical skills',
      execute: () => [
        '🛠️  Technical Skills:',
        '',
        'Frontend:',
        '  ✓ React.js, JavaScript (ES6+)',
        '  ✓ HTML5, CSS3, Tailwind CSS',
        '  ✓ Framer Motion, Responsive Design',
        '',
        'Backend:',
        '  ✓ Node.js, Express.js',
        '  ✓ RESTful APIs',
        '',
        'Tools & Others:',
        '  ✓ Git, GitHub, Vite',
        '  ✓ EmailJS, UI/UX Design'
      ]
    },
    projects: {
      description: 'Show recent projects',
      execute: () => [
        '🚀 Recent Projects:',
        '',
        '1. Interactive Portfolio Website',
        '   → This very website you\'re exploring!',
        '   → Tech: React, Tailwind, Framer Motion',
        '',
        '2. Bakery shop system',
        '   → online bakery shop experience',
        '   → Tech: HTML, CSS, JavaScript',
        '',
        '3. online banking system',
        '   → console based banking system',
        '   → Tech: C++, console based',
        '',
        'Visit the Projects section to see more!'
      ]
    },
    contact: {
      description: 'Get contact information',
      execute: () => [
        '📞 Let\'s Connect!',
        '',
        '📧 Email: sanjanameena8839@gmail.com',
        '💼 LinkedIn: linkedin.com/in/sanjana-meena-13843628b/',
        '🐙 GitHub: github.com/SANJANA8839',
        '',
        '💬 Feel free to reach out for:',
        '   • Project collaborations',
        '   • Job opportunities',
        '   • Tech discussions',
        '   • Coffee chats!'
      ]
    },
    experience: {
      description: 'View work experience',
      execute: () => [
        '💼 Professional Journey:',
        '',
        '🎓 Frontend Developer',
        '   → Building modern web applications',
        '   → Focus on user experience & performance',
        '',
        '🌱 Continuous Learning:',
        '   → Staying updated with latest technologies',
        '   → Contributing to open source projects',
        '   → Building side projects for fun',
        '',
        '🎯 Currently seeking new opportunities!'
      ]
    },
    fun: {
      description: 'Fun commands to try',
      execute: () => [
        '🎉 Fun Commands to Try:',
        '',
        '  coffee      - Get a virtual coffee',
        '  joke        - Hear a programming joke',
        '  matrix      - Enter the Matrix',
        '  wisdom      - Get some developer wisdom',
        '  surprise    - Something special!',
        '',
        'Try them out! 😄'
      ]
    },
    coffee: {
      description: 'Get a virtual coffee',
      execute: () => [
        '☕ Here\'s your virtual coffee!',
        '',
        '      )  (',
        '     (   ) )',
        '      ) ( (',
        '    _______)_',
        '   /         \\',
        '  /  Coffee?  \\',
        ' /______________\\',
        '',
        'Perfect fuel for coding! ☕✨'
      ]
    },
    joke: {
      description: 'Programming joke',
      execute: () => {
        const jokes = [
          'Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛',
          'How many programmers does it take to change a light bulb?\nNone. That\'s a hardware problem. 💡',
          'Why did the programmer quit his job?\nHe didn\'t get arrays! 📊',
          'What\'s a programmer\'s favorite hangout place?\nFoo Bar! 🍺',
          'Why do Java developers wear glasses?\nBecause they can\'t C#! 👓'
        ];
        return [jokes[Math.floor(Math.random() * jokes.length)]];
      }
    },
    matrix: {
      description: 'Enter the Matrix',
      execute: () => [
        '🔴 🔵 Welcome to the Matrix...',
        '',
        '01001000 01100101 01101100 01101100 01101111',
        '01010111 01101111 01110010 01101100 01100100',
        '',
        'The Matrix has you... 🕶️',
        'Follow the white rabbit. 🐰',
        '',
        'Wake up, Neo... The portfolio has you. 💊'
      ]
    },
    wisdom: {
      description: 'Developer wisdom',
      execute: () => {
        const wisdom = [
          '"Talk is cheap. Show me the code." - Linus Torvalds',
          '"The best error message is the one that never shows up." - Thomas Fuchs',
          '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          '"First, solve the problem. Then, write the code." - John Johnson',
          '"Any fool can write code that a computer can understand.\nGood programmers write code that humans can understand." - Martin Fowler'
        ];
        return [wisdom[Math.floor(Math.random() * wisdom.length)]];
      }
    },
    surprise: {
      description: 'Something special',
      execute: () => [
        '🎊 SURPRISE! 🎊',
        '',
        '   🌟 Thank you for exploring my terminal! 🌟',
        '',
        '     You\'ve unlocked the easter egg! 🥚',
        '',
        '   This shows you\'re curious and adventurous -',
        '   exactly the kind of person I\'d love to work with!',
        '',
        '   Let\'s build something amazing together! 🚀',
        '',
        '   Type "contact" to reach out! 📬'
      ]
    },
    clear: {
      description: 'Clear terminal',
      execute: () => 'CLEAR'
    },
    ls: {
      description: 'List directory contents',
      execute: () => [
        'portfolio/',
        '├── about.md',
        '├── projects/',
        '├── skills.json',
        '├── experience.md',
        '└── contact.txt'
      ]
    },
    pwd: {
      description: 'Print working directory',
      execute: () => [`/home/sanjana/portfolio${currentDirectory === '~' ? '' : '/' + currentDirectory}`]
    }
  };

  const executeCommand = async (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `${currentDirectory} $ ${cmd}` }]);
    
    setIsTyping(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd].execute();
      
      if (result === 'CLEAR') {
        setHistory([]);
      } else {
        setHistory(prev => [...prev, { type: 'output', content: result }]);
      }
    } else {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: [`Command '${trimmedCmd}' not found. Type 'help' for available commands.`] 
      }]);
    }
    
    setIsTyping(false);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setHistory([
        { 
          type: 'output', 
          content: [
            '🚀 Welcome to Sanjana\'s Interactive Terminal!',
            '',
            '✨ This is a fully functional command-line interface',
            '   where you can explore my portfolio in a unique way.',
            '',
            '💡 Type "help" to see available commands.',
            '🎯 Try "about", "skills", or "projects" to get started!',
            ''
          ] 
        }
      ]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-2">
              <FaTerminal className="text-green-400" />
              <span className="text-green-400 font-mono text-sm">sanjana@portfolio:~$</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMinusSquare className="text-yellow-400 cursor-pointer hover:text-yellow-300" />
              <FaExpandArrowsAlt className="text-green-400 cursor-pointer hover:text-green-300" />
              <FaTimes 
                className="text-red-400 cursor-pointer hover:text-red-300" 
                onClick={onClose}
              />
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="flex-1 bg-black p-4 overflow-y-auto font-mono text-sm"
          >
            {history.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-2"
              >
                {entry.type === 'command' && (
                  <div className="text-green-400">
                    {entry.content}
                  </div>
                )}
                {entry.type === 'output' && (
                  <div className="text-gray-300">
                    {entry.content.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
                {entry.type === 'error' && (
                  <div className="text-red-400">
                    {entry.content.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400"
              >
                <span className="inline-block animate-pulse">Processing...</span>
              </motion.div>
            )}
          </div>

          {/* Terminal Input */}
          <div className="bg-gray-900 px-4 py-2 border-t border-gray-700">
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400 mr-2 font-mono">{currentDirectory} $</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-gray-300 outline-none font-mono"
                placeholder="Type a command..."
                disabled={isTyping}
              />
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-green-400 ml-1"
              />
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalSimulator;
